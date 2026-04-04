# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + TypeScript + Vite backend management template using Ant Design and Tailwind CSS. It's designed as a comprehensive admin system with user authentication, routing, and state management. The project has been migrated from Webpack to Vite for improved build performance and development experience.

## Common Development Commands

- **Start development server**: `npm run dev`
- **Start staging environment**: `npm run bate`
- **Build for production**: `npm run build:prod`
- **Build for development**: `npm run build:dev`
- **Build for staging**: `npm run build:bate`
- **Run tests**: `npm test`
- **Run tests with UI**: `npm run test:ui`
- **Run a single test file**: `npm test -- src/components/Component.test.tsx`

## Project Architecture

### Core Technologies
- **Framework**: React 18 with TypeScript
- **State Management**: Redux Toolkit
- **UI Library**: Ant Design (antd)
- **Styling**: Tailwind CSS with custom atomic classes
- **Routing**: React Router v6
- **HTTP Client**: Axios
- **Build Tool**: Vite 5
- **Testing Framework**: Vitest

### Directory Structure
```
src/
├── views/           # Page components
├── components/      # Reusable components
├── router/          # Routing configuration
├── store/           # Redux state management
├── api/             # API service layer
├── assets/          # Static assets and utilities
├── type/            # Global TypeScript types
└── hooks/           # Custom React hooks
```

### Key Features
- **User Authentication**: Role-based access control with mock data in `public/data/`
- **Dynamic Routing**: Routes generated from API responses
- **State Management**: Redux Toolkit with slice pattern
- **Custom Tailwind Classes**: Atomic CSS with naming convention (e.g., `text-color-3`, `bg-color-f`)
- **Type Safety**: Comprehensive TypeScript types throughout
- **Fast Development**: Vite with HMR and Fast Refresh
- **Modern Testing**: Vitest with coverage support

### Routing System
- Uses React Router v6 with dynamic route generation
- Route authentication via `RouteAuth` component
- Tag-based navigation system

### State Management
- Redux Toolkit with modular slices
- User authentication state
- Page tags/breadcrumb management
- Global application state

### API Layer
- Centralized Axios configuration
- Type-safe API services
- Mock data system for development
- Environment variable support via `import.meta.env.VITE_API`

### Tailwind CSS Configuration
- Custom atomic classes with specific naming convention
- Color classes: `text-color-3`, `bg-color-f`, etc.
- Size classes: `text-12px`, `text-14px`, etc.
- Spacing classes: `mb-10px`, `mt-20px`, etc.

### Type System
- Comprehensive TypeScript types in `src/type/`
- Path aliases for cleaner imports (e.g., `@/views/Home`)
- Global type definitions for API responses, table data, etc.

## Vite Configuration

### Environment Variables
- Use `VITE_` prefix for environment variables (e.g., `VITE_API`)
- Environment files: `.env.development`, `.env.bate`, `.env.production`
- Environment variables accessible via `import.meta.env`

### Vite Configuration Files
- `vite.config.ts`: Main Vite configuration with plugins and settings
- `vitest.config.ts`: Testing configuration for Vitest

### Build Configuration
- Output directory: `build/`
- Asset directory: `static/`
- File hashing for production builds
- Source maps for debugging

## Development Guidelines

### Testing
- Vitest for unit testing with React Testing Library
- Tests located in `src/**/__tests__` or `*.test.*` files
- Coverage reports generated in HTML format
- Test UI available via `npm run test:ui`

### Code Structure
- Follow React functional component patterns
- Use TypeScript for type safety
- Implement custom hooks for reusable logic
- Use Redux Toolkit for state management
- Follow Ant Design component patterns

### Build Process
- Vite with optimized production builds
- Code splitting and lazy loading
- CSS extraction and minification
- Source map generation for debugging
- Asset optimization and compression

This template is designed for rapid development of admin systems with a focus on type safety, maintainability, and modern React practices using Vite's fast build system.