<template>
  <view class="search-list">
    <uni-search-bar @confirm="onRefresh" @input="searchInput" placeholder="请输入要搜索的标题"></uni-search-bar>
    <view class="search-result-block"
      ><text>搜索到{{ count }}条结果</text></view
    >
    <scroll-view scroll-y="true" class="scroll-Y" @scrolltolower="onLoad2">
      <collapse>
        <collapse-item
          v-for="item in list"
          :key="item.id"
          :value="item[collapseItemValueKey]"
          :label="getCollapseItemLabelFunc ? getCollapseItemLabelFunc(item) : undefined"
        >
          <template #title>
            <div class="col-title-block">
              {{ item[collapseItemTitleKey] }}
              <uni-icons
                v-if="!hideCollapseItemIco"
                type="eye"
                size="30"
                color="#1989fa"
                @click="$emit('collapseItemIconClick', item)"
              ></uni-icons>
            </div>
          </template>

          <uni-list>
            <uni-list-item
              v-for="key in Object.keys(colAttrs)"
              :key="key"
              :title="colAttrs[key]"
              :rightText="item[key]"
              :showArrow="false"
            ></uni-list-item>
          </uni-list>
        </collapse-item>
      </collapse>

      <uni-load-more :status="loadMoreStatus" iconType="snow"></uni-load-more>
    </scroll-view>
  </view>
</template>

<script>
import collapse from './collapse'
import collapseItem from './collapseItem'
import { uniSearchBar, uniIcons, uniLoadMore, uniList, uniListItem } from '@dcloudio/uni-ui'

export default {
  name: 'searchList',
  props: [
    'collapseItemValueKey',
    'collapseItemTitleKey',
    'requestData',
    'colAttrs',
    'getCollapseItemLabelFunc',
    'hideCollapseItemIco',
  ],
  components: { collapse, collapseItem, uniSearchBar, uniIcons, uniLoadMore, uniList, uniListItem },
  created() {
    this.onLoad2()
  },
  data() {
    return {
      activeNames: [],
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
      offset: 0,
      count: 0,
      limit: 20,
      searchValue: '',
    }
  },
  methods: {
    searchInput(e) {
      this.searchValue = e
    },
    onLoad2(callback) {
      if (this.finished) return false
      this.loading = true
      this.requestData({
        // [this.collapseItemTitleKey]: this.searchValue,
        offset: this.offset,
        limit: this.limit,
      }).then((res) => {
        if (this.refreshing) {
          this.refreshing = false
        }

        if (this.offset <= 0) {
          this.list = res.data.rows
        } else {
          this.list = this.list.concat(res.data.rows)
        }
        this.count = res.data.count

        this.loading = false
        this.offset += this.limit
        if (res.data.count < this.offset) {
          this.finished = true
        }

        typeof callback === 'function' && callback()
      })
    },
    onRefresh() {
      this.finished = false
      this.offset = 0
      this.onLoad2(function () {
        uni.stopPullDownRefresh()
      })
    },
  },
  computed: {
    loadMoreStatus() {
      if (this.finished) return 'moMore'
      if (this.loading) return 'loading'
      return 'more'
    },
  },
}
</script>

<style lang="scss" scoped>
.search-list {
  background: #f5f5f5;

  .uni-searchbar {
    background: #fff;
  }
  .scroll-Y {
    height: calc(100vh - 104rpx - 64rpx);
  }

  .search-result-block {
    color: #999;
    padding: 10px 30rpx 10px;
    border-bottom: 1rpx solid #ebedf0;
    font-size: 20rpx;
  }

  .col-title-block {
    display: flex;
    align-items: center;

    .uni-icons {
      margin-left: 12rpx;
      color: #1989fa;
    }
  }

  .uni-list {
    padding-left: 30rpx;
  }
}
</style>
