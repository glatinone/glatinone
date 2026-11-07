I'm Kiell, a cybersecurity engineer working on the security of **AI agents and MCP servers**: what an agent is allowed to do, what an MCP server can reach before you install it, and how to prove the boundary held. I'm based in Batam, Indonesia, and work in cybersecurity at Constellar in Singapore.

I build open source tools for this:

- **[Agentic Security Lab](https://github.com/glatinone/agentic-security-lab)**: a deny-by-default policy boundary for agent tool calls, with an audit receipt for every decision. Try the [live workbench](https://glatinone.github.io/agentic-security-lab/).
- **[mcpscan](https://github.com/glatinone/mcpscan)**: a static supply-chain scanner for MCP servers and Claude Code projects. 30 rules mapped to the OWASP MCP Top 10, SARIF output, `pip install mcpscan-cli`.
- **[mcp-auth-harness](https://github.com/glatinone/mcp-auth-harness)**: tests an MCP server against the 2026-07-28 authorization spec. A naive baseline passes 2 of 10 checks; the hardened reference server passes all 10.
- **[Agent Memory Protocol](https://github.com/glatinone/agent-memory-protocol)**: an open protocol and reference server for shared agent memory, with per-memory access rules.

When I find a bug in a tool I use, I fix it upstream. My patches have been merged into NVIDIA SkillSpector, Tencent AI-Infra-Guard, headroom and six other projects, and I have open pull requests at NVIDIA garak and LiteLLM.

<table>
<tr>
<td valign="top" width="50%">

### Merged upstream

[headroomlabs-ai/headroom #3100](https://github.com/headroomlabs-ai/headroom/pull/3100) - 2026-11-06<br>
[agent0ai/a0-plugins #548](https://github.com/agent0ai/a0-plugins/pull/548) - 2026-09-16<br>
[Tencent/AI-Infra-Guard #541](https://github.com/Tencent/AI-Infra-Guard/pull/541) - 2026-09-02<br>
[ahujasid/mcp-for-blender #324](https://github.com/ahujasid/mcp-for-blender/pull/324) - 2026-08-24<br>
[NVIDIA/SkillSpector #381](https://github.com/NVIDIA/SkillSpector/pull/381) - 2026-08-20<br>
[zalando/skipper #4125](https://github.com/zalando/skipper/pull/4125) - 2026-07-13<br>
[gpustack/gpustack #5817](https://github.com/gpustack/gpustack/pull/5817) - 2026-07-10<br>
[teamhanko/hanko #2725](https://github.com/teamhanko/hanko/pull/2725) - 2026-07-09<br>
[kerlenton/mcpsnoop #40](https://github.com/kerlenton/mcpsnoop/pull/40) - 2026-07-08

</td>
<td valign="top" width="50%">

### Writing

[MCP Security: A Practitioner's Guide](https://www.kielltampubolon.id/writing/mcp-security-guide/)<br>
[I wrote an MCP server auth test harness for the 2026-07-28 spec](https://www.kielltampubolon.id/writing/i-wrote-an-mcp-server-auth-test-harness-for-the-2026-07-28-spec-here-is-what-broke-first/)<br>
[A fake MCP server spent three months earning trust](https://www.kielltampubolon.id/writing/a-fake-mcp-server-spent-three-months-earning-trust-the-tells-were-there/)<br>
[I scanned 30 Docker images. 10 still trust the root Chrome is dropping](https://www.kielltampubolon.id/writing/the-emudhra-fallout-part-2-i-scanned-30-docker-images-10-still-trust-the-root-chrome-is-dropping/)<br>
[We planted 10 vulnerabilities to test free Semgrep. It reported 3.](https://www.kielltampubolon.id/writing/we-planted-10-vulnerabilities-to-test-free-semgrep-it-reported-3/)

More at [kielltampubolon.id/writing](https://www.kielltampubolon.id/writing/)

</td>
</tr>
</table>

<p>
<a href="https://www.kielltampubolon.id">Website</a> ·
<a href="https://www.linkedin.com/in/kiel-tampubolon/">LinkedIn</a> ·
<!-- DEVTO-FOLLOWERS-COUNT:START -->
<a href="https://dev.to/kielltampubolon">DEV.to</a> (1,052 followers)
<!-- DEVTO-FOLLOWERS-COUNT:END -->
· <a href="https://kielltampubolon.medium.com">Medium</a>
</p>
