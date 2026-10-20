---
name: paper-design
description: Paper.design visual review and bidirectional canvas integration for layout generation, design tokens, and components.
---

# Paper.design Skill

## Purpose
Integrates Antigravity with Paper Desktop for live visual design inspections, artboard generation, token exports, and JSX layout validation.

## Prerequisites
- Paper Desktop must be installed and running on the machine with a project file open.
- Built-in MCP server `paper` connects over local IPC.

## Capabilities
- `get_basic_info`: Canvas structure, pages, dimensions, and active artboard summary.
- `export`: Exports visual artboards to PNG/PDF.
- `create_artboard` & `write_html`: Writes layout designs directly into Paper.
- `get_tokens`: Extracts design tokens (colors, typography, spacing).
