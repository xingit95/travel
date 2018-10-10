<template>
<div>
  <div class="banner" @click="handleBannerClick">
    <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/201403/07/725e17daa38951b426361427fade78ba.jpg_600x330_8e7e27db.jpg" alt="">
    <div class="banner-info">
      <div class="banner-title">新会古兜温泉旅游度假村(AAAA景区)</div>
      <div class="banner-number">
        <span class="iconfont banner-icon">&#xe67b;</span>
        24
      </div>
    </div>
  </div>
  <common-gallery :imgs="imgs" v-show="showGallery" @close="handleGalleryClose"></common-gallery>
</div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallery: false,
      imgs: [
        'http://img1.qunarzz.com/sight/p0/1603/73/73eb4b1a0048bbaf90.water.jpg_r_800x800_ead30b2c.jpg',
        'http://img1.qunarzz.com/sight/p0/201403/07/028b5748603dc0cceb693c5debd7319b.jpg_r_800x800_8e7ea93e.jpg',
        'http://img1.qunarzz.com/sight/p0/201403/07/fa29e73d629927fb4b3e5fa2cefa1c35.jpg_r_800x800_2fbc3ea9.jpg',
        'http://img1.qunarzz.com/sight/p0/201403/07/f63e3a7ac7fd87fff2a72e3b769dea8f.jpg_r_800x800_0454015a.jpg',
        'http://img1.qunarzz.com/sight/p0/201403/07/3595c1c0ace1e83208c4694f21eff295.jpg_r_800x800_9aea5c5e.jpg'
      ]
    }
  },
  components: {
    CommonGallery
  },
  methods: {
    handleBannerClick () {
      this.showGallery = true
    },
    handleGalleryClose () {
      this.showGallery = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      position absolute
      display flex
      bottom 0
      left 0
      right 0
      line-height .6rem
      background-image linear-gradient(to bottom, rgba(0,0,0,0),rgba(0,0,0,.8))
      color #fff
      .banner-title
        flex 1
        padding 0 .2rem
        font-size .32rem
      .banner-number
        height .32rem
        line-height .32rem
        margin-top .14rem
        padding 0 .4rem
        border-radius .2rem
        background-color rgba(0, 0, 0, .8)
        font-size .24rem
        .banner-icon
          font-size .24rem
</style>
