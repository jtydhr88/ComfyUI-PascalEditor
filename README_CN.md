# ComfyUI-PascalEditor

一个将 [Pascal Editor](https://github.com/pascalorg/editor)（全功能 3D 建筑编辑器）直接集成到 ComfyUI 工作流中的插件。

[English](README.md)

![Pascal Editor in ComfyUI](docs/preview.png)

## 功能特性

- **完整的 3D 建筑编辑器** — 在 ComfyUI 节点中直接创建和编辑建筑、墙体、地板、天花板、屋顶、门窗和区域
- **截图输出** — 运行工作流时自动捕获当前 3D 视口画面作为 IMAGE 输出，可直接用于 img2img、ControlNet 等
- **可配置分辨率** — 节点上的 width/height 控制输出图片大小（中心裁切 + LANCZOS 缩放，不拉伸变形）
- **3D 模型导出** — 通过节点按钮导出 GLB、STL 或 OBJ 格式的 3D 模型
- **场景保存和加载** — 将建筑布局保存为 JSON 文件，随时重新加载
- **全屏模式** — 在全屏对话框中打开编辑器，获得更好的编辑体验
- **顶部菜单** — ComfyUI 顶部菜单栏快捷访问按钮
- **可折叠 UI** — 侧边栏和工具栏可折叠/拖拽，最大化视口空间

## 安装

将此仓库克隆到 ComfyUI 的 `custom_nodes` 目录：

```bash
cd ComfyUI/custom_nodes
git clone https://github.com/jtydhr88/ComfyUI-PascalEditor.git
```

重启 ComfyUI，**Pascal Editor** 节点将出现在 `PascalEditor` 分类下。

## 使用方法

### 作为节点使用

1. 将 **Pascal Editor** 节点添加到工作流
2. 在嵌入的 3D 编辑器中设计建筑
3. 将 `image` 输出连接到下游节点（如 Preview Image、img2img、ControlNet）
4. 运行工作流 — 当前视口画面会自动捕获并输出

### 节点按钮

| 按钮 | 功能 |
|------|------|
| Export GLB | 下载 GLB 格式的 3D 模型 |
| Export STL | 下载 STL 格式的 3D 模型 |
| Export OBJ | 下载 OBJ 格式的 3D 模型 |
| Save Build | 将当前场景保存为 JSON 文件 |
| Load Build | 加载之前保存的 JSON 场景 |
| Fullscreen | 在全屏对话框中打开编辑器 |

### 顶部菜单

点击 ComfyUI 顶部菜单栏中的 **Pascal Editor** 按钮，在全屏对话框中打开编辑器。

### 直接访问

通过浏览器直接访问：`http://127.0.0.1:8188/pascal-editor/`

## 开发

### 环境要求

- Node.js 18+
- [Bun](https://bun.sh) 包管理器

### 构建插件扩展

```bash
cd ComfyUI/custom_nodes/ComfyUI-PascalEditor
npm install
npm run build
```

### 重新构建编辑器 UI

`pascal-editor-ui/` 目录包含预构建的编辑器。如需从源码重新构建：

```bash
bash build-editor.sh
```

此脚本会将 Pascal Editor 构建为静态导出并复制到插件目录。

## 致谢

本插件集成了 [Pascal](https://github.com/pascalorg) 开发的 [Pascal Editor](https://github.com/pascalorg/editor) — 一个基于 React Three Fiber、Three.js 和 Next.js 构建的开源 3D 建筑编辑器。

## 许可证

MIT
