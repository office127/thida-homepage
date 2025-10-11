#!/bin/bash
# GitHub credentials for thida-homepage project only
# Source this file before working on this project: source git-credentials.sh

export GITHUB_USERNAME="office127"
export GIT_USER_NAME="office127"
export GIT_USER_EMAIL="office@thida-royal.de"

# Set git config for this project only
git config --local user.name "$GIT_USER_NAME"
git config --local user.email "$GIT_USER_EMAIL"

echo "✅ Project-specific git credentials configured for thida-homepage"
echo "Username: $GIT_USER_NAME <$GIT_USER_EMAIL>"
echo "GitHub: $GITHUB_USERNAME"
