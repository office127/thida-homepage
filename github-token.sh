#!/bin/bash
# GitHub Personal Access Token for thida-homepage project
# DO NOT COMMIT THIS FILE TO GIT!

# Set your GitHub Personal Access Token here
export GITHUB_TOKEN="your_personal_access_token_here"
export GITHUB_USERNAME="office127"

# Configure git to use the token
git config --local credential.helper "store --file=.git-credentials"

echo "✅ GitHub token configured for thida-homepage project"
echo "Username: $GITHUB_USERNAME"
echo "Token: ${GITHUB_TOKEN:0:8}..." # Show only first 8 characters for security
