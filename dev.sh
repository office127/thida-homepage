#!/bin/bash
# Local development script - builds and serves locally without deployment
# Usage: ./dev.sh

echo "🚀 Starting local development build..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if required tools are installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed"
    exit 1
fi

if ! command -v npm &> /dev/null; then
    print_error "npm is not installed"
    exit 1
fi

print_success "Dependencies are available"

# Clean previous builds
print_status "Cleaning previous builds..."
rm -rf .output .nuxt node_modules/.cache dist
print_success "Clean completed"

# Build the application
print_status "Building application..."
npm ci
npm run generate
print_success "Build completed"

# Serve locally
print_status "Starting local server..."
print_success "🎉 Local development server ready!"
print_success "🌐 Preview: npx serve .output/public"
print_success "🔧 Dev server: npm run dev"

echo ""
echo "Available commands:"
echo "  npx serve .output/public    - Preview built site"
echo "  npm run dev                - Start development server"
echo "  ./deploy.sh                - Deploy to production (requires confirmation)"
