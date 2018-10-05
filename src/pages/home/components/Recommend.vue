<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li
        class="item"
        v-for="oneRecommend of recommendList"
        :key="oneRecommend.id"
      >
        <img
          class="item-img"
          :src="oneRecommend.imgUrl"
        >
        <div class="item-info">
          <p class="item-title">{{oneRecommend.title}}</p>
          <p class="item-desc">{{oneRecommend.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1809/71/71daa558cbccbb92a3.img.jpg_200x200_133f9dec.jpg',
        title: '长隆野生动物世界',
        desc: '熊猫三胞胎，与您共享欢乐时光'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1809/71/71daa558cbccbb92a3.img.jpg_200x200_133f9dec.jpg',
        title: '长隆野生动物世界',
        desc: '熊猫三胞胎，与您共享欢乐时光'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1809/71/71daa558cbccbb92a3.img.jpg_200x200_133f9dec.jpg',
        title: '长隆野生动物世界',
        desc: '熊猫三胞胎，与您共享欢乐时光'
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
  .item
    overflow hidden
    display flex
    height 1.9rem
    // background-color #ff0
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
      flex 1  //自动撑开剩余空间
      padding .1rem
      min-width 0
      .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()
      .item-desc
        line-height .4rem
        color #ccc
        ellipsis()
      .item-button
        margin-top .16rem
        padding 0 .2rem
        line-height .44rem
        border-radius .06rem
        background-color #ff9300
        color #fff
</style>
