/**
 * 库文件主入口
 * @description 统一导入和初始化所有库文件
 */

import Vue from 'vue'

// 导入监控配置
import './monitorConfigure'

// 导入移动端适配
import '@yu1596882018/web-sdk/es/lib/flexible'

// 导入Vant组件
import './importVant'

// 导入HTTP请求库
import request from './request'

// 注册HTTP请求插件
Vue.use(request)
