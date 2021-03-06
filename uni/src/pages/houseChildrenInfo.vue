<template>
  <view class="house-children">
    <search-list
      ref="searchList"
      :colAttrs="colAttrs"
      :requestData="$services.getHouseChildrenInfo.bind($services, $route.query.id)"
      collapseItemValueKey="i"
      collapseItemTitleKey="a"
      :hideCollapseItemIco="true"
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
        a: '户室号',
        b: '楼层',
        c: '房屋用途',
        d: '房屋类型',
        e: '装修状态',
        f: '建筑面积',
        g: '套内面积',
        h: '分摊面积',
        i: '销售状态',
      },
    }
  },
  methods: {},
}
</script>

<style lang="scss"></style>
