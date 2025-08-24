# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Development
- `pnpm dev` - Start the Stage Web (browser version) development server at https://airi.moeru.ai
- `pnpm dev:tamagotchi` - Start the desktop Tauri application development server
- `pnpm dev:docs` - Start the documentation site development server
- `pnpm dev:apps` - Start all applications in parallel development mode
- `pnpm dev:packages` - Start all packages in parallel development mode

### Building & Testing
- `pnpm build` - Build all packages and apps using Turbo
- `pnpm build:web` - Build only the Stage Web application
- `pnpm build:tamagotchi` - Build only the Tauri desktop application
- `pnpm build:crates` - Build all Rust crates with `cargo build --workspace`
- `pnpm test` - Run tests with coverage using Vitest
- `pnpm test:run` - Run tests once without watch mode

### Code Quality
- `pnpm lint` - Run ESLint with caching across the entire codebase
- `pnpm lint:fix` - Fix lintable issues automatically
- `pnpm lint:rust` - Run Rust formatting and Clippy checks with `cargo fmt --check && cargo clippy --workspace`
- `pnpm typecheck` - Run TypeScript type checking across all workspaces in parallel

### Korean Translation (TDD Workflow)
- `pnpm test:korean` - Run comprehensive TDD test for Korean translation
- `pnpm test:korean:keys` - Check Korean translation completeness and progress
- `node --import tsx scripts/check-i18n-keys.ts` - Direct Korean translation analysis

### Package Management
- `pnpm up` - Update dependencies using taze with write, recursive, install, and force flags
- `pnpm nolyfill` - Run nolyfill to optimize dependencies

## Project Architecture

### Monorepo Structure
This is a **pnpm workspace monorepo** with the following main directories:
- `apps/` - Main applications (Stage Web, Stage Tamagotchi, examples)
- `packages/` - Shared packages and libraries
- `services/` - Backend services (Discord bot, Telegram bot, Minecraft agent)
- `crates/` - Rust crates for native functionality
- `docs/` - Documentation site
- `plugins/` - Browser extensions and plugins

### Core Applications

**Stage Web (`apps/stage-web/`)**
- Browser-based VTuber application running on Vue 3 + Vite
- Powers the main https://airi.moeru.ai website
- Uses WebGPU, WebAudio, Web Workers, and WebAssembly for performance
- Supports VRM and Live2D models with real-time animation
- PWA-enabled for mobile device support

**Stage Tamagotchi (`apps/stage-tamagotchi/`)**
- Desktop application built with Tauri (Rust backend + Vue frontend)
- Native performance with CUDA/Metal acceleration support via Rust/candle
- Same frontend as Stage Web but with native system integration

### Technology Stack

**Frontend:**
- **Vue 3** with Composition API and `<script setup>` syntax
- **TypeScript** for type safety
- **Vite** as the build tool with Rolldown for performance
- **UnoCSS** for atomic CSS with custom presets
- **Pinia** for state management
- **Vue Router** for routing
- **Reka UI** for headless UI components
- **TresJS** for 3D graphics (Three.js wrapper for Vue)

**Backend/Services:**
- **Node.js** with TypeScript
- **Drizzle ORM** with DuckDB WASM for in-browser database
- **xsAI** - custom LLM integration library (like Vercel AI SDK but smaller)
- **Various service integrations** (Discord, Telegram, Minecraft via Mineflayer)

**Native/Performance:**
- **Rust** for performance-critical operations and Tauri desktop app
- **ONNX Runtime** for ML model inference
- **WebGPU** for browser-based GPU acceleration
- **Custom Tauri plugins** for native system integration

**Audio/AI:**
- **VAD (Voice Activity Detection)** with WebAudio worklets
- **Speech recognition and synthesis** with multiple provider support
- **VRM and Live2D model support** with real-time lip-sync and animations
- **Multiple LLM provider support** via xsAI (OpenAI, Anthropic, Ollama, etc.)

### Key Shared Packages

**Core Packages:**
- `@proj-airi/stage-ui` - Main UI component library with Stories
- `@proj-airi/ui` - Base UI components
- `@proj-airi/ui-transitions` - Custom page/component transitions
- `@proj-airi/audio` - Audio processing utilities
- `@proj-airi/i18n` - Internationalization with Vue i18n (Korean support completed 52%)
- `@proj-airi/ccc` - Character Card Converter utilities

