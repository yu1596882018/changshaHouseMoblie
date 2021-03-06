// feat: services逻辑完善
class Services {
  constructor(request) {
    this.request = request
  }

  getHouseInfoList(params) {
    return this.request({
      url: '/houseInfoList',
      method: 'get',
      params,
    })
  }

  getHouseChildren(tableId, params) {
    return this.request({
      url: '/houseChildren/' + tableId,
      method: 'get',
      params,
    })
  }

  getHouseChildrenInfo(tableId, params) {
    return this.request({
      url: '/houseChildrenInfo/' + tableId,
      method: 'get',
      params,
    })
  }

  verifyCode(data) {
    return this.request({
      url: '/verifyCode',
      method: 'post',
      data,
    }).then((res) => res.data)
  }

  collectHouseInfo(id) {
    return this.request({
      url: '/collectHouseInfo',
      method: 'get',
      params: {
        id,
      },
    }).then((res) => res.data)
  }
}

export default {
  install(Vue) {
    Vue.prototype.$services = new Services(Vue.prototype.$request)
  },
}
