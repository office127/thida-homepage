#!/bin/bash

# Thida Royal FTP Deployment Script
# Usage: ./deploy.sh [environment]
# Environment: production (default)

set -e

ENVIRONMENT=${1:-production}
DOMAIN="thida-royal-thaimassage.de"

echo "🚀 Starting deployment for $ENVIRONMENT environment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if required tools are installed
check_dependencies() {
    print_status "Checking dependencies..."
    
    if ! command -v node &> /dev/null; then
        print_error "Node.js is not installed"
        exit 1
    fi
    
    if ! command -v npm &> /dev/null; then
        print_error "npm is not installed"
        exit 1
    fi
    
    if ! command -v lftp &> /dev/null; then
        print_warning "lftp is not installed. Installing..."
        if [[ "$OSTYPE" == "darwin"* ]]; then
            brew install lftp
        elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
            sudo apt-get update && sudo apt-get install -y lftp
        else
            print_error "Please install lftp manually"
            exit 1
        fi
    fi
    
    print_success "All dependencies are available"
}

# Load environment variables
load_env() {
    if [ -f ".env.$ENVIRONMENT" ]; then
        print_status "Loading environment variables from .env.$ENVIRONMENT"
        source .env.$ENVIRONMENT
    elif [ -f ".env" ]; then
        print_status "Loading environment variables from .env"
        source .env
    else
        print_warning "No environment file found. Using system environment variables."
    fi
    
    # Check required FTP variables
    if [ -z "$FTP_SERVER" ] || [ -z "$FTP_USERNAME" ] || [ -z "$FTP_PASSWORD" ]; then
        print_error "FTP credentials not found. Please set FTP_SERVER, FTP_USERNAME, and FTP_PASSWORD"
        exit 1
    fi
}

# Clean previous builds
clean_build() {
    print_status "Cleaning previous builds..."
    rm -rf .output .nuxt node_modules/.cache dist
    print_success "Clean completed"
}

# Build the application
build_app() {
    print_status "Building application..."
    npm ci
    npm run generate
    print_success "Build completed"
}

# Prepare deployment files
prepare_deployment() {
    print_status "Preparing deployment files..."
    
    # Copy .htaccess
    cp .htaccess .output/public/
    
    print_success "Deployment files prepared"
}

# Deploy to FTP
deploy_ftp() {
    print_status "Deploying to FTP server: $FTP_SERVER"
    
    # Create lftp script
    cat > deploy.lftp << EOF
set ftp:ssl-allow no
set ftp:passive-mode on
set ftp:list-options -a
set ftp:charset utf8
set file:charset utf8

open $FTP_SERVER
user $FTP_USERNAME $FTP_PASSWORD

# Upload static files
lcd .output/public
cd /
mirror -R --delete --verbose --exclude-glob=".DS_Store" --exclude-glob="*.log" --exclude-glob=".git*" --exclude-glob="node_modules" --exclude-glob=".nuxt" --exclude-glob="thida-spa-*.tar.gz" --exclude-glob="README.md" --exclude-glob=".env*" --exclude-glob="package*.json" --exclude-glob="nuxt.config.ts" --exclude-glob="composables" --exclude-glob="components" --exclude-glob="layouts" --exclude-glob="pages" --exclude-glob="assets" --exclude-glob="plugins" --exclude-glob="public" --exclude-glob="thida-spa" . .

# Set permissions
chmod 644 index.html
chmod 644 200.html
chmod 644 404.html
chmod 644 .htaccess
chmod 755 _nuxt
chmod 755 images
chmod 755 about
chmod 755 services
chmod 755 contact
chmod 755 impressum

quit
EOF
    
    # Execute lftp script
    lftp -f deploy.lftp
    
    # Clean up
    rm deploy.lftp
    
    print_success "FTP deployment completed"
}

# Verify deployment
verify_deployment() {
    print_status "Verifying deployment..."
    
    # Test if the site is accessible
    if curl -s -o /dev/null -w "%{http_code}" "https://$DOMAIN" | grep -q "200"; then
        print_success "Deployment verified successfully"
        print_success "Site is accessible at: https://$DOMAIN"
    else
        print_warning "Deployment completed but site verification failed"
        print_warning "Please check the site manually at: https://$DOMAIN"
    fi
}

# Main deployment process
main() {
    print_status "Starting Thida Royal deployment for $ENVIRONMENT"
    print_status "Target domain: $DOMAIN"
    
    # Production deployment info
    if [ "$ENVIRONMENT" = "production" ]; then
        print_status "Deploying to PRODUCTION environment"
        print_status "Target: https://$DOMAIN"
    fi
    
    check_dependencies
    load_env
    clean_build
    build_app
    prepare_deployment
    deploy_ftp
    verify_deployment
    
    print_success "🎉 Deployment completed successfully!"
    print_success "🌐 Site URL: https://$DOMAIN"
}

# Run main function
main "$@"
