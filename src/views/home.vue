<template>
  <div class="home">
    <van-grid clickable :column-num="2">
      <van-grid-item icon="home-o" text="楼盘列表" to="/houseInfoList" />
      <van-grid-item icon="search" text="楼盘搜索" to="/houseSearch" />
    </van-grid>
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

<style lang="scss"></style>
