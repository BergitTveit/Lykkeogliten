# Services

This directory contains service modules for handling API calls, external integrations, and business logic.

## Structure

- Separate concerns by creating different service files (e.g., `authService.ts`, `apiService.ts`)
- Handle HTTP requests, data transformation, and error handling
- Keep services independent of React components

## Example

```
services/
├── api.ts          # Base API configuration
├── authService.ts  # Authentication-related API calls
├── userService.ts  # User-related API calls
└── storageService.ts # Local storage utilities
```
