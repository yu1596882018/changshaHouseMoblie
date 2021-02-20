<template>
  <div class="home">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list class="case-list" v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-collapse v-model="activeNames">
          <van-collapse-item
            :name="item.id"
            v-for="item in list"
            :key="item.id"
            :value="item.c"
            :label="`可售${item.l}、已售${item.k}`"
          >
            <template #title>
              <div class="col-title-block">
                {{ item.b }}
                <van-icon size="2em" name="eye-o" @click="toHouseChildrenInfo($route.query.id + '_' + item.i)" />
              </div>
            </template>

            <van-cell v-for="key in Object.keys(colAttrs)" :key="key" :title="colAttrs[key]">{{ item[key] }}</van-cell>
          </van-collapse-item>
        </van-collapse>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  components: {},
  created() {},
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
    toHouseChildrenInfo(id) {
      this.$router.push({
        path: '/houseChildrenInfo',
        query: {
          id,
        },
      })
    },
    onLoad() {
      this.$services
        .getHouseChildren(this.$route.query.id, {
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

<style lang="scss">
.col-title-block {
  display: flex;
  align-items: center;

  .van-icon {
    margin-left: 6px;
    color: #1989fa;
  }
}
</style>
