#!/bin/bash
# Quick deploy script - always deploys to dev by default
# Usage: ./deploy-staging.sh [environment]
# Environment: dev (default), production

ENVIRONMENT=${1:-dev}
echo "🚀 Deploying to $ENVIRONMENT environment..."
./deploy.sh $ENVIRONMENT
