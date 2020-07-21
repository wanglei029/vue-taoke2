<template>
  <div class="container">
    <div class="horizontal-container"
         ref='menuRef'>
      <router-link tag="div"
                   to="/home"
                   class="left">精选</router-link>
      <div class="scroll-wrapper"
           ref="scroll">
        <div class="scroll-content">
          <div class="scroll-item"
               v-for="item in menu"
               @click="jumpbyid(item.id)"
               :key="item.id">{{item.name}}</div>
        </div>
      </div>
      <div class="right iconfont icon-caidan2"
           @click="showList"></div>
    </div>
    <div class="menulist"
         v-if="showflag">
      <div class="top">
        <span>选择分类</span>
        <span class="iconfont icon-up2"
              @click="showList"></span>
      </div>
      <div class="down">
        <div v-for="item in menu"
             class="item"
             @click="jumpbyid(item.id)"
             :key="item.id">
          <img :src="item.img1">
          <span>{{item.name}}</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'

export default {
  props: {
    menu: {
      type: Array,
      default: null
    },
    color: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      showflag: false
    }
  },
  beforeDestroy () {
    this.bs.destroy()
  },
  methods: {
    jumpbyid (id) {
      this.$emit('jump', id)
    },
    showList () {
      console.log('加载更多')
      this.showflag = !this.showflag
    },
    init () {
      this.bs = new BScroll(this.$refs.scroll, {
        scrollX: true,
        probeType: 3 // listening scroll hook
      })
      this._registerHooks(['scroll', 'scrollEnd'], (pos) => {
        console.log('done', pos)
      })
    },
    _registerHooks (hookNames, handler) {
      hookNames.forEach((name) => {
        this.bs.on(name, handler)
      })
    }
  },
  watch: {
    menu (val) {
      this.$nextTick(() => {
        this.init()
        this.bs.refresh()
      })
      console.log(val)
    },
    color () {
      this.$refs.menuRef.style.backgroundColor = this.color
      console.log(this.color)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.container {
  position: fixed;
  top: 60px;
  z-index: 100;

  .horizontal-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    background: #ff2b2c;
    color: #fff;
    white-space: nowrap;
    box-sizing: border-box;
    padding: 0 8px;

    .scroll-wrapper {
      color: rgba(#fff, 0.65);
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      margin: 0 8px;

      .scroll-content {
        display: inline-block;
      }

      .scroll-item {
        height: 30px;
        line-height: 30px;
        font-size: 14px;
        display: inline-block;
        text-align: center;
        padding: 0 8px;
      }
    }
  }

  .menulist {
    position: fixed;
    top: 60px;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.1);
    z-index: 100;

    .top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 14px;
      background: #fff;
      height: 30px;
      line-height: 30px;
      padding: 0 8px;
    }

    .down {
      display: flex;
      flex-flow: row wrap;
      background: #fff;
      font-size: 14px;
      align-items: center;
      padding: 15px 0;

      .item {
        width: 25%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-flow: column nowrap;
        padding: 10px 0;
        color: rgba(0, 0, 0, 0.6);

        img {
          width: 80%;
        }
      }
    }
  }
}
</style>
