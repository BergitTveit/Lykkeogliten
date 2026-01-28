# Utils

This directory contains utility functions and helper modules used throughout the application.

## Structure

- Create focused utility files for specific purposes
- Keep functions pure and testable
- Avoid component-specific logic (that belongs in components or hooks)

## Example

```
utils/
├── formatters.ts   # Data formatting utilities
├── validators.ts   # Validation functions
├── constants.ts    # Application constants
└── helpers.ts      # General helper functions
```

## Usage

```typescript
// formatters.ts
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US');
};

// Import in components
import { formatDate } from '@/utils/formatters';
```
