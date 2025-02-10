# What is Monorepos?

Monorepos (short for monolithic repositories) are a software development strategy where multiple projects or codebases are stored within a single version-controlled repository. Unlike multiple repositories where each project or microservice lives in its own repository, a monorepo centralizes all the code in one place. This approach is commonly used in large-scale development environments to promote better code sharing, consistency, and collaboration.

## Benefits of Monorepos
- **Code Reuse and Collaboration**: Developers can easily share and reuse code between different projects.
- **Atomic Changes**: One commit can update multiple projects or services simultaneously, ensuring compatibility.
- **Unified CI/CD Pipelines**: Build and deployment configurations can be centralized, making automation and integration simpler.
- **Consistency**: Easier to enforce coding standards and best practices across all projects.

### Popular Tools for Monorepos
- **Nx**: A popular toolset for managing monorepos, particularly in TypeScript and JavaScript projects.
- **Bazel**: Originally developed by Google, it’s a powerful build tool designed to handle large-scale monorepos.
- **Lerna**: A tool for managing JavaScript projects with multiple packages.
- **Turborepo**: Designed for high-speed builds and managing multiple packages.

## Why Monorepos?

### 1. Code Sharing and Reuse
- **Shared Libraries**: Common code can be centralized and reused across different projects, avoiding duplication. This is especially useful for utility functions, components, or shared configurations.
- **Easy Updates**: Updating a shared library or dependency in one place can automatically apply it across all related projects.

### 2. Simplified Dependency Management
- **Consistent Dependency Versions**: Monorepos help maintain a single version of dependencies for multiple projects, reducing versioning conflicts that can occur in polyrepos (separate repos for each project).

### 3. Easier Refactoring
- **Cross-Project Changes**: Refactoring code across multiple projects is more manageable because everything is in the same repository. This reduces the need for complicated dependency tracking or separate versioning.

### 4. Improved Collaboration
- **Unified Codebase**: Developers can see and understand how different parts of a system interact by having all related projects in one place, improving cross-team collaboration.
- **Single Build and CI/CD Pipeline**: One build system and deployment process for the entire repository streamlines development and deployment.

### 5. Atomic Changes and End-to-End Testing
- **Atomic Commits**: Monorepos allow atomic changes across multiple projects, meaning a single commit can span multiple libraries and applications without breaking consistency.
- **Unified Testing**: It is easier to run tests for interconnected projects in a single step rather than setting up complex inter-repository test dependencies.

### 6. Simplified Tooling and Automation
- Tools like Turborepo, Nx, Bazel, and Lerna optimize the build and development process, handling caching, dependency graphs, and parallelization effectively in a monorepo.

## What is Build System vs Build System Orchestrator vs Monorepo Framework?

### 1. Build System
A build system automates tasks related to compiling code, running tests, bundling, and creating deployable artifacts. It typically focuses on managing dependencies and executing commands for a specific project.

#### Examples
- **Webpack**: A module bundler primarily for JavaScript.
- **Rollup**, **Parcel**: Other JavaScript build systems.
- **Babel**: A JavaScript transpiler.
- **Make**, **CMake**, **Gradle**: Build systems used for C++ and Java projects.

#### Key Features
- **Dependency Resolution**: Ensures the right dependencies are used for building.
- **Compilation**: Transforms source code into executable code or bundled assets.
- **Task Execution**: Automates repetitive tasks (e.g., transpiling, testing).

#### In Monorepos
Each project within a monorepo may have its own build system (e.g., Webpack for one project and Rollup for another). Managing builds across many projects becomes challenging without orchestration.

### 2. Build System Orchestrator
A build system orchestrator manages and coordinates multiple build systems across different projects, optimizing the process. It tracks dependency graphs and caches outputs to avoid redundant work.

#### Examples
- **Bazel**: Developed by Google, supports large-scale, multi-language builds.
- **Pants**: A build orchestrator similar to Bazel, used for Python, Java, and other languages.
- **Buck**: Facebook’s build system for Android and Java.

#### Key Features
- **Dependency Graphs**: Tracks relationships between modules or libraries to rebuild only affected parts.
- **Caching**: Stores results of build steps to skip unchanged parts.
- **Parallel Builds**: Runs builds in parallel for faster execution.

