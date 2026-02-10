# Deployment

This document describes how the project is built and prepared for deployment.

## Local Development

Install dependencies:

npm install

Run the development server:

npm run dev

## Production Build

Generate a production-ready build:

npm run build

The build output is generated in the `dist` directory.

## Notes

- The `dist` directory is generated automatically and should not be committed to version control
- Deployment can be handled by any static hosting provider that supports modern JavaScript applications
- Environment-specific configuration should be handled outside of the repository
