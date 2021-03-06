<template>
  <view class="home">
    222
    <uni-grid @change="test" :column="3" :showBorder="false" :square="false">
      <uni-grid-item>
        <uni-icons type="list" size="30"></uni-icons>
        <text class="text">楼盘列表</text>
      </uni-grid-item>
      <uni-grid-item>
        <uni-icons type="search" size="30"></uni-icons>
        <text class="text">楼盘列表</text>
      </uni-grid-item>
    </uni-grid>
    333
  </view>
</template>

<script>
import { uniGrid, uniGridItem, uniIcons } from '@dcloudio/uni-ui'
export default {
  components: { uniGrid, uniIcons, uniGridItem },
  data() {
    return {}
  },
  methods: {
    test(e) {
      console.log('1', e)
      if (e.detail.index === 0) {
        uni.navigateTo({
          url: '/pages/houseInfoList',
        })
      } else if (e.detail.index === 1) {
        uni.navigateTo({
          url: '/pages/houseSearch',
        })
      }
    },
  },
}
</script>

<style lang="scss">
.home {
  .uni-grid-item {
    text {
      text-align: center;
    }
  }
}
</style>
