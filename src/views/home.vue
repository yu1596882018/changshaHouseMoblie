<template>
  <div class="home">
    <van-grid clickable :column-num="2">
      <van-grid-item icon="home-o" text="笔记列表" to="/houseInfoList" />
      <van-grid-item icon="replay" text="笔记数据更新" to="/houseSearch" />
    </van-grid>

    <a class="link-icp" href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=2022009826">
      湘ICP备2022009826号-1
    </a>
  </div>
</template>

<script>
export default {
  components: {},
  created() {},
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.link-icp {
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
