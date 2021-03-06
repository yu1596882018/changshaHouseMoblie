// loading管理逻辑
let $requestLoadingCount = 0

export default function (requestOptions) {
  let options = {
    openLoadingSwitch: true, // 设置本次请求开启loading，默认为true
    ...(typeof requestOptions === 'object' ? requestOptions : {}),
  }

  let showLoading, loadingTimer
  if (options.openLoadingSwitch) {
    loadingTimer = setTimeout(() => {
      showLoading = true
      $requestLoadingCount++
      options.showLoading()
    }, 300)
  }

  return () => {
    clearTimeout(loadingTimer)
    if (showLoading) {
      if (--$requestLoadingCount <= 0) {
        setTimeout(() => {
          if ($requestLoadingCount <= 0) {
            options.hideLoading()
          }
        }, 500)
      }
    }
  }
}
