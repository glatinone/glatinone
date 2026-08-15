<div align="center">

# Kiell Tampubolon

**AI Security & Agent Infrastructure Engineer** · Singapore

[Website](https://www.kielltampubolon.id/) · [LinkedIn](#)

</div>

---

## Focus

I work at the intersection of LLM reasoning, MCP tooling, and SOC automation — building the security layer agentic systems need before they're trusted with real infrastructure, and building agents that do SOC work directly.

---

## Core Systems

### 🛡️ [mcpscan](https://github.com/glatinone/mcpscan)
Supply-chain security scanner for MCP servers & Claude Code projects.
**Problem:** MCP servers ship with zero standard vetting — tool-poisoning, command injection, over-broad permissions, and leaked secrets go straight into `.claude/` directories.
**Stack:** Python, zero runtime deps, SARIF 2.1.0 output for GitHub code scanning, CI-ready.
**Status:** active, CI-ready

### 🔎 [vulnscan](https://github.com/glatinone/vulnscan)
AI-powered vulnerability intelligence scanner.
**Problem:** dependency vulnerability lists are noisy — a CVE hit doesn't tell you what's actually exploitable in your usage.
**Stack:** Python · OSV.dev lookups across 7 ecosystems (Python, Node, Go, Maven, Ruby, NuGet, Rust) · LLM-backed exploitability + remediation analysis.
**Status:** active

### 🌐 [BraveMCP](https://github.com/glatinone/BraveMCP)
Local-first browser memory, accessible by Claude.
**Problem:** Claude has no memory of what you've browsed — you re-explain context every session.
**Stack:** TypeScript · browser extension + MCP server · fully local, no cloud sync.
**Status:** shipped, v0.2.0

### 🔧 [secops-toolkit-mcp](https://github.com/glatinone/secops-toolkit-mcp)
MCP server exposing defensive SecOps helpers: IOC extraction, defang/refang, hashing, password entropy, CIDR math, repo command-shadowing checks.
**Status:** active

### 🤖 [soc-copilotstudio](https://github.com/glatinone/soc-copilotstudio)
AI-powered SOC built entirely on Microsoft infrastructure — no Sentinel, no third-party SIEM.
**Problem:** most SOC automation assumes a SIEM budget teams don't have.
**Stack:** Copilot Studio · Power Automate · Microsoft Graph API · 5 coordinating agents (identity threat, phishing investigation, compliance/audit, SOC summary, orchestrator).
**Status:** active

### 🧠 [agent-memory-protocol](https://github.com/glatinone/agent-memory-protocol) (AMP)
Open protocol for AI agent memory interoperability — like MCP, but for memory.
**Problem:** every agent framework reinvents memory storage; nothing shares across vendors or sessions.
**Stack:** HTTP-native spec · Memory Cell schema · access control · decay-ranked semantic search · active→stale→archived lifecycle.
**Status:** spec stage, pre-PyPI

---

## Ecosystem Contributions

Merged upstream:

| PR | Project | Change |
|---|---|---|
| [#4125](https://github.com/zalando/skipper/pull/4125) | zalando/skipper | Isolated + applied 30s timeout to upgrade proxy dialer |
| [#5817](https://github.com/gpustack/gpustack/pull/5817) | gpustack/gpustack | Propagated asyncio cancellation, removed mutable default args |
| [#2725](https://github.com/teamhanko/hanko/pull/2725) | teamhanko/hanko | Refactored OAuth providers to propagate context, fixed duplicate defer |
| [#40](https://github.com/kerlenton/mcpsnoop/pull/40) | kerlenton/mcpsnoop | Added stdin-piped session support |

Also tracking the MCP ecosystem via [awesome-mcp-servers](https://github.com/glatinone/awesome-mcp-servers).

---

## Labs

| Repo | What it does |
|---|---|
| [sentinelscout](https://github.com/glatinone/sentinelscout) | Multi-source OSINT aggregator — VirusTotal, AlienVault OTX, Shodan, NVD, GitHub — with AI correlation |
| [autoreview](https://github.com/glatinone/autoreview) | AI-powered PR code review CLI, multi-LLM (OpenAI, DeepSeek, Claude, Ollama) |
| [streamblind-poc](https://github.com/glatinone/streamblind-poc) | PoC + fix for asynchronous telemetry blindness & state desync in AI streaming clients |
| [claude-token-monitor-usage](https://github.com/glatinone/claude-token-monitor-usage) | Local-first desktop HUD for Claude.ai / Claude Code quota and token-cost tracking |
| [dev-to-mcp](https://github.com/glatinone/dev-to-mcp) | MCP server for the dev.to API — browsing, challenge tracking, authenticated publishing |
| [devto-challenge-agent](https://github.com/glatinone/devto-challenge-agent) | Multi-agent system for dev.to challenge research, writing, and performance tracking |
| [nexora-second-brain](https://github.com/glatinone/nexora-second-brain) | AI-powered second brain on Notion, Claude as the intelligence layer |

---

## Engineering Evolution

| Period | Repository | Context & Footprint | Stack |
|---|---|---|---|
| 2022 | [BARELANG-MRT](https://github.com/glatinone/BARELANG-MRT) / [B-MRT.github.io](https://github.com/glatinone/B-MRT.github.io) | Team site for a robotics competition entry (archived) | HTML |
| 2023 | [Keamanan-Basis-Data](https://github.com/glatinone/Keamanan-Basis-Data) | Database security coursework, published (archived) | — |
| 2024 | [e_logbook](https://github.com/glatinone/e_logbook) | Logbook web app (archived) | PHP |
| 2025 | [security-automation-notes](https://github.com/glatinone/security-automation-notes) | Scripts for repetitive security tasks — email analysis, log review, system checks | Shell |
| 2025 | [cybersecurity-communication-guide](https://github.com/glatinone/cybersecurity-communication-guide) | Interactive guide for explaining security concepts to non-technical audiences | TypeScript, React |
| 2025 | [phising101-kiel](https://github.com/glatinone/phising101-kiel) | Phishing awareness reference material | JavaScript |
| 2025–26 | Freelance client builds — [deddy-tour-travel-premier](https://github.com/glatinone/deddy-tour-travel-premier), [malay-rental-batam](https://github.com/glatinone/malay-rental-batam), [4care_medicalcentre](https://github.com/glatinone/4care_medicalcentre), [magal-restaurant](https://github.com/glatinone/magal-restaurant), [stefan-music-learn](https://github.com/glatinone/stefan-music-learn) | Client-commissioned sites (private) | Next.js / TypeScript |
| 2026 | [ai-webinar-itdel](https://github.com/glatinone/ai-webinar-itdel) | Presentation materials for an AI-in-industry webinar at Institut Teknologi Del | TypeScript |
| 2026 | [personal-portfolio](https://github.com/glatinone/personal-portfolio) | Earlier Next.js personal site — superseded by the live Astro build at kielltampubolon.id (archived) | TypeScript |
| 2026 | [devto-autopublish](https://github.com/glatinone/devto-autopublish) | Automated publishing pipeline for dev.to | JavaScript |
| 2026 | [nebula-drift](https://github.com/glatinone/nebula-drift) / [solstice-game](https://github.com/glatinone/solstice-game) | Browser games, zero dependencies | JavaScript / HTML |
| 2026 | [gmaps-extractor](https://github.com/glatinone/gmaps-extractor) | Chrome extension for B2B lead extraction from Google Maps (private) | JavaScript |
| 2026 | [automation-logan](https://github.com/glatinone/automation-logan) | HR clock-in/out automation bot, VPS + Cloudflare Workers deploy targets (private) | Python / JavaScript |

*(Earlier school/web projects and one-off client sites not listed here remain visible in the full repository list.)*
