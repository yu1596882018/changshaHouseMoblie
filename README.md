# 长沙房源信息查询系统

[![Vue](https://img.shields.io/badge/Vue-2.6.11-brightgreen.svg)](https://vuejs.org/)
[![Vant](https://img.shields.io/badge/Vant-2.12.6-blue.svg)](https://youzan.github.io/vant/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

一个基于 Vue.js 和 Vant UI 的长沙房源信息查询移动端应用，提供楼盘信息查询、数据同步等功能。

## ✨ 功能特性

- 🏠 **楼盘信息查询** - 支持按预售许可证编码查询楼盘信息
- 📊 **数据同步** - 支持同步长沙市住房和城乡建设局公示数据
- 📱 **移动端适配** - 基于 Vant UI 组件库，完美适配移动端
- 🔄 **实时更新** - 支持下拉刷新和上拉加载更多
- 🎯 **筛选功能** - 支持按销售状态筛选房源信息
- 📋 **详细信息** - 提供楼盘的详细信息展示

## 🛠 技术栈

- **前端框架**: Vue.js 2.6.11
- **UI 组件库**: Vant 2.12.6
- **路由管理**: Vue Router 3.2.0
- **状态管理**: Vuex 3.4.0
- **HTTP 客户端**: Axios 0.21.1
- **样式预处理**: Sass/SCSS
- **代码规范**: ESLint + Prettier
- **移动端适配**: PostCSS + PxToRem

## 📦 安装和运行

### 环境要求

- Node.js >= 12.0.0
- npm >= 6.0.0

### 安装依赖

```bash
# 使用 npm
npm install

# 或使用 yarn
yarn install
```

### 开发环境

```bash
# 启动开发服务器
npm run dev
# 或
yarn dev

# 访问 http://localhost:8080
```

### 生产构建

```bash
# 构建生产版本
npm run build

# 构建并分析包大小
npm run analyze
```

### 代码检查

```bash
# 代码检查
npm run lint

# 自动修复代码格式问题
npm run lint:fix

# 格式化代码
npm run prettier
```

## 📁 项目结构

```
src/
├── assets/                 # 静态资源
│   ├── css/               # 样式文件
│   │   ├── functions.scss # SCSS 函数库
│   │   ├── mixins.scss    # SCSS 混入和基础样式
│   │   └── variables.scss # SCSS 变量定义
│   └── images/            # 图片资源
├── components/            # 公共组件
│   └── HelloWorld.vue     # 示例组件
├── config/                # 配置文件
│   └── index.js           # 应用配置
├── lib/                   # 基础库文件
│   ├── index.js           # 库文件主入口
│   ├── importVant.js      # Vant 组件导入配置
│   ├── monitorConfigure.js # 监控配置
│   └── request.js         # HTTP 请求库
├── mixins/                # 混入文件
│   ├── global/            # 全局混入
│   │   └── index.js       # 全局混入配置
│   └── local/             # 局部混入
│       └── index.js       # 局部混入配置
├── router/                # 路由配置
│   └── index.js           # 路由定义
├── services/              # 服务层
│   └── index.js           # API 服务
├── store/                 # 状态管理
│   └── index.js           # Vuex 配置
├── utils/                 # 工具函数
│   └── index.js           # 工具函数库
├── views/                 # 页面组件
│   ├── home.vue           # 首页
│   ├── houseInfoList.vue  # 房源列表页
│   ├── houseChildren.vue  # 房源详情页
│   ├── houseChildrenInfo.vue # 房源信息详情页
│   └── houseSearch.vue    # 房源搜索页
├── App.vue                # 根组件
└── main.js                # 应用入口
```

## 🚀 开发指南

### 代码规范

项目使用 ESLint + Prettier 进行代码规范检查：

- 使用单引号
- 不使用分号
- 使用 2 空格缩进
- 组件名使用 PascalCase
- 提交前自动进行代码检查

### 移动端适配

项目使用 `postcss-pxtorem` 进行移动端适配：

- 设计稿宽度：750px
- 根元素字体大小：37.5px
- 自动将 px 转换为 rem

### 样式开发

项目使用 SCSS 进行样式开发：

- 变量定义：`src/assets/css/variables.scss`
- 混入函数：`src/assets/css/mixins.scss`
- 工具函数：`src/assets/css/functions.scss`

### 组件开发

- 公共组件放在 `src/components/` 目录
- 页面组件放在 `src/views/` 目录
- 组件名使用 PascalCase
- 使用 scoped 样式避免样式污染

### API 开发

- API 服务定义在 `src/services/` 目录
- 使用统一的请求库 `src/lib/request.js`
- 支持请求拦截和响应拦截
- 统一的错误处理机制

## 📱 页面说明

### 首页 (`/`)
- 功能导航入口
- 楼盘列表和楼盘搜索

### 楼盘列表页 (`/houseInfoList`)
- 显示所有楼盘信息
- 支持下拉刷新和上拉加载
- 可查看楼盘详细信息

### 房源详情页 (`/houseChildren`)
- 显示楼栋详细信息
- 支持查看具体房源信息

### 房源信息详情页 (`/houseChildrenInfo`)
- 显示具体房源信息
- 支持按销售状态筛选

### 房源搜索页 (`/houseSearch`)
- 根据预售许可证编码搜索
- 支持数据同步功能

## 🔧 配置说明

### 环境配置

项目支持多环境配置：

- 开发环境：`npm run dev`
- 生产环境：`npm run build:prod`
- 测试环境：`npm run build:stage`

### API 配置

API 基础地址配置在 `src/config/index.js`：

```javascript
export const requestBaseUrl = process.env.NODE_ENV === 'development' 
  ? 'http://localhost:8899' 
  : prodBaseUrl
```

## 🤝 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目基于 [MIT](LICENSE) 许可证开源。

## 📞 联系我们

- 项目地址：[GitHub](https://github.com/your-username/changsha-house-mobile)
- 问题反馈：[Issues](https://github.com/your-username/changsha-house-mobile/issues)
- 邮箱：dev@example.com

## 🙏 致谢

感谢以下开源项目的支持：

- [Vue.js](https://vuejs.org/) - 渐进式 JavaScript 框架
- [Vant](https://youzan.github.io/vant/) - 移动端 Vue 组件库
- [Vue CLI](https://cli.vuejs.org/) - Vue.js 开发工具
