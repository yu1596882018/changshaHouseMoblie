<template>
  <div class="house-search">
    <van-nav-bar title="楼盘数据更新" left-text="返回" left-arrow @click-left="onClickLeft" />

    <van-form ref="searchForm" @submit="onSubmit">
      <van-field
        v-model="username"
        name="yszh"
        label="预售许可证"
        placeholder="请填写预售许可证"
        :rules="[{ required: true, message: '请填写预售许可证' }]"
      />
      <van-field
        v-model="verifyCode"
        name="verify_code"
        label="验证码"
        placeholder="请填写验证码"
        autocomplete="off"
        :rules="[{ required: true, message: '请填写验证码' }]"
      >
        <template #button>
          <img class="code-img" :src="codeImgUrl" @click="switchCodeImg" />
        </template>
      </van-field>
    </van-form>

    <!--<div style="margin: 16px">
      <van-button round block type="info" @click="search1">在已有数据中查询</van-button>
    </div>-->

    <div style="margin: 16px">
      <van-button round block type="info" @click="search2">同步“长沙市住房和城乡建设局”公示数据</van-button>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
import { requestBaseUrl } from '@/config'

export default {
  data() {
    return {
      username: this.$route.query.code || '',
      verifyCode: '',
      codeImgUrl: requestBaseUrl + '/getCodeImg',
      submitType: 0,
    }
  },
  methods: {
    onClickLeft() {
      this.$router.back()
    },
    onSubmit(values) {
      if (this.submitType === 1) {
        this.submitMethod1(values)
      } else if (this.submitType === 2) {
        this.submitMethod2(values)
      }
    },
    submitMethod1(values) {
      this.$services.verifyCode(values).then((res) => {
        console.log(res)
        if (res && res.status !== '1') {
          Toast.fail({
            message: '验证码错误',
          })
          this.switchCodeImg()
        } else {
          this.$services
            .getHouseInfoList({
              v: res.id,
            })
            .then((res2) => {
              console.log(res2)
              if (res2.data.count) {
                this.$router.push({
                  path: '/houseChildren',
                  query: {
                    id: res.id,
                  },
                })
              } else {
                Toast.fail('在已有数据中，没有该楼盘信息，试试爬取网络数据查询吧')
              }
            })
        }
      })
    },
    submitMethod2(values) {
      this.$services.verifyCode(values).then((res) => {
        console.log(res)
        if (res && res.status !== '1') {
          Toast.fail({
            message: '验证码错误',
          })
          this.switchCodeImg()
        } else {
          Toast({
            message: '请耐心等待，这个时间会比较长噢~',
            position: 'bottom',
            duration: 3000,
          })

          this.$services.collectHouseInfo(res.id).then((res2) => {
            console.log(res2)
            if (res2 === 'success') {
              this.$router.push({
                path: '/houseChildren',
                query: {
                  id: res.id,
                },
              })
            } else {
              Toast.fail('查询失败，请稍后再试噢~')
            }
          })
        }
      })
    },
    search1() {
      this.submitType = 1
      this.$refs.searchForm.submit()
    },
    search2() {
      this.submitType = 2
      this.$refs.searchForm.submit()
    },
    switchCodeImg() {
      this.codeImgUrl = requestBaseUrl + '/getCodeImg?v' + Math.random()
    },
  },
}
</script>

<style lang="scss">
.house-search {
  .code-img {
    width: 70px * 1.5;
    height: 28px * 1.5;
  }
}
</style>
