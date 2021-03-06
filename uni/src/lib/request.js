import { requestBaseUrl } from '@/config'
import loadingManage from './loadingManage'

export default {
  install(Vue) {
    let loading = null

    Vue.prototype.$request = function (options) {
      let _this = this
      let _arguments = arguments

      const requestEnd = loadingManage({
        ...(options && typeof options === 'object' ? options : {}),
        showLoading: () => {
          if (!loading) {
            loading = true
            uni.showLoading({
              title: '加载中...',
              mask: true,
            })
          }
        },
        hideLoading() {
          uni.hideLoading()
          loading = null
        },
      })

      const actualUrl = /^(http:|https:)/.test(options.url) ? options.url : requestBaseUrl + options.url
      options.url = actualUrl
      options.method = options.method && options.method.toLocaleUpperCase()
      options.data = options.data ? options.data : options.params

      return new Promise(function (resolve, reject) {
        uni.request.apply(this, _arguments).then(
          function (data) {
            resolve.apply(_this, [data[1]])
            requestEnd()
          },
          function () {
            /* let res = error.response
          if (res && res.status === 401) {
            _this.$router && _this.$router.push('/login')
          } */
            reject.apply(_this, arguments)
            requestEnd()
            uni.showToast({
              title: '网络繁忙~',
              duration: 3000,
            })
          },
        )
      })
    }
  },
}
