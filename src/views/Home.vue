<template>
  <div class="home-container">
    <my-menu :menu='menuList'
             :color='color'
             @jump='jumpbyid'></my-menu>
    <recommend :recommend='recommendList'
               :color='color'></recommend>
    <div>{{color}}</div>
  </div>
</template>

<script>
import * as api from 'api/home'
import Menu from 'components/home/menu'
import Recommend from 'components/home/recommend'
import { mapGetters } from 'vuex'
export default {
  components: {
    MyMenu: Menu,
    Recommend
  },
  data () {
    return {
      menuList: [],
      recommendList: []
    }
  },
  computed: {
    ...mapGetters(['color'])
  },
  created () {
    this.getMenu()
    this.getRecommend()
  },
  mounted () {

  },
  methods: {
    async getMenu () {
      const { data: res } = await api.getMenu()
      this.menuList = res
      console.log({ menuList: this.menuList })
    },
    async getRecommend () {
      const { data: res } = await api.getRecommend()
      this.recommendList = res.config
      console.log({ recomend: this.recommendList })
    },
    jumpbyid (id) {
      console.log('跳转到：', id)
    }
  }
}
</script>
<style lang="scss" scoped>
.home-container {
  height: 1900px;
}
</style>
