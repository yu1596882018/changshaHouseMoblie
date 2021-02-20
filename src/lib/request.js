import axios from 'axios'
import { Toast } from 'vant'
import { requestBaseUrl } from '@/config'
import loadingManage from './loadingManage'

axios.defaults.baseURL = requestBaseUrl

export default {
  install(Vue) {
    Vue.prototype.$request = function () {
      let _this = this
      let _arguments = arguments
      const requestEnd = loadingManage.apply(_this, _arguments)

      return new Promise(function (resolve, reject) {
        axios.apply(this, _arguments).then(
          function () {
            resolve.apply(_this, arguments)
            requestEnd()
          },
          function () {
            /* let res = error.response
          if (res && res.status === 401) {
            _this.$router && _this.$router.push('/login')
          } */
            reject.apply(_this, arguments)
            requestEnd()
          },
        )
      })
    }

    // 添加请求拦截器
    axios.interceptors.request.use(
      function (config) {
        localStorage.getItem('token') && (config.headers.Authorization = 'JWT ' + localStorage.getItem('token'))
        return config
      },
      function (error) {
        return Promise.reject(error)
      },
    )

    // 添加响应拦截器
    axios.interceptors.response.use(
      function (response) {
        return response
      },
      function (error) {
        Toast.fail('网络繁忙~')
        // 对响应错误做点什么
        /* let res = error.response
      if (res && res.status !== 200 && res.status !== 401) {
        if (typeof res.data === 'string') {
          setTimeout(() => {
            Vue.prototype.$notify.error({
              title: '错误',
              message: res.data
            })
          }, 100)
        } else if (typeof res.data === 'object') {
          for (var key in res.data) {
            var item = res.data[key]

            if (typeof item === 'string') {
              setTimeout(() => {
                Vue.prototype.$notify.error({
                  title: '错误',
                  message: key + ' ===> ' + item
                })
              }, 100)
            } else if (item instanceof Array) {
              item.forEach(itemSon => {
                setTimeout(() => {
                  Vue.prototype.$notify.error({
                    title: '错误',
                    message: key + ' ===> ' + itemSon
                  })
                }, 100)
              })
            }
          }
        }
      } */
        return Promise.reject(error)
      },
    )
  },
}
