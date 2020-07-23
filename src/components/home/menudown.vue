<template>
  <div class="core-container">
    <div class="scroll-wrapper"
         ref="scroll">
      <div class="scroll-content">
        <div class="scroll-item"
             v-for="item in menu"
             :key="item.id"
             @click="clickHandler(item)">
          <img :src="item.img1"
               @load='loadImage'>
          {{item.name}}</div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import BScroll from '@better-scroll/core'

export default {
  props: {
    menu: {
      type: Array,
      default: null
    }
  },
  mounted () {
    this.init()
  },
  beforeDestroy () {
    this.bs.destroy()
  },
  methods: {
    init () {
      this.bs = new BScroll(this.$refs.scroll, {
        scrollY: true,
        click: true,
        probeType: 3, // listening scroll hook
        disableMouse: false,
        disableTouch: false
      })
      // this._registerHooks(['scroll', 'scrollEnd'], (pos) => {
      //   console.log('done')
      // })
    },
    clickHandler (item) {
      alert(item)
    },
    _registerHooks (hookNames, handler) {
      hookNames.forEach((name) => {
        this.bs.on(name, handler)
      })
    },
    loadImage () {
      // console.log('图片加载')
      if (!this.checkloaded) {
        this.checkloaded = true
        this.bs.refresh()
      }
    }
  },
  watch: {
    menu (val) {
      this.$nextTick(() => {
        this.init()
        this.bs.refresh()
      })
      console.log(val)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.core-container {
  // position: relative;
  // top: 120px;
  .scroll-wrapper {
    width: 100%;
    height: 500px;
    overflow: hidden;

    .scroll-content {
      display: flex;
      flex-flow: row wrap;
      background: #fff;
      align-items: center;
      padding: 15px 0;

      // justify-content: space-around;
      .scroll-item {
        width: 25%;
        white-space: nowrap;
        font-size: 14px;
        text-align: center;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        color: rgba(0, 0, 0, 0.8);
        padding: 8px 0;

        img {
          width: 80%;
        }
      }
    }
  }
}
</style>
