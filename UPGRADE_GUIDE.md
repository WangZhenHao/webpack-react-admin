# Vite 升级指南

## 概述
项目已成功从 Webpack 迁移到 Vite，这是更快的构建工具和开发服务器。

## 安装依赖

首先，安装所有新的依赖项：

```bash
npm install
```

## 开发服务器

启动开发服务器：

```bash
npm run dev
```

启动开发服务器：

```bash
npm run bate
```

## 构建

生产构建：

```bash
npm run build:prod
```

开发构建：

```bash
npm run build:dev
```

预发布构建：

```bash
npm run build:bate
```

预览生产构建：

```bash
npm run preview
```

## 测试

运行测试：

```bash
npm test
```

运行测试（带 UI）：

```bash
npm run test:ui
```

## 主要变化

1. **环境变量**：从 `REACT_APP_` 改为 `VITE_` 前缀
2. **构建速度**：显著提升
3. **HMR**：更快的热模块替换
4. **路径别名**：在 vite.config.ts 中配置
5. **TypeScript**：更新为 ES 模块配置

## 新增配置文件

- `vite.config.ts` - Vite 主配置
- `vitest.config.ts` - 测试配置
- `postcss.config.js` - PostCSS 配置

## 注意事项

- 确保所有导入使用 `.tsx` 扩展名
- Vite 自动处理 CSS 模块和图片优化
- 开发服务器在 `http://localhost:3000` 运行