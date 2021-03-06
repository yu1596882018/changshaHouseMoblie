// 全局混入,为防止重名，混入代码统一用大写字母、下划线分割(会在main.js文件里边统一引入，无需单独引入)
export default {
  data() {
    return {
      BASE_URL: 'http://ads-cms-api.aataotao.com', // 线上请求域名
    }
  },
  methods: {
    COMMON_METHOD_DEMO() {
      console.log('这是一个demo', this.BASE_URL)
    },
  },
}
