<template>
  <div class="home">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list class="case-list" v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-collapse v-model="activeNames">
          <van-collapse-item :name="item.id" v-for="item in list" :key="item.id" :value="item.t">
            <template #title>
              <div class="col-title-block">
                {{ item.w }}
                <van-icon size="2em" name="eye-o" @click="toHouseChildren(item.v)" />
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
  name: 'Home',
  components: {},
  created() {},
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
    toHouseChildren(id) {
      this.$router.push({
        path: '/houseChildren',
        query: {
          id,
        },
      })
    },
    onLoad() {
      this.$services
        .getHouseInfoList({
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