#### In Monorepos
Orchestrators ensure dependencies between projects are handled efficiently, building only what’s necessary. For example, Bazel can build a backend service and its dependent libraries without recompiling unchanged dependencies.

### 3. Monorepo Framework
A monorepo framework provides a structure and tooling specifically designed to manage monorepos. It integrates with build systems and orchestrators to streamline development, builds, and deployments across multiple projects in one repository.

#### Examples
- **Nx**: A monorepo framework for managing JavaScript/TypeScript projects with a focus on modern tooling.
- **Turborepo**: Optimized for caching and incremental builds in monorepos.
- **Lerna**: (Deprecated in standalone use but still relevant with Nx) used for managing JavaScript monorepos.

#### Key Features
- **Project Scaffolding**: Tools for generating new projects or libraries.
- **Task Runners**: Runs commands on multiple projects (e.g., testing, linting).
- **Dependency Graphs**: Visualizes relationships between apps and libraries.
- **Custom Plugins**: Offers extensions for various languages or frameworks.

#### In Monorepos
A monorepo framework provides tools and conventions for managing multiple packages or applications within a single repository. This includes dependency management, workspace configuration, and efficient tooling.

## Turborepo as a Build System Orchestrator
Turborepo is a powerful build system orchestrator designed to optimize the execution of tasks across large and complex monorepos. It enhances efficiency by leveraging advanced techniques to streamline builds, tests, and other project operations.

### Key Features of Turborepo

#### Caching
- Implements a robust caching mechanism that stores the outputs of tasks.
- Skips re-execution and retrieves the result from the cache if a task is rerun with no changes to its inputs (source files, dependencies, or configuration).
- Improves build speeds significantly, especially in CI/CD environments.

#### Parallelization
- Optimizes resource usage by running independent tasks in parallel, utilizing all available CPU cores.
- Reduces total build time through parallel task execution.

#### Dependency Graph Awareness
- Tracks the dependency graph between projects and libraries.
- Executes tasks in the correct order, respecting dependency relationships.
- Rebuilds only the affected packages or libraries when changes are made.

### Benefits of Turborepo
- **Faster Builds**: Caching and parallelization minimize redundant work.
- **Scalable CI/CD Pipelines**: Caching and task scheduling enhance CI/CD performance.
- **Improved Developer Productivity**: Faster feedback loops enable quicker iteration and testing.

### Typical Use Cases
- Managing large monorepos with multiple projects and shared libraries.
- Front-end frameworks and full-stack applications with frequent dependency updates.
- Projects requiring cross-package builds or incremental compilation.

## Monorepo File Structure
A typical monorepo structure accommodates multiple projects and shared resources within a single repository:

### 1. Root Directory
Contains global configuration files and folders for managing the monorepo.

```
/monorepo-root
├── /apps
├── /packages
├── /tools
├── /configs
├── package.json
├── turbo.json (for Turborepo users)
├── tsconfig.base.json
├── yarn.lock (or package-lock.json)
├── README.md
```

### 2. Key Components

#### 1. `/apps`
Contains multiple application-level projects (frontend, backend, admin panel, etc.). Each project typically has its own `package.json` and configuration.

Example:
```
/apps
├── frontend
│   ├── package.json
│   ├── src
│   └── tsconfig.json
└── backend
    ├── package.json
    ├── src
    └── tsconfig.json
```

#### 2. `/packages`
Contains shared libraries or services that can be reused across applications. Each package usually has its own `package.json`.

Example:
```
/packages
├── ui-library
│   ├── package.json
│   ├── src
│   └── tsconfig.json
└── auth-module
    ├── package.json
    ├── src
    └── tsconfig.json
```

#### 3. `/tools`
Contains custom build scripts, CLI tools, or automation utilities.

#### 4. `/configs`
Stores shared configuration files for ESLint, Prettier, or TypeScript.

Example:
```
/configs
├── eslint-config.js
├── prettier-config.js
└── tsconfig.base.json
```

#### 5. Global Files
- `package.json`: Defines dependencies and scripts for the entire monorepo.
- `turbo.json`: Configuration file for Turborepo.
- `tsconfig.base.json`: Shared TypeScript configuration.
- `yarn.lock` / `package-lock.json`: Dependency lock files.

### Initialize a Monorepo
To initialize a monorepo:

```sh
npx create-turbo@latest