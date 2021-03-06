<template>
  <div class="collapse-item">
    <div
      @click="unfold = !unfold"
      role="button"
      tabindex="0"
      aria-expanded="false"
      class="cell cell--clickable collapse-item__title"
    >
      <div class="cell__title">
        <slot name="title"></slot>
        <div v-if="label" class="cell__label">{{ label }}</div>
      </div>
      <div class="cell__value">
        <span>{{ value }}</span>
      </div>
      <uni-icons class="arrow-icon" :class="{ arrowup: unfold }" type="arrowdown" size="24" color="#969799"></uni-icons>
    </div>
    <div
      class="collapse-item__wrapper"
      :style="{
        height: unfold ? 'auto' : '0',
        display: unfold ? 'block' : 'none',
      }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { uniIcons } from '@dcloudio/uni-ui'
export default {
  props: ['label', 'value'],
  components: {
    uniIcons,
  },
  name: 'collapseItem',
  data() {
    return {
      unfold: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.collapse-item {
  font-style: normal;
  font-feature-settings: normal;
  font-variant-ligatures: normal;
  font-variant-caps: normal;
  font-variant-numeric: normal;
  font-weight: 400;
  font-stretch: normal;
  font-size: 24rpx;
  line-height: 1;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, 微软雅黑, Arial, sans-serif;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-font-smoothing: antialiased;
  color: #333;
  user-select: none;
  margin: 0;
  padding: 0;
  position: relative;

  .collapse-item__title {
    font-style: normal;
    font-feature-settings: normal;
    font-variant-ligatures: normal;
    font-variant-caps: normal;
    font-variant-numeric: normal;
    font-weight: 400;
    font-stretch: normal;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, 微软雅黑, Arial, sans-serif;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-font-smoothing: antialiased;
    user-select: none;
    margin: 0;
    position: relative;
    display: flex;
    box-sizing: border-box;
    width: 100%;
    padding: 20rpx 32rpx;
    overflow: hidden;
    color: #323233;
    font-size: 28rpx;
    line-height: 48rpx;
    background-color: #fff;
    cursor: pointer;

    .cell__title {
      font-style: normal;
      font-feature-settings: normal;
      font-variant-ligatures: normal;
      font-variant-caps: normal;
      font-variant-numeric: normal;
      font-weight: 400;
      font-stretch: normal;
      font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, 微软雅黑, Arial,
        sans-serif;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-font-smoothing: antialiased;
      user-select: none;
      color: #323233;
      font-size: 28rpx;
      line-height: 48rpx;
      cursor: pointer;
      margin: 0;
      padding: 0;
      -webkit-box-flex: 1;
      flex: 1;

      .cell__label {
        font-style: normal;
        font-feature-settings: normal;
        font-variant-ligatures: normal;
        font-variant-caps: normal;
        font-variant-numeric: normal;
        font-weight: 400;
        font-stretch: normal;
        font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, 微软雅黑, Arial,
          sans-serif;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-font-smoothing: antialiased;
        user-select: none;
        cursor: pointer;
        margin: 0;
        padding: 0;
        margin-top: 8rpx;
        color: #969799;
        font-size: 24rpx;
        line-height: 36rpx;
      }
    }

    .cell__value {
      font-style: normal;
      font-feature-settings: normal;
      font-variant-ligatures: normal;
      font-variant-caps: normal;
      font-variant-numeric: normal;
      font-weight: 400;
      font-stretch: normal;
      font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, 微软雅黑, Arial,
        sans-serif;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-font-smoothing: antialiased;
      user-select: none;
      font-size: 28rpx;
      line-height: 48rpx;
      cursor: pointer;
      margin: 0;
      padding: 0;
      -webkit-box-flex: 1;
      flex: 1;
      position: relative;
      overflow: hidden;
      color: #969799;
      text-align: right;
      vertical-align: middle;
    }

    .arrow-icon {
      margin-left: 8rpx;
      color: #969799;
      // transition: transform 0.3s ease-in-out;
      &.arrowup {
        transform: rotate(-180deg);
      }
    }
  }

  .collapse-item__wrapper {
    font-style: normal;
    font-feature-settings: normal;
    font-variant-ligatures: normal;
    font-variant-caps: normal;
    font-variant-numeric: normal;
    font-weight: 400;
    font-stretch: normal;
    font-size: 24rpx;
    line-height: 1;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, 微软雅黑, Arial, sans-serif;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-font-smoothing: antialiased;
    color: #333;
    user-select: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    transition: height 0.3s ease-in-out;
    will-change: height;
  }
}
</style>
