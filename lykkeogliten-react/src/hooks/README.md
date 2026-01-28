# Hooks

This directory contains custom React hooks for reusable stateful logic.

## Structure

- Create custom hooks following React naming conventions (prefix with `use`)
- Keep hooks focused on a single concern
- Document hook parameters and return values

## Example

```
hooks/
├── useAuth.ts       # Authentication state and logic
├── useFetch.ts      # Data fetching hook
├── useLocalStorage.ts # Local storage hook
└── useDebounce.ts   # Debounce hook
```

## Usage

```typescript
// useLocalStorage.ts
export const useLocalStorage = <T>(key: string, initialValue: T) => {
  // Hook implementation
  return [storedValue, setValue];
};

// Import in components
import { useLocalStorage } from '@/hooks/useLocalStorage';
```
