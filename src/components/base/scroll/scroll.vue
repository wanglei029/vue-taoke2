<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from '@better-scroll/core'

export default {
  props: {
    ScrollY: {
      type: Boolean,
      default: true
    },
    ScrollX: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      default: null
    }
  },
  mounted () {
    setTimeout(() => {
      this.init()
      this.bs.refresh()
      console.log('调用refresh')
    }, 200)
  },
  beforeDestroy () {
    this.bs.destroy()
  },
  methods: {
    init () {
      this.bs = new BScroll(this.$refs.wrapper, {
        scrollY: this.scrollY,
        scrollX: this.scrollX,
        click: true,
        probeType: 3, // listening scroll hook
        wheel: true
      })
      this._registerHooks(['scroll', 'scrollEnd'], (pos) => {
        console.log('done', this.bs.scrollY)
      })
      console.log('scroll初始化', this.bs)
    },
    clickHandler (item) {
      alert(item)
    },
    _registerHooks (hookNames, handler) {
      hookNames.forEach((name) => {
        this.bs.on(name, handler)
      })
    },
    refresh () {
      this.bs && this.bs.refresh()
    }
  },
  watch: {
    data () {
      setTimeout(() => {
        this.bs.refresh()
        console.log('watch中 调用了refresh')
      }, 20)
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus"></style>
