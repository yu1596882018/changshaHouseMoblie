/**
 * 全局混入
 * @description 提供全局共享的数据和方法
 * 注意：为防止重名，混入代码统一用大写字母、下划线分割
 */

export default {
  data() {
    return {
      // 线上请求域名
      BASE_URL: 'http://ads-cms-api.aataotao.com',
    }
  },

  methods: {
    /**
     * 通用方法示例
     */
    COMMON_METHOD_DEMO() {
      console.log('这是一个demo', this.BASE_URL)
    },

    /**
     * 显示成功提示
     * @param {string} message - 提示消息
     */
    SHOW_SUCCESS_MESSAGE(message) {
      this.$toast.success(message)
    },

    /**
     * 显示错误提示
     * @param {string} message - 错误消息
     */
    SHOW_ERROR_MESSAGE(message) {
      this.$toast.fail(message)
    },

    /**
     * 显示加载提示
     * @param {string} message - 加载消息
     */
    SHOW_LOADING_MESSAGE(message = '加载中...') {
      this.$toast.loading({
        message,
        forbidClick: true,
        duration: 0,
      })
    },

    /**
     * 隐藏加载提示
     */
    HIDE_LOADING_MESSAGE() {
      this.$toast.clear()
    },
  },
}
