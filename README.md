# Kiell Tampubolon

## Applied AI & Cybersecurity Engineer

I build trustworthy AI systems and developer infrastructure. My work covers agent security, security automation, memory, evaluation, and practical developer tools.

My work sits at the intersection of **AI engineering**, **cybersecurity**, and **developer experience**. I care about systems that are useful in practice, observable when they fail, and honest about their limits.

<!-- DEVTO-FOLLOWERS-COUNT:START -->**836** DEV.to followers<!-- DEVTO-FOLLOWERS-COUNT:END -->

## What I build

- **AI security:** threat-aware agent workflows, tool-use boundaries, configuration scanning, and defensive automation.
- **Agent infrastructure:** memory, state, authorization, lifecycle behavior, and multi-agent coordination.
- **Developer tools:** CLIs, MCP servers, SDKs, fixtures, tests, and documentation that make complex systems easier to use.
- **Practical AI systems:** focused applications and demos that connect technical depth to a real workflow.

## Current work

### Agentic Security Lab: flagship direction

A reproducible engineering lab for evaluating agents operating against code, GitHub, APIs, and security tools.

The core trace is simple:

```text
agent → identity/policy gate → tool action → audit trace → adversarial scenario → evaluation report
```

The lab will connect the projects below into one broader story: how to build AI-enabled systems that remain understandable and controllable under real operating conditions.

> Status: foundation and local design in progress. Public launch follows a reproducible first trace and fresh verification.

## Selected projects

### [AI Safety Compass](https://github.com/glatinone/ai-safety-compass)

A short checkup for people and small teams that use AI at work.

**Focus:** turn AI safety questions into plain-language decisions and three practical next steps. No account, no data upload, and no security jargon.

### [mcpscan](https://github.com/glatinone/mcpscan)

An inspection and security-scanning tool for MCP servers, agent client configurations, source files, and GitHub workflows.

**Focus:** detect risky tool behavior, configuration weaknesses, secrets, workflow issues, and other agent-environment hazards before they become runtime surprises.

### [agent-memory-protocol](https://github.com/glatinone/agent-memory-protocol)

An HTTP-native protocol and reference implementation for durable agent memory, lifecycle behavior, access control, storage, and SDK usage.

**Focus:** make agent state explicit, inspectable, and useful across sessions and collaborating agents.

### [secops-toolkit-mcp](https://github.com/glatinone/secops-toolkit-mcp)

Defensive security utilities exposed through an MCP server and CLI, including IOC handling, hashing, entropy checks, CIDR analysis, repository checks, and shell-command assessment.

**Focus:** give analysts and agents small, composable security actions with clear boundaries.

## How I work

1. Start with a concrete workflow and its failure modes.
2. Build a small, runnable slice.
3. Test normal paths, adversarial inputs, and operational limits.
4. Document the evidence, trade-offs, and non-goals.
5. Turn the result into a demo, case study, or developer-facing guide.

## Beyond one niche

MCP is one implementation surface in my work, not the whole identity. I also explore agent memory, evaluation, security automation, workflow systems, and practical AI applications. The common thread is building AI-enabled software that people can inspect, operate, and trust.

## Writing and contact

- Portfolio: [kielltampubolon.id](https://kielltampubolon.id)
- Dev.to: [@kielltampubolon](https://dev.to/kielltampubolon)
- LinkedIn: [Kiell Tampubolon](https://www.linkedin.com/in/kiel-tampubolon/)
- Medium: [@kielltampubolon](https://kielltampubolon.medium.com)

I’m interested in collaborations around AI security, agent infrastructure, developer tooling, technical documentation, and code-backed demos.

## Build log

This profile is being rebuilt around fewer, stronger public proofs. Repositories may be archived, made private, or re-scoped as their evidence and maintenance state become clearer.

<sub>Implementation first. Evidence over hype. Useful systems over noise.</sub>


