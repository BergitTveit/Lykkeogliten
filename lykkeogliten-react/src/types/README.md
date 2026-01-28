# Types

This directory contains TypeScript type definitions, interfaces, and type utilities.

## Structure

- Define shared types and interfaces used across the application
- Group related types together in separate files
- Export types for use throughout the codebase

## Example

```
types/
├── index.ts        # Re-export all types
├── user.types.ts   # User-related types
├── api.types.ts    # API response types
└── common.types.ts # Common/shared types
```

## Usage

```typescript
// user.types.ts
export interface User {
  id: string;
  name: string;
  email: string;
}

// Import in components
import { User } from '@/types/user.types';
```
