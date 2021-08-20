import Vue from 'vue'
import { MonitorJS } from '@yu1596882018/web-sdk/es/lib/monitor'
import { requestBaseUrl } from '@/config'

const monitor = new MonitorJS()

monitor.init({
  url: requestBaseUrl + '/reportMonitor', //错误上报地址
  consoleError: true, //配置是否需要记录console.error错误信息
  vueError: true, //配置是否需要记录vue错误信息
  vue: Vue, //如需监控vue错误信息，则需要传入vue
})

monitor.monitorPerformance({
  pageId: 'changshaHouseMoblie', //页面唯一标示
  url: requestBaseUrl + '/reportMonitor', //信息采集上报地址
})
