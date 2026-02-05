# GEMINI Project Analysis

## Project Overview

This is a modern web application built with [Vite](https://vitejs.dev/), [React](https://react.dev/), and [TypeScript](https://www.typescriptlang.org/). The project is a single-page application (SPA) that uses [React Router](https://reactrouter.com/) for client-side navigation.

The user interface is built using [shadcn-ui](https://ui.shadcn.com/), a collection of re-usable components, and styled with [Tailwind CSS](https://tailwindcss.com/). The application also utilizes [TanStack Query](https://tanstack.com/query/latest) for managing server state.

The project structure is organized with source code in the `src` directory, which contains `components`, `pages`, `hooks`, and other application-specific code. The main entry point is `src/main.tsx`, which renders the `App` component. The `App` component sets up the application's routing and global providers.

## Building and Running

The following scripts are available in `package.json` to build, run, and test the application:

* **`npm run build`**: Builds the application for production. The output is placed in the `dist` directory.
*   **`npm run lint`**: Lints the codebase using ESLint to enforce code quality.
*   **`npm run test`**: Runs the test suite using Vitest.



### Production Build

To create a production-ready build, run:

```sh
npm run build
```

## Development Conventions

*   **Code Style**: The project uses ESLint to enforce a consistent code style. The configuration can be found in `eslint.config.js`.
*   **Path Aliases**: The project is configured with a path alias `@` that points to the `src` directory. This should be used for importing modules from within the application (e.g., `import MyComponent from '@/components/MyComponent'`).
*   **Styling**: Styling is done using Tailwind CSS. Utility classes should be used whenever possible.
*   **Components**: Reusable UI components are built using `shadcn-ui` and are located in the `src/components/ui` directory. Application-specific components are located in `src/components`.
*   **Pages**: Each route in the application corresponds to a component in the `src/pages` directory.
