# AGENTS.md

> Guidelines for AI coding agents operating in this repository.

## Project Overview

- **Stack**: TanStack Start + React 19 + TypeScript + Tailwind CSS v4 + shadcn/ui
- **Package Manager**: Bun
- **Runtime**: Vite + Nitro (SSR)

---

## Build / Lint / Test Commands

```bash
# Development
bun dev                    # Start dev server on port 3000

# Build & Preview
bun build                  # Production build
bun preview                # Preview production build

# Linting & Formatting
bun lint                   # Run ESLint
bun format                 # Run Prettier
bun check                  # Format + lint fix (prettier --write . && eslint --fix)

# Testing (Vitest)
bun test                   # Run all tests
bunx vitest run <file>     # Run a single test file
bunx vitest run -t "name"  # Run tests matching pattern
bunx vitest --watch        # Watch mode
```

---

## Code Style Guidelines

### Formatting (Prettier)

```javascript
{
  semi: false,              // No semicolons
  singleQuote: true,        // Single quotes for strings
  trailingComma: "all",     // Trailing commas everywhere
}
```

### TypeScript Configuration

- **Target**: ES2022
- **Strict mode**: Enabled
- **No unused locals/parameters**: Enforced
- **Path alias**: `@/*` maps to `./src/*`

### Import Order

1. React / external packages
2. Internal aliases (`@/components`, `@/lib`, etc.)
3. Relative imports
4. Types (use `type` keyword for type-only imports)

```typescript
// External
import React from 'react'
import { Link } from '@tanstack/react-router'

// Internal aliases
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

// Relative
import { IconArrowRight } from './ui/Icons'

// Type imports
import type { ClassValue } from 'clsx'
```

### Naming Conventions

| Element          | Convention                                     | Example                            |
| ---------------- | ---------------------------------------------- | ---------------------------------- |
| Components       | PascalCase                                     | `Hero.tsx`, `Navbar.tsx`           |
| Hooks            | camelCase with `use` prefix                    | `useAuth`, `useWorkflow`           |
| Utilities        | camelCase                                      | `cn`, `formatDate`                 |
| Types/Interfaces | PascalCase                                     | `WorkflowStep`, `NavItem`          |
| Enums            | PascalCase + SCREAMING_SNAKE values            | `LoadingState.IDLE`                |
| Files            | PascalCase for components, camelCase for utils | `Hero.tsx`, `utils.ts`             |
| CSS classes      | Tailwind utility-first                         | Use `cn()` for conditional classes |

### Component Patterns

```typescript
// Functional component with React.FC
export const Hero: React.FC = () => {
  return (
    <section className="...">
      {/* content */}
    </section>
  )
}

// With props interface
interface FeatureCardProps {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon: Icon }) => {
  return (
    <div className="...">
      <Icon className="w-8 h-8" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
```

### Type Definitions

```typescript
// Interfaces for object shapes
export interface WorkflowStep {
  step: number
  action: string
  role: string
  system: string
}

// Enums for fixed sets of values
export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}
```

### Error Handling

```typescript
// Server functions - throw errors, log details
if (error) {
  console.error('Failed to send email:', error)
  throw new Error('Failed to send confirmation email')
}

// Return success objects
return { success: true }
```

### Styling with Tailwind

- Use the `cn()` utility from `@/lib/utils` for conditional classes
- Prefer Tailwind classes over custom CSS
- Use CSS variables for theming (defined in `src/styles.css`)

```typescript
import { cn } from '@/lib/utils'

<div className={cn(
  'p-6 rounded-2xl bg-white border',
  isActive && 'border-brand-500',
  className
)} />
```

---

## Project Structure

```
src/
  components/
    landing/          # Landing page components
      ui/             # Landing-specific UI (Icons, etc.)
    ui/               # shadcn/ui components
  lib/
    utils.ts          # Utility functions (cn, etc.)
  routes/             # TanStack Router file-based routes
    __root.tsx        # Root layout
    index.tsx         # Home page
  server/             # Server functions (TanStack Start)
  services/           # External service integrations
  types.ts            # Shared type definitions
  styles.css          # Global styles + Tailwind
```

---

## shadcn/ui Configuration

- **Style**: radix-vega
- **Icons**: lucide-react
- **CSS Variables**: Enabled
- **Base Color**: neutral

Add components via:

```bash
bunx shadcn@latest add <component>
```

---

## Environment Variables

| Variable         | Purpose                  |
| ---------------- | ------------------------ |
| `RESEND_API_KEY` | Email sending via Resend |
| `API_KEY`        | Gemini AI service        |

Copy `.env.example` to `.env` and fill in values.

---

## ESLint

Uses `@tanstack/eslint-config` - extends TanStack's recommended rules.

---

## Do NOT

- Use `as any` or `@ts-ignore` - fix the types properly
- Skip error handling in server functions
- Use inline styles when Tailwind classes exist
- Create new utility functions without checking `@/lib/utils` first
- Import from `react` when a hook/type exists in the project
