<template>
  <div class="wrapper">
    <!-- list.length用于初始化时候防止空数组初始化，导致页面异常 -->
    <swiper :options="swiperOption" v-if="list.length">
      <swiper-slide v-for="item of list" :key="item.id">
        <img :src="item.imgUrl" class="swiper-img">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1808/9c/2415caaa7d469002.jpg_890x330_9558dbc4.jpg'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/cf/635b32c6ad0a1a02.jpg_890x330_c6f620c8.jpg'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1808/2f/6fdf238bc5b2302.jpg_890x330_ba39283c.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  overflow hidden
  height 0
  width 100%
  padding-bottom 31.25%
  background #eee
  // 深度作用选择器
  >>> .swiper-pagination-bullet-active
    background #fff !important
  .swiper-img
    width 100%
</style>
