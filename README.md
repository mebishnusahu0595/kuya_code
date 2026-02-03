# KuyaCode

<div align="center">

**An open-source AI-powered coding agent that helps you write, understand, and modify code using large language models.**

[Website](https://kuyacode.ai) • [Documentation](https://docs.kuyacode.ai) • [VS Code Extension](https://marketplace.visualstudio.com/items?itemName=kuyacode.kuyacode)

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

</div>

---

## Overview

KuyaCode is a terminal-based AI agent that can build anything. Available as a CLI tool, desktop application, and IDE extension, KuyaCode integrates seamlessly into your development workflow to accelerate coding with AI assistance.

### Key Features

- 🤖 **Multi-Model Support**: Works with any AI model via 20+ provider integrations (OpenAI, Anthropic, Google, AWS Bedrock, Azure, and more)
- 💻 **Multiple Interfaces**: Available as a CLI, desktop app (Tauri-based), and VS Code extension
- 🔧 **Agent-Driven Development**: Autonomous coding agent that can plan, implement, and test features
- 🔌 **Model Context Protocol (MCP)**: Full support for extending capabilities with MCP servers
- 🎯 **Context-Aware**: Automatically understands your codebase and current selection
- 🚀 **Enterprise Ready**: Self-hosted options with security and compliance features
- 📱 **Platform Support**: Available on macOS, Linux, and Windows

## Quick Start

### Installation

The easiest way to install KuyaCode is through the install script:

```bash
curl -fsSL https://kuyacode.ai/install | sh
```

Or use your package manager:

```bash
# macOS (Homebrew)
brew install kuyacode

# Nix
nix profile install github:anomalyco/kuyacode
```

### Basic Usage

Start an interactive session:

```bash
kuyacode
```

Run with a specific AI model:

```bash
kuyacode --model claude-3-5-sonnet-20241022
```

Configure API keys:

```bash
kuyacode auth login
```

## Architecture

This is a monorepo containing the complete KuyaCode ecosystem:

```
├── packages/
│   ├── kuyacode/       # Core CLI application
│   ├── desktop/        # Tauri-based desktop app
│   ├── app/            # Web application
│   ├── console/        # Management console
│   ├── enterprise/     # Enterprise features
│   ├── sdk/            # Client SDKs
│   ├── plugin/         # Plugin system
│   ├── web/            # Marketing website
│   └── docs/           # Documentation
├── sdks/
│   └── vscode/         # VS Code extension
├── infra/              # Infrastructure as code (SST)
└── github/             # GitHub Actions integration
```

## Development

### Prerequisites

- **Bun** >= 1.3.5 (primary runtime)
- **Node.js** >= 22 (for certain tooling)
- **Rust** (for desktop app only)

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/anomalyco/kuyacode.git
   cd kuyacode
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Run the CLI in development mode:
   ```bash
   bun run dev
   ```

### Available Scripts

```bash
# Type checking across all packages
bun run typecheck

# Run the core kuyacode CLI
bun run --cwd packages/kuyacode dev

# Start the desktop app
bun run --cwd packages/desktop tauri dev

# Format code
bun run format

# Generate changelog
bun run script/changelog.ts
```

## Project Structure

### Core Packages

- **`packages/kuyacode`**: Main CLI application with agent capabilities, provider integrations, and MCP support
- **`packages/desktop`**: Native desktop application built with Tauri v2
- **`packages/app`**: Web-based UI for KuyaCode
- **`packages/sdk`**: JavaScript/TypeScript SDK for integrating with KuyaCode

### Infrastructure

- **`infra/`**: SST (Serverless Stack) configuration for deployment
  - Deployed to Cloudflare (primary)
  - Supports Stripe integration for billing
  - Multi-environment support (dev/staging/production)

### Extensions & Integrations

- **`sdks/vscode`**: VS Code extension for inline KuyaCode integration
- **`github/`**: GitHub Actions for CI/CD automation
- **`packages/plugin`**: Plugin system for extending KuyaCode functionality

## Technologies

- **Runtime**: Bun, Node.js
- **Languages**: TypeScript, Rust (Tauri)
- **Frontend**: SolidJS, TailwindCSS
- **Backend**: Hono, SST
- **AI SDKs**: Vercel AI SDK with 20+ provider integrations
- **Build Tools**: Turbo, Vite, Parcel
- **Package Manager**: Bun (monorepo via workspaces)

## Contributing

We welcome contributions! Please see our [contributing guidelines](CONTRIBUTING.md) for details.

### Development Workflow

1. Create a feature branch
2. Make your changes
3. Run `bun run typecheck` to ensure types are correct
4. Submit a pull request

## License

KuyaCode is open source software licensed under the [MIT License](LICENSE).

## Links

- [Official Website](https://kuyacode.ai)
- [Documentation](https://docs.kuyacode.ai)
- [GitHub Issues](https://github.com/anomalyco/kuyacode/issues)
- [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=kuyacode.kuyacode)

## Support

- **Community**: Join our discussions on GitHub
- **Enterprise**: Contact us for enterprise support and self-hosted options
- **Issues**: Report bugs or request features via GitHub Issues

---

<div align="center">

Built with ❤️ by the KuyaCode team

</div>
