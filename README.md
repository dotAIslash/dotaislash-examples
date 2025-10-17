<div align="center">

<img src="logo.png" alt="dotAIslash Logo" width="120" />

# 📚 VERSA Examples

### Real-World `.ai/` Folder Configurations

**v1.0.0 Released - October 17, 2025**

**✅ 10/10 Examples Validated**

[![License](https://img.shields.io/badge/License-MIT-violet?style=for-the-badge)](LICENSE)
[![Examples](https://img.shields.io/badge/Examples-10-cyan?style=for-the-badge)](.)
[![Validated](https://img.shields.io/badge/Validated-✅_10/10-green?style=for-the-badge)](.)
[![Website](https://img.shields.io/badge/Website-dotaislash.github.io-lime?style=for-the-badge)](https://dotaislash.github.io)

[**Browse Examples**](#-examples) · [**VERSA Spec**](https://github.com/dotAIslash/dotaislash-spec) · [**Get Started**](#-quick-start)

</div>

---

## 🎯 What is this?

**Production-ready examples** of `.ai/` folder configurations for various project types. Clone, adapt, and use in your own repositories.

Every example is:
- ✅ **Validated** against VERSA schemas
- 📝 **Documented** with inline comments
- 🧪 **Tested** with real AI tools
- 🎨 **Practical** based on real-world projects

---

## 🚀 Quick Start

```bash
# Clone the examples
git clone https://github.com/dotAIslash/dotaislash-examples.git

# Copy an example to your project
cp -r dotaislash-examples/typescript-project/.ai your-project/

# Or use the CLI
versa init
```

---

## 📚 Examples

### 🟢 Beginner-Friendly

#### [**minimal**](./minimal)
The absolute basics. Perfect for learning VERSA.

```
.ai/
├── context.json        # Just the essentials
└── rules/
    └── style.md        # One simple rule
```

<details>
<summary><b>View context.json</b></summary>

```json
{
  "version": "1.0",
  "rules": ["rules/style.md"],
  "settings": {
    "model": "claude-sonnet-4"
  }
}
```

</details>

---

#### [**quick-start**](./quick-start)
A good starting point for most projects.

```
.ai/
├── context.json
├── profiles/
│   └── cursor.json
├── rules/
│   ├── style.md
│   └── security.md
└── agents/
    └── code-reviewer.json
```

---

### 🟡 Intermediate

#### [**typescript-project**](./typescript-project)
Full-featured TypeScript setup with linting, testing, and documentation agents.

**Highlights:**
- TypeScript-specific rules
- ESLint + Prettier integration
- Multiple agents (reviewer, documenter, tester)
- Cursor + Windsurf profiles

---

#### [**python-project**](./python-project)
Python project with pytest, black, and mypy configuration.

**Highlights:**
- Python style guidelines (PEP 8)
- Type checking rules
- Testing best practices
- Virtual environment awareness

---

#### [**nextjs-app**](./nextjs-app)
Next.js 15 application with React best practices.

**Highlights:**
- Server/client component rules
- Tailwind CSS guidelines
- API route conventions
- Performance optimization tips

---

### 🔴 Advanced

#### [**monorepo**](./monorepo)
Multi-package repository with shared and package-specific configs.

```
.ai/
├── context.json              # Global config
├── packages/
│   ├── frontend/
│   │   └── .ai/              # Package-specific
│   │       └── context.json
│   └── backend/
│       └── .ai/
│           └── context.json
└── tools/
    └── shared-mcp.json
```

**Highlights:**
- Configuration inheritance
- Workspace-level rules
- Package-specific overrides
- Shared tooling

---

#### [**microservices**](./microservices)
Distributed system with service-specific configurations.

**Highlights:**
- Service boundaries
- API contract enforcement
- Shared standards
- Service-specific agents

---

#### [**open-source**](./open-source)
OSS project with contributor guidelines and issue templates.

**Highlights:**
- Contributing rules
- Code of conduct enforcement
- Issue/PR templates
- Documentation requirements

---

### 🎯 Use Case Specific

#### [**data-science**](./data-science)
Data science project with Jupyter, pandas, and ML best practices.

**Highlights:**
- Notebook guidelines
- Data validation rules
- Model documentation
- Reproducibility checks

---

#### [**api-server**](./api-server)
REST API with OpenAPI spec and security guidelines.

**Highlights:**
- API design patterns
- Security checklists
- Error handling standards
- Documentation requirements

---

#### [**mobile-app**](./mobile-app)
React Native application with platform-specific rules.

**Highlights:**
- iOS/Android conventions
- Performance guidelines
- Accessibility rules
- Native module patterns

---

#### [**enterprise**](./enterprise)
Enterprise-grade setup with compliance and security.

**Highlights:**
- SOC 2 compliance rules
- Security scanning
- Audit logging
- Access control policies

---

## 📖 Example Structure

Each example includes:

```
example-name/
├── README.md                 # Example overview
├── .ai/
│   ├── context.json          # Base configuration
│   ├── profiles/             # Tool-specific configs
│   │   ├── cursor.json
│   │   ├── windsurf.json
│   │   └── claude.json
│   ├── rules/                # Guidelines
│   │   ├── style.md
│   │   ├── security.md
│   │   └── architecture.md
│   ├── agents/               # Agent definitions
│   │   ├── code-reviewer.json
│   │   ├── documenter.json
│   │   └── tester.json
│   └── tools/                # MCP servers
│       └── project-tools.json
└── sample-project/           # Example project files
    └── (actual code)
```

---

## 🎨 Customization Guide

### 1. Choose a Base Example

Pick the example closest to your project type.

### 2. Copy to Your Project

```bash
cp -r dotaislash-examples/typescript-project/.ai your-project/
```

### 3. Customize

Edit files to match your needs:

```json
// .ai/context.json
{
  "version": "1.0",
  "rules": [
    "rules/style.md",           // Keep
    "rules/security.md",        // Keep
    "rules/your-custom.md"      // Add your own
  ]
}
```

### 4. Validate

```bash
cd your-project
versa lint
```

---

## 🧪 Testing Examples

All examples are automatically tested:

```bash
# Run validation tests
pnpm test

# Test specific example
pnpm test typescript-project

# Generate test report
pnpm test:report
```

---

## 📊 Example Matrix

| Example | Language | Framework | Complexity | Best For |
|---------|----------|-----------|------------|----------|
| minimal | Any | None | 🟢 Simple | Learning |
| quick-start | Any | None | 🟢 Simple | Most projects |
| typescript-project | TypeScript | Any | 🟡 Medium | TS apps |
| python-project | Python | Any | 🟡 Medium | Python apps |
| nextjs-app | TypeScript | Next.js | 🟡 Medium | Web apps |
| monorepo | Multi | Multi | 🔴 Complex | Large projects |
| microservices | Multi | Multi | 🔴 Complex | Distributed |
| enterprise | Any | Any | 🔴 Complex | Compliance |

---

## 🎓 Learning Path

### Beginner
1. Start with [minimal](./minimal)
2. Explore [quick-start](./quick-start)
3. Try [typescript-project](./typescript-project) or [python-project](./python-project)

### Intermediate
4. Study [nextjs-app](./nextjs-app) for framework integration
5. Learn [open-source](./open-source) best practices
6. Explore [api-server](./api-server) patterns

### Advanced
7. Master [monorepo](./monorepo) configuration
8. Understand [microservices](./microservices) architecture
9. Implement [enterprise](./enterprise) compliance

---

## 🤝 Contributing

Help expand our examples!

### Ways to Contribute

- 📝 **Add Examples** - Share your `.ai/` configs
- 🐛 **Report Issues** - Found a problem? Let us know
- 💡 **Suggest Use Cases** - What examples are missing?
- 🧪 **Improve Tests** - Better validation
- 📚 **Write Guides** - Help others learn

### Adding an Example

```bash
# 1. Fork the repository
git clone https://github.com/your-username/dotaislash-examples.git

# 2. Create new example
mkdir my-example
cd my-example

# 3. Add .ai/ folder and README
# 4. Test it
versa lint

# 5. Submit PR
git add .
git commit -m "feat: add my-example configuration"
git push origin main
```

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## 📄 License

MIT © [dotAIslash](https://github.com/dotAIslash)

All examples are free to use and modify.

---

## 🔗 Resources

- 📖 **[VERSA Spec](https://github.com/dotAIslash/dotaislash-spec)** - Read the specification
- 🔧 **[CLI Tool](https://github.com/dotAIslash/dotaislash-cli)** - Command-line interface
- 📐 **[Schemas](https://github.com/dotAIslash/dotaislash-schemas)** - JSON Schema definitions
- 🔌 **[Adapters](https://github.com/dotAIslash/dotaislash-adapters)** - Tool integrations

---

<div align="center">

**Real examples from real projects**

[⭐ Star us on GitHub](https://github.com/dotAIslash/dotaislash-examples) · [💬 Discussions](https://github.com/dotAIslash/dotaislash-examples/discussions) · [🐛 Issues](https://github.com/dotAIslash/dotaislash-examples/issues)

</div>
