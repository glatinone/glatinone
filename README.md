<p align="center">
  <img src="assets/profile-animated.svg" width="100%" alt="Kiell Tampubolon. Applied AI and Cybersecurity. Animated agent request, policy check, and audit receipt." />
</p>

<p align="center">
  <a href="https://www.kielltampubolon.id">Portfolio</a> &nbsp;&nbsp;/&nbsp;&nbsp;
  <a href="https://www.kielltampubolon.id/writing/">Writing</a> &nbsp;&nbsp;/&nbsp;&nbsp;
  <a href="https://dev.to/kielltampubolon">DEV.to</a> &nbsp;&nbsp;/&nbsp;&nbsp;
  <a href="https://www.linkedin.com/in/kiel-tampubolon/">LinkedIn</a> &nbsp;&nbsp;/&nbsp;&nbsp;
  <a href="https://kielltampubolon.medium.com">Medium</a>
</p>

<p align="center"><b>Agents that remember. Actions with boundaries. Systems you can inspect.</b></p>

I work in cybersecurity and build developer tools for **applied AI**: scanners, test harnesses and policy boundaries for AI agents and MCP servers, plus the occasional systems tool in Rust. Every project ships with a runnable demo, adversarial cases and documented limits.

**Proof:** merged contributions in 9 upstream projects, including [headroom](https://github.com/headroomlabs-ai/headroom/pull/3100) (79k stars), [mcp-for-blender](https://github.com/ahujasid/mcp-for-blender/pull/324) (33k stars) and [NVIDIA SkillSpector](https://github.com/NVIDIA/SkillSpector/pull/381) (24k stars). Eleven more PRs in review at litellm, paperclip, rowboat, garak and others.

<!-- DEVTO-FOLLOWERS-COUNT:START -->
<a href="https://dev.to/kielltampubolon"><img src="https://img.shields.io/badge/DEV.to-1%2C052%20followers-0A0A0A?style=for-the-badge&logo=dev.to&logoColor=white&labelColor=0A0A0A&color=2F80ED" alt="1,052 DEV.to followers" /></a>
<!-- DEVTO-FOLLOWERS-COUNT:END -->

## Featured

### Agentic Security Lab

**What should an agent be allowed to do, and how do you prove it respected the boundary?**

[Agentic Security Lab](https://github.com/glatinone/agentic-security-lab) answers that with an executable deny-by-default policy boundary for tool calls, runtime enforcement, adversarial cases, and an audit receipt for every decision.

**[Explore the lab &rarr;](https://github.com/glatinone/agentic-security-lab)**

### jepret

A 300 KB screenshot and annotation tool for Windows, written in Rust against raw Win32 and GDI+ (declared by hand with `raw-dylib`, no crates, about 940 lines). It idles at 1.3 MB of RAM with zero timers, where Lightshot plus its guard process used 60 MB. PrtSc to overlay takes 32 to 61 ms instead of 115 to 306 ms. The repo includes the design spec and an end-to-end test that records the demo GIF.

<a href="https://github.com/glatinone/jepret"><img src="https://github.com/glatinone/jepret/raw/main/docs/demo.gif" width="560" alt="jepret demo: press PrtSc, select a region, annotate, copy" /></a>

**[See jepret &rarr;](https://github.com/glatinone/jepret)**

## Selected Work

**Agent security and MCP**

| Project | What it does |
| :--- | :--- |
| **[mcpscan](https://github.com/glatinone/mcpscan)** | Supply-chain scanner for MCP servers and agent projects: risky tools, permissions, commands and secrets, before install. |
| **[mcp-auth-harness](https://github.com/glatinone/mcp-auth-harness)** | Test harness for MCP 2026-07-28 server authorization: a naive and a hardened server, 10 checks. |
| **[mcp-security-preflight](https://github.com/glatinone/mcp-security-preflight)** | Local MCP preflight scanner for unsafe commands, broad permissions and secret-like values. |
| **[secops-toolkit-mcp](https://github.com/glatinone/secops-toolkit-mcp)** | Defensive utilities for IOC handling, hashing, CIDR checks, repository checks and command assessment. |
| **[ai-safety-compass](https://github.com/glatinone/ai-safety-compass)** | Local-first workspace that turns AI workflow facts into safeguards, hard stops and review records. |

**Agent infrastructure**

| Project | What it does |
| :--- | :--- |
| **[agent-memory-protocol](https://github.com/glatinone/agent-memory-protocol)** | Open protocol and reference server for shared, inspectable agent memory. |
| **[browser-os](https://github.com/glatinone/browser-os)** | AI-native browser execution runtime: compact semantic observations and cheapest-mechanism action routing. |
| **[BraveMCP](https://github.com/glatinone/BraveMCP)** | Local-first MCP server that gives Claude Desktop searchable memory of browsing history. |
| **[human-approval-gate](https://github.com/glatinone/human-approval-gate)** | Agent Zero plugin that pauses high-risk actions for human approval. Merged upstream into a0-plugins. |

**Systems and tools**

| Project | What it does |
| :--- | :--- |
| **[sketch2sim](https://github.com/glatinone/sketch2sim)** | Draw a circuit on a napkin, Gemma 4 reads it, a validator repairs it, and it runs in Wokwi. MLH Hacktoberfest hack. |
| **[autoreview](https://github.com/glatinone/autoreview)** | AI pull request review in the terminal, with multiple LLM providers. |
| **[carbonpilot](https://github.com/glatinone/carbonpilot)** | AI carbon decision engine: measure, find what moved, simulate interventions, rank actions. |
| **[streamblind-poc](https://github.com/glatinone/streamblind-poc)** | Proof of concept and fix for asynchronous telemetry blindness and state desync in AI streaming clients. |

<details>
<summary><b>More from the workbench</b></summary>

- **[vulnscan](https://github.com/glatinone/vulnscan)**: OSV.dev lookups across 7 ecosystems with LLM exploitability analysis.
- **[sentinelscout](https://github.com/glatinone/sentinelscout)**: Multi-source OSINT aggregator (VirusTotal, OTX, Shodan, NVD).
- **[dev-to-mcp](https://github.com/glatinone/dev-to-mcp)**: MCP server for the dev.to API.
- **[devto-autopublish](https://github.com/glatinone/devto-autopublish)**: Idea in Telegram to draft on dev.to, on GitHub Actions and Cloudflare Workers.
- **[chat-jumper](https://github.com/glatinone/chat-jumper)** and **[chat-status-lights](https://github.com/glatinone/chat-status-lights)**: Agent Zero plugins, both merged upstream into a0-plugins.
- **[payment-webhook-repair-lab](https://github.com/glatinone/payment-webhook-repair-lab)**: Local lab for retries, idempotency, state protection and webhook failure recovery.
- **[icann-explorer](https://github.com/glatinone/icann-explorer)**: Bilingual (ID/EN) interactive guide to the ICANN ecosystem.
- **[phising101-kiel](https://github.com/glatinone/phising101-kiel)**: Phishing awareness app in Bahasa Indonesia.

</details>

## Merged Upstream

Fixes I found while using these tools, reviewed and merged by their maintainers. Stars as of 2026-11-07.

| Project | Stars | Contribution |
| :--- | ---: | :--- |
| **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom/pull/3100)** | 79,041 | Add a `--no-ccr-response-handling` flag to bypass response buffering in the proxy. |
| **[ahujasid/mcp-for-blender](https://github.com/ahujasid/mcp-for-blender/pull/324)** | 33,491 | Handle multi-byte UTF-8 sequences split across socket reads. |
| **[NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector/pull/381)** | 24,709 | Stop the code-example heuristic from silently dropping SKILL.md findings. |
| **[teamhanko/hanko](https://github.com/teamhanko/hanko/pull/2725)** | 9,065 | Propagate context and fix a duplicate defer in the OAuth providers. |
| **[Tencent/AI-Infra-Guard](https://github.com/Tencent/AI-Infra-Guard/pull/541)** | 7,415 | Surface the underlying error when an MCP scan cannot connect. |
| **[gpustack/gpustack](https://github.com/gpustack/gpustack/pull/5817)** | 5,986 | Propagate asyncio cancellation and remove mutable default arguments. |
| **[zalando/skipper](https://github.com/zalando/skipper/pull/4125)** | 3,334 | Isolate the upgrade proxy dialer and give it a 30s timeout. |
| **[kerlenton/mcpsnoop](https://github.com/kerlenton/mcpsnoop/pull/40)** | 367 | Support opening sessions piped directly from stdin. |
| **[agent0ai/a0-plugins](https://github.com/agent0ai/a0-plugins/pulls?q=is%3Apr+author%3Aglatinone+is%3Amerged)** | 85 | Three Agent Zero plugins: human approval gate, chat jumper, chat status lights. |

**In review:** [BerriAI/litellm](https://github.com/BerriAI/litellm/pulls?q=is%3Apr+author%3Aglatinone+is%3Aopen) (Bourse as an OpenAI-compatible provider, with [docs](https://github.com/BerriAI/litellm-docs/pulls?q=is%3Apr+author%3Aglatinone+is%3Aopen)), [paperclipai/paperclip](https://github.com/paperclipai/paperclip/pulls?q=is%3Apr+author%3Aglatinone+is%3Aopen) (3), [rowboatlabs/rowboat](https://github.com/rowboatlabs/rowboat/pulls?q=is%3Apr+author%3Aglatinone+is%3Aopen) (4), [NVIDIA/garak](https://github.com/NVIDIA/garak/pulls?q=is%3Apr+author%3Aglatinone+is%3Aopen), [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill/pulls?q=is%3Apr+author%3Aglatinone+is%3Aopen), [lucacadalora/oyenza-studio](https://github.com/lucacadalora/oyenza-studio/pulls?q=is%3Apr+author%3Aglatinone+is%3Aopen).

## Stack & Principles

<p>
  <img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&amp;logo=python&amp;logoColor=white" alt="Python" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&amp;logo=typescript&amp;logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&amp;logo=javascript&amp;logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Rust-000000?style=flat-square&amp;logo=rust&amp;logoColor=white" alt="Rust" />
  <img src="https://img.shields.io/badge/Go-00ADD8?style=flat-square&amp;logo=go&amp;logoColor=white" alt="Go" />
  <img src="https://img.shields.io/badge/PowerShell-5391FE?style=flat-square&amp;logo=powershell&amp;logoColor=white" alt="PowerShell" />
</p>

Concrete workflow first, then a small runnable implementation, then normal paths, adversarial inputs and documented limits, so that someone else can reproduce the result.

## Writing & Collaboration

I write about AI agent security, MCP, and what I learn while building. Every article lives at **[kielltampubolon.id/writing](https://www.kielltampubolon.id/writing/)**, with copies on **[DEV.to](https://dev.to/kielltampubolon)** and **[Medium](https://kielltampubolon.medium.com)**.

**Start here**

- [MCP Security: A Practitioner's Guide](https://www.kielltampubolon.id/writing/mcp-security-guide/)
- [I scanned 30 Docker images. 10 still trust the root Chrome is dropping](https://www.kielltampubolon.id/writing/the-emudhra-fallout-part-2-i-scanned-30-docker-images-10-still-trust-the-root-chrome-is-dropping/)
- [I wrote an MCP server auth test harness for the 2026-07-28 spec](https://www.kielltampubolon.id/writing/i-wrote-an-mcp-server-auth-test-harness-for-the-2026-07-28-spec-here-is-what-broke-first/)
- [What is MCP security? Common attacks and how to scan your MCP servers](https://www.kielltampubolon.id/writing/what-is-mcp-security-common-attacks-and-how-to-scan-your-mcp-servers/)
- [A fake MCP server spent three months earning trust. The tells were there](https://www.kielltampubolon.id/writing/a-fake-mcp-server-spent-three-months-earning-trust-the-tells-were-there/)
- [My AI agent said we were under attack. The logs said otherwise.](https://www.kielltampubolon.id/writing/my-ai-agent-said-we-were-under-attack-the-logs-said-otherwise/)
- [We planted 10 vulnerabilities to test free Semgrep. It reported 3.](https://www.kielltampubolon.id/writing/we-planted-10-vulnerabilities-to-test-free-semgrep-it-reported-3/)
- [The eMudhra CA keys were one byte long. Does your container still trust them?](https://www.kielltampubolon.id/writing/the-emudhra-ca-keys-were-one-byte-long-does-your-container-still-trust-them/)

For collaborations around agent security, developer tools, technical documentation, or code-backed demos, connect on **[LinkedIn](https://www.linkedin.com/in/kiel-tampubolon/)** or see [sponsorships and partnerships](https://www.kielltampubolon.id/sponsor/).

---

<sub>Implementation first. Evidence over hype.</sub>
