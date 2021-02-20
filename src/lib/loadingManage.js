// loading管理逻辑
import { Toast } from 'vant'

let $requestLoadingCount = 0
// Toast.allowMultiple()

export default function (requestOptions) {
  let options = {
    openLoadingSwitch: true, // 设置本次请求开启loading，默认为true
    ...(typeof requestOptions === 'object' ? requestOptions : {}),
  }

  let showLoading, loading, loadingTimer
  if (options.openLoadingSwitch) {
    loadingTimer = setTimeout(() => {
      showLoading = true
      $requestLoadingCount++
      loading = Toast.loading({
        duration: 0,
        forbidClick: true,
        message: '加载中...',
      })
    }, 300)
  }

  return () => {
    clearTimeout(loadingTimer)
    if (showLoading) {
      if (--$requestLoadingCount <= 0) {
        setTimeout(() => {
          if ($requestLoadingCount <= 0) {
            loading.clear()
          }
        }, 500)
      }
    }
  }
}
