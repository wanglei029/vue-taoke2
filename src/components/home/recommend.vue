<template>
  <div class="banner-container">
    <div class="swipe">
      <van-swipe class="my-swipe"
                 @change="onChange"
                 :autoplay="3000"
                 indicator-color="white">
        <van-swipe-item v-for="item in recommend"
                        :key="item.id">
          <img width="100%"
               :src="item.pic" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div ref="bannerColor"
         class="banner-color"></div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: {
    recommend: {
      type: Array,
      default: null
    },
    color: {
      type: String,
      default: ''
    }
  },
  mounted () {
    // window.addEventListener('scroll', () => { console.log('scroll') }, true)
  },
  methods: {
    onChange (index) {
      const scrollTop = document.documentElement.scrollTop
      console.log(scrollTop)
      if (scrollTop < 140) {
        console.log(this.recommend[index].bannerColor)
        this.setColor(this.recommend[index].bannerColor)
      }
    },
    ...mapMutations({
      setColor: 'SET_COLOR'
    })
  },
  watch: {
    color () {
      this.$refs.bannerColor.style.backgroundColor = this.color
    }
  }
}
</script>

<style lang="scss" scoped>
.banner-container {
  position: relative;
  top: 89px;
  height: 0;
  overflow: hidden;
  padding-bottom: 37.3333%;
  .banner-color {
    width: 100%;
    height: 0;
    padding-bottom: 24%;
    overflow: hidden;
    background: red;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  .swipe {
    position: absolute;
    top: 0;
    left: 2%;
    width: 96%;
    height: 0;
    padding-bottom: 37.3336%;
    overflow: hidden;
    border-radius: 10px;
    img {
      width: 100%;
    }
  }
}
</style>
