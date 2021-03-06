<template>
  <view class="house-info-list">
    <search-list
      ref="searchList"
      :colAttrs="colAttrs"
      :requestData="$services.getHouseInfoList.bind($services)"
      collapseItemValueKey="t"
      collapseItemTitleKey="w"
      @collapseItemIconClick="toHouseChildren"
    ></search-list>
  </view>
</template>

<script>
import searchList from '../components/searchList'

export default {
  name: 'houseInfoList',
  components: { searchList },
  onLoad() {
    uni.setNavigationBarTitle({
      title: '楼盘列表',
    })
  },
  onPullDownRefresh() {
    console.log('onPullDownRefresh')
    this.$refs.searchList.onRefresh()
  },
  data() {
    return {
      colAttrs: {
        w: '小区名称',
        v: '小区id',
        a: '所属区域',
        b: '开发商',
        c: '项目地址',
        d: '售楼处地址',
        e: '规划户数',
        f: '总占地面积',
        g: '总建筑面积',
        h: '容积率',
        i: '绿化率',
        j: '物业费',
        k: '立项批文号',
        l: '总栋数',
        m: '销售起价',
        n: '售楼部电话',
        o: '公交路线',
        p: '设计单位',
        q: '销售代理',
        r: '物业管理',
        s: '施工单位',
        t: '竣工时间',
        u: '项目简介',
      },
    }
  },
  methods: {
    toHouseChildren({ v: id, w: title }) {
      uni.navigateTo({
        url: '/pages/houseChildren?id=' + id + '&title=' + title,
      })
    },
  },
}
</script>

<style lang="scss"></style>
