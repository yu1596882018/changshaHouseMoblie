# vue-mobile-init

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### 目录结构

+ public - 静态文件，不会被转译
+ src - 主代码目录
    + assets - 静态文件，会被打包转译
        + css - 存放单独css文件的目录
            + functions.scss 
                - 存放sccs声明的公共函数（该文件会经过webpack loader引入到每个vue的style中，使用时不需要单独引入）
            + mixins.scss 
                - 初始化css配置，以及通用的css class（该文件会在app.vue文件中引入，使用时直接在标签上设置class）
            + variables.scss 
                - 存放sccs声明公共变量（该文件会经过webpack loader引入到每个vue的style中，使用时不需要单独引入）
        + images - 存放图片资源的目录
            + 如果项目图片比较多，可在按页面结构划分子文件夹（默认使用扁平化方式存放）
    + components - 公共组件的目录
    + config - 管理配置的目录
    + lib - 管理基础建设的目录
    + mixins - 管理公共混入代码的目录
        + global - 全局混入,为防止重名，混入代码统一用大写字母、下划线分割(会在main.js文件里边统一引入，无需单独引入)
        + local - 局部混入,为防止重名，混入代码统一用大写字母、下划线分割(需要单独在组件中引入)
    + router - 管理页面路由的目录
    + services - 管理请求api的目录
    + store - 管理vuex的目录
    + utils - 管理js工具的目录
    + views - 页面存放的目录
        + 文件模式 - 用于一个页面，只有一个vue文件
        + 文件夹模式 - 用于一个页面，有多个vue文件，且其他文件不适合放到公共组件中（文件夹下，index.vue作为页面入口）

### 开发流程

+ 编辑器开启eslint、prettier插件 - TODO
+ 分支管理 - TODO
+ 数据Mock - TODO
+ 提交代码会自动执行gitHooks代码检查（commit后面添加--no-verify可跳过此环节，不推荐）
+ 移动端rem适配
    + 默认为750设计图的配置，引入了postcss-pxtorem，自动对px单位进行转换。

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
