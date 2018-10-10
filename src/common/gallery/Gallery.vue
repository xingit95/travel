<template>
  <div class="container" @click="handleGalleryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item,index) of imgs" :key="index">
          <!-- <img class="gallery-img" src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg" alt=""> -->
          <div class="gallery-img" :style="{backgroundImage:'url('+item+')'}">
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallery',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        effect: 'coverflow',
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    handleGalleryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container
    position fixed
    z-index 99
    // display flex
    // flex-direction column
    // justify-content center
    top 0
    bottom 0
    left 0
    right 0
    background-color #000
    .wrapper
      // overflow hidden
      // height 0
      // width 100%
      // padding-bottom 1%
      // height 100%
      // background-color #fff
      .gallery-img
        width 100vw
        height 100vh
        background-repeat no-repeat
        background-size contain
        background-position center
        // background-color #fff
      .swiper-pagination
        color #fff
        bottom .4rem
</style>
