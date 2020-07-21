<template>
  <div class="container">
    <van-search v-model="value"
                show-action
                placeholder="请输入搜索关键词"
                @search="onSearch"
                :background="color"
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
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      value: ''
    }
  },
  computed: {
    ...mapGetters(['color'])
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
.container {
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
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
}
</style>
