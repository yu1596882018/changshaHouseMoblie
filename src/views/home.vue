<template>
  <div class="home">
    <!-- 功能导航网格 -->
    <van-grid clickable :column-num="2">
      <van-grid-item icon="home-o" text="楼盘列表" to="/houseInfoList" />
      <van-grid-item icon="search" text="楼盘搜索" to="/houseSearch" />
    </van-grid>

    <!-- ICP备案信息 -->
    <a
      class="link-icp"
      href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=2022009826"
      target="_blank"
      rel="noopener"
    >
      湘ICP备2022009826号-1
    </a>
  </div>
</template>

<script>
/**
 * 首页组件
 * @description 应用首页，提供主要功能入口
 */
export default {
  name: 'Home',

  data() {
    return {
      // 页面数据
    }
  },

  created() {
    // 组件创建时的初始化逻辑
  },

  methods: {
    // 页面方法
  },
}
</script>

<style lang="scss" scoped>
.home {
  padding: 20px;
  min-height: 100vh;
  background-color: #f7f8fa;
}

.link-icp {
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  color: #969799;
  text-decoration: none;
  font-size: 12px;

  &:hover {
    color: #646566;
  }
}
</style>
