<template>
  <div class="home">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list class="case-list" v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-collapse v-model="activeNames">
          <van-collapse-item :name="item.id" v-for="item in list" :title="item.a" :key="item.id" :value="item.i">
            <van-cell v-for="key in Object.keys(colAttrs)" :key="key" :title="colAttrs[key]">{{ item[key] }}</van-cell>
          </van-collapse-item>
        </van-collapse>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  created() {},
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
      activeNames: [],
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
      offset: 0,
      limit: 20,
    }
  },
  methods: {
    onLoad() {
      this.$services
        .getHouseChildrenInfo(this.$route.query.id, {
          offset: this.offset,
          limit: this.limit,
        })
        .then((res) => {
          console.log(res.data)
          if (this.refreshing) {
            this.refreshing = false
          }

          if (this.offset <= 0) {
            this.list = res.data.rows
          } else {
            this.list = this.list.concat(res.data.rows)
          }

          this.loading = false
          this.offset += this.limit
          if (res.data.count < this.offset) {
            this.finished = true
          }
        })
    },
    onRefresh() {
      this.finished = false
      this.loading = true
      this.offset = 0
      this.onLoad()
    },
  },
}
</script>

<style lang="scss"></style>
