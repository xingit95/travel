<template>
  <div>
    <div class="title">周末去哪玩</div>
    <ul>
      <li
        v-for="oneRecommend of recommendList"
        :key="oneRecommend.id"
      >
        <div class="item-img-wrapper">
          <img
            class="item-img"
            :src="oneRecommend.imgUrl"
          >
        </div>
        <div class="item-info">
          <p class="item-title">{{oneRecommend.title}}</p>
          <p class="item-desc">{{oneRecommend.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/92/580e9ea4f37a1b.jpg_r_640x214_72112761.jpg',
        title: '广州必游TOP10',
        desc: '感受现代与传统相融合的广州'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1606/88/56f7f4bd0493fe.jpg_r_640x214_f8c0994a.jpg',
        title: '签到广州长隆',
        desc: '来广州来长隆，就对了，就够了~'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/ec/902725c4d56517.jpg_r_640x214_7a74d251.jpg',
        title: '羊城民俗风情游',
        desc: '品味羊城文化，感受羊城别样风情'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
  .title
    margin-top .2rem
    line-height .8rem
    background-color #eee
    text-indent .2rem
  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 33.9%
    .item-img
      width 100%
  .item-info
    padding .05rem .2rem .2rem
    .item-title
      line-height .54rem
      font-size .32rem
      ellipsis()
    .item-desc
      line-height .4rem
      color #ccc
      ellipsis()
</style>
