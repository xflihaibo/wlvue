# 模拟器项目开发

## 简介

模拟器项目是内部一键 mock 测试数据平台，可以通过配置不同的模版，规则，模拟不同的测试场景。

## 快速启动

#### 开发环境

```bash
//切换镜像
nrm add nio http://npm-registry.nevint.com/repository/npm-all/
nrm use nio

//安装依赖&启动项目
$ npm i || yarn install
$ npm run serve
$ open http://localhost:8000/
```

### 技术栈 相关插件

1. vue3: [参考文档](https://cn.vuejs.org/)
2. element-plus:[参考文档](https://element-plus.org/zh-CN/)
3. typescript:[参考文档](https://www.typescriptlang.org/zh/)
4. eslint:[参考文档](https://eslint.org/)
5. Markdown [参考文档](https://maxiang.io)

### 文件夹结构

```
.
├── babel.config.js //babel 配置文件
├── package.json
├── plugins
├── public
├── readme.md //项目文档
├── src
│   ├── apis
│   │   └── login.ts
│   ├── app.vue
│   ├── assets
│   ├── components //项目公共组件库
│   │   └── readme.md
│   ├── config //基础配置
│   │   └── base.ts
│   ├── css //样式库
│   │   ├── fonts.css
│   │   └── normalize.css
│   ├── main.ts //入口文件
│   ├── model //数据模型定义
│   │   └── login.ts
│   ├── pages //页面
│   │   ├── home
│   │   │   └── index.vue
│   │   ├── login
│   │   │   └── index.vue
│   ├── plugins //插件注入
│   │   └── element.ts
│   ├── router //路由
│   │   ├── index.ts
│   │   └── routes.ts
│   └── util //工具库
│       └── fetch.ts
├── tsconfig.json //ts 配置
├── typings
│   ├── custom-typings.d.ts
│   ├── index.d.ts
│   └── shims-vue.d.ts
├── vue.config.js //配置文件
├── yarn-error.log
└── yarn.lock

```

### ModelBase

ModelBase：[参考文档](https://nio.feishu.cn/docs/doccn6BqGOPpH2CpYFK3nYu4wqd)

### 方案设计&参考文档

1. [模拟器技术方案（前端）](https://nio.feishu.cn/docs/doccn2EpJzWHkjLm5MWdJ6Dhjsg#)
2. [figma](https://www.figma.com/file/r7mNr6SvwmPcMubj5hlcfb/Background-Delivery?node-id=293%3A4464)
3. [api 接口文档地址](https://apidoc.nioint.com/project/5944/interface/api/cat_65437)
4. [Nexus-模拟器工具平台 GUI 概况](https://nio.feishu.cn/docs/doccniUVIcHLBrud7DbtlhpHdQc)
