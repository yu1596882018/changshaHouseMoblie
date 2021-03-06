<template>
  <view class="house-children">
    <search-list
      ref="searchList"
      :colAttrs="colAttrs"
      :requestData="$services.getHouseChildren.bind($services, $route.query.id)"
      collapseItemValueKey="c"
      collapseItemTitleKey="b"
      :getCollapseItemLabelFunc="getCollapseItemLabelFunc"
      @collapseItemIconClick="toHouseChildrenInfo"
    ></search-list>
  </view>
</template>

<script>
import searchList from '../components/searchList'

export default {
  name: 'houseChildren',
  components: { searchList },
  onLoad(options) {
    uni.setNavigationBarTitle({
      title: options.title,
    })
  },
  onPullDownRefresh() {
    this.$refs.searchList.onRefresh()
  },
  data() {
    return {
      colAttrs: {
        j: '总户数',
        k: '已售',
        l: '可售',
        a: '预售许可证号',
        b: '对应栋号',
        c: '发证日期',
        d: '批准预售总面积(㎡)',
        e: '国土证号',
        f: '工程规划许可证号',
        g: '用地规划许可证号',
        h: '工程施工许可证',
        i: '楼栋每户信息表id',
      },
    }
  },
  methods: {
    toHouseChildrenInfo(item) {
      uni.navigateTo({
        url: '/pages/houseChildrenInfo?id=' + this.$route.query.id + '_' + item.i + '&title=' + item.b,
      })
    },
    getCollapseItemLabelFunc(item) {
      return `可售${item.l}、已售${item.k}`
    },
  },
}
</script>

<style lang="scss"></style>
