<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <i class="iconfont header-abs-back">&#xe624;</i>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link tag="i" to="/" class="iconfont header-fixed-back">&#xe624;</router-link>
      新会古兜温泉旅游度假村
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
        this.showAbs = false
        // console.log(top)
      } else {
        this.showAbs = true
      }
      // console.log(document.documentElement.scrollTop)
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variable.styl'
  .header-abs
    position absolute
    top .2rem
    left .2rem
    width .8rem
    height .8rem
    line-height .8rem
    border-radius .4rem
    background-color rgba(0, 0, 0, .5)
    text-align center
    .header-abs-back
      color #fff
      font-size .4rem
  .header-fixed
    position fixed
    top 0
    left 0
    right 0
    height $headerHeight
    line-height $headerHeight
    background-color $bgColor
    color #fff
    text-align center
    font-size .32rem
    .header-fixed-back
      position absolute
      left 0
      top 0
      width .64rem
      text-align center
</style>
