<template>
  <div tab-container>
    <van-tabbar v-model="active"
                route>
      <van-tabbar-item replace
                       to="/home"
                       class="iconfont icon-shouye1">首页</van-tabbar-item>
      <van-tabbar-item replace
                       to="/nine"
                       class="iconfont icon-99">9.9包邮</van-tabbar-item>
      <van-tabbar-item replace
                       to="/cate"
                       class="iconfont icon-caidan1">分类</van-tabbar-item>
      <van-tabbar-item replace
                       to="/favourite"
                       class="iconfont icon-shoucang1">收藏</van-tabbar-item>
      <van-tabbar-item replace
                       to="/mine"
                       class="iconfont icon-wode">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'TabBottom',
  data () {
    return {
      active: 0
    }
  },
  created () {
    this.tabIcon()
  },
  methods: {
    // 13: 底部tab 图标
    async tabIcon () {
      const url =
        'http://cmsjapi.ffquan.cn/api/category/product/model-detail-by-model-id-new?entityId=3&modelId=1&proModelId=1&source=3&version=v1&tuserId=1206917&isWechat=0'
      const { data: res } = await this.$axios.get(url)
      // console.log("大家都在领", res.data);
      this.tabicon = res.data.config
      console.log('底部导航图标', this.tabicon)
    }
  }
}
</script>

<style lang="scss" scoped>
.tab-container {
  z-index: 10;
}
::v-deep .van-tabbar-item--active {
  color: rgb(253, 87, 92);
}
.iconfont {
  font-size: 24px;
}
::v-deep .van-tabbar-item__text {
  font-size: 12px;
  color: rgb(102, 102, 102);
}
</style>
