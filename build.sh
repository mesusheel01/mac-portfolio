#!/bin/bash

# Build script for deployment
# This ensures Prisma client is properly generated before building the app

set -e

echo "Starting deployment build..."

# Install dependencies
echo "Installing dependencies..."
pnpm install

# Generate Prisma client
echo "Generating Prisma client..."
pnpm --filter @repo/db build

# Build the susheel application
echo "Building susheel application..."
pnpm --filter susheel build

echo "Build completed successfully!"
