export const QUERY_SYSTEM_DETAILS = '/hsbc/institution/selectInstitution'

// feat: services逻辑完善
class Services {
  constructor(request) {
    this.request = request
  }

  querySystemDetails(instId) {
    return this.request({
      url: QUERY_SYSTEM_DETAILS,
      method: 'get',
      params: { instId: instId },
    })
  }
}

export default {
  install(Vue) {
    Vue.prototype.$services = new Services(Vue.prototype.$request)
  },
}