**Database & Memory:**
- `@proj-airi/drizzle-duckdb-wasm` - DuckDB WASM driver for Drizzle ORM
- `@proj-airi/duckdb-wasm` - Easy wrapper for DuckDB WASM
- `@proj-airi/memory-pgvector` - PostgreSQL vector memory implementation

**Tauri Integration:**
- `@proj-airi/tauri-plugin-mcp` - MCP (Model Context Protocol) server integration
- Multiple custom Tauri plugins in `crates/` for native functionality

### Service Architecture

**Minecraft Integration (`services/minecraft/`)**
- Uses **Mineflayer** to control Minecraft bot
- AI agent can play Minecraft, gather resources, build structures
- LLM-powered decision making with memory and planning systems

**Discord/Telegram Bots (`services/discord-bot/`, `services/telegram-bot/`)**
- Real-time chat integration with voice capabilities
- Memory systems using PostgreSQL with vector embeddings
- Velin prompt templating system (Vue SFC + Markdown for prompts)

### Development Guidelines

**Code Style:**
- Uses **@antfu/eslint-config** with Vue and UnoCSS support
- Perfectionist import sorting with specific group ordering
- **No comments** should be added unless explicitly requested
- Follow existing code patterns and conventions in each package

**Testing:**
- **Vitest** for unit testing with coverage reports
- Test files should be co-located with source files using `.test.ts` suffix

**Rust Development:**
- Workspace setup in root `Cargo.toml`
- Custom Tauri plugins for cross-platform native functionality
- Use `cargo fmt --check && cargo clippy --workspace` for code quality

**Branch Workflow:**
- Main development branch: `main`
- Follow conventional commits for PR titles
- Run `pnpm lint && pnpm typecheck` before committing
- Use AVIF format for images when possible

### Performance Considerations

**Web Performance:**
- Lazy loading and code splitting implemented
- WebWorkers for CPU-intensive tasks (audio processing, ML inference)
- WebGPU acceleration where available
- Service worker and PWA caching strategies

**Memory Management:**
- In-browser DuckDB for efficient data storage
- Vector embeddings for semantic memory search
- Streaming responses from LLM providers to reduce latency

### LLM Provider Integration

The project supports **20+ LLM providers** through the xsAI library:
- OpenAI, Anthropic Claude, Google Gemini
- Local inference: Ollama, vLLM, SGLang
- Cloud providers: OpenRouter, DeepSeek, xAI, Groq, etc.
- Audio services: ElevenLabs TTS, OpenAI Whisper STT

### Model Support

**3D Avatar Models:**
- **VRM models** with automatic blinking, look-at, and idle animations
- **Live2D models** with parameter-based animation control
- Real-time lip-sync synchronization with TTS output
- Facial expression and gesture control via LLM responses

## Common Development Tasks

### Adding Korean Translation Support
**Current Status: 52% complete (207/398 keys)**
- ✅ Core UI elements: 100% complete (base.yaml, stage.yaml)
- ✅ Tamagotchi app: 100% complete
- ✅ Documentation theme: 100% complete
- 🚧 Settings panel: 46% complete (162/353 keys)

**TDD Workflow:**
1. Run `pnpm test:korean:keys` to check current progress
2. Add translations to appropriate YAML files in `packages/i18n/src/locales/ko/`
3. Verify with `pnpm typecheck` and `pnpm build:packages`
4. Test functionality with `pnpm dev` and select Korean language

### Adding a new LLM provider
1. Add provider configuration to `packages/stage-ui/src/stores/providers.ts`
2. Create provider settings component in `src/components/Scenarios/Providers/`
3. Update xsAI integration in the relevant app's dependencies

### Adding new UI components
1. Create component in `packages/stage-ui/src/components/`
2. Add corresponding `.story.vue` file for documentation
3. Export from `packages/stage-ui/src/components/index.ts`
4. Follow existing component patterns using Reka UI headless components

### Working with Tauri plugins
1. Rust plugin code in `crates/tauri-plugin-*/`
2. TypeScript bindings in `packages/tauri-plugin-*/src/index.ts`
3. Register plugin in `apps/stage-tamagotchi/src-tauri/tauri.conf.json`

### Adding new service integrations
1. Create service in `services/` directory
2. Follow existing patterns from Discord/Telegram bots
3. Use shared types from `packages/server-shared/`
4. Implement proper error handling and logging
