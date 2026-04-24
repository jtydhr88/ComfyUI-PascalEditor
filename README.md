# ComfyUI-PascalEditor

A ComfyUI plugin that integrates [Pascal Editor](https://github.com/pascalorg/editor) — a full-featured 3D architectural editor — directly into your ComfyUI workflow.

[中文说明](README_CN.md)

![Pascal Editor in ComfyUI](docs/preview.png)

## What's New (v0.3.0)

This release updates the bundled Pascal Editor from `0.3.x` to upstream **[v0.6.0](https://github.com/pascalorg/editor/blob/main/CHANGELOG.md)**, bringing a large batch of editor improvements into the ComfyUI plugin:

- **Multi-surface material system** — per-surface materials for walls, stairs, and roofs with click-targeted 3D editing
- **13 material presets** — granite, marble, parquet, wallpaper, wood, and more
- **Automatic wall-room generation** — closed wall loops auto-split and generate slabs + auto ceilings
- **Stair-slab integration** — stair-driven cutouts in slabs and ceilings
- **Curved walls and curved fences** (+ endpoint move tools)
- **Street view / walkthrough mode**
- **Editor layout redesign v2** + 3D box select
- **Move / rotate building** + relative positioning for all tools
- **Grid snap toolbar controls** and **cut-out button** in the floating action menu for slabs and ceilings
- **Editable wall length slider** and infinity-dragging sliders
- **WebGPU renderer** improvements and fallbacks
- Numerous crash, undo/redo, snapping, and post-processing fixes

## Features

- **Full 3D Architectural Editor** — Create and edit buildings, walls, floors, ceilings, roofs, doors, windows, stairs, fences, and zones directly in a ComfyUI node
- **Screenshot Output** — Automatically captures the current 3D viewport as an IMAGE output when running the workflow, ready for img2img, ControlNet, etc.
- **Configurable Resolution** — Width/height controls on the node determine the output image size (center-crop + LANCZOS scaling, no distortion)
- **3D Model Export** — Export your designs as GLB, STL, or OBJ via node buttons
- **Scene Save & Load** — Save your building layout as JSON and reload it later
- **Fullscreen Mode** — Open the editor in a fullscreen dialog for a better editing experience
- **Top Menu Access** — Quick access button in the ComfyUI top menu bar
- **Collapsible UI** — Sidebar and toolbar can be collapsed/dragged for maximum viewport space

## Installation

Clone this repository into your ComfyUI `custom_nodes` directory:

```bash
cd ComfyUI/custom_nodes
git clone https://github.com/jtydhr88/ComfyUI-PascalEditor.git
```

Restart ComfyUI. The **Pascal Editor** node will appear under the `PascalEditor` category.

## Usage

### As a Node

1. Add the **Pascal Editor** node to your workflow
2. Design your building in the embedded 3D editor
3. Connect the `image` output to downstream nodes (e.g., Preview Image, img2img, ControlNet)
4. Run the workflow — the current viewport is automatically captured and output

### Node Buttons

| Button | Action |
|--------|--------|
| Export GLB | Download the 3D model in GLB format |
| Export STL | Download the 3D model in STL format |
| Export OBJ | Download the 3D model in OBJ format |
| Save Build | Save the current scene as a JSON file |
| Load Build | Load a previously saved JSON scene |
| Fullscreen | Open the editor in a fullscreen dialog |

### Top Menu

Click the **Pascal Editor** button in the ComfyUI top menu bar to open the editor in a fullscreen dialog.

### Direct URL

Access the editor directly at: `http://127.0.0.1:8188/pascal-editor/`

## Development

### Prerequisites

- Node.js 18+
- [Bun](https://bun.sh) package manager

### Build the Plugin Extension

```bash
cd ComfyUI/custom_nodes/ComfyUI-PascalEditor
npm install
npm run build
```

### Rebuild the Editor UI

The `pascal-editor-ui/` directory contains the pre-built editor. To rebuild from source:

```bash
bash build-editor.sh
```

This script builds the Pascal Editor as a static export and copies the output to the plugin directory.

## Credits

This plugin integrates [Pascal Editor](https://github.com/pascalorg/editor) by [Pascal](https://github.com/pascalorg) — an open-source 3D architectural editor built with React Three Fiber, Three.js, and Next.js.

## License

MIT
