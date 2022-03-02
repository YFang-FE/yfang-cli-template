# yfang-cli-template

yfang-cli 脚手架模板, 包含 vue， react, library 多种库

## Vue2

本项目基于 yfang-cli 脚手架搭建，全局安装 `npm i yfang-cli -g`, 然后执行 `yfang-cli create [name]` 即可


Vue2 项目由 webpack4 打包构建，提供基础稳定的功能，如 vue-router, vuex, axios, sass, less, husky, commitlint, eslint 等基础功能


如果想尝试更新的技术可以使用 yfang-cli 搭建 vue3 + ts 的项目

### 开发

```
npm start
```

### 构建
```
npm run build
```

### 提交

```
git add [file]
npm run commit
```

### 开发web移动端项目

- 在 index.js 引入文件 `import "./utils/flexible"`

- 修改 postcss.config.js 文件，添加 plugin `require('postcss-px2rem')({remUnit: 37.5})`

- 修改 build/webpack.dev.js ，将 scss 和 less 中的 `postcss-loader` 取消注释

即可实现移动端适配效果，按全屏宽度 375px 计算 rem
## 问题&建议

如果你有任何问题，可以给我发邮件(zxpscau@163.com)，或者给项目提 [issue](https://github.com/YFang-FE/yfang-cli-template/issues/new).