<template>
  <div>
    <van-search v-model="value"
                show-action
                placeholder="请输入搜索关键词"
                @search="onSearch"
                :background="bgColor"
                shape="round"
                @cancel="onCancel">
      <template #action>
        <div>
          <div class="right">
            <span class="iconfont icon-dkw_xiaoxi"></span>
            <span>消息</span>
          </div>
        </div>
      </template>
    </van-search>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: ''
    }
  },
  props: {
    bgColor: {
      type: String,
      default: '#ff2b22'
    }
  },
  methods: {
    onSearch (val) {
      this.$emit('search', val)
      console.log(val)
    },
    onCancel () {
      this.$toast('取消')
    }
  }
}
</script>

<style lang="scss" scoped>
.right {
  display: flex;
  flex-direction: column;
  color: #fff;
  padding: 0;
  font-size: 13px;
  line-height: 20px;
  align-items: center;
  justify-content: space-between;
}
</style>
