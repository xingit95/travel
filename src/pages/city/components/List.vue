<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>

        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item of hot"
            :key="item.id"
            @click="handleClickCity(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div
        class="area"
        v-for="(item,key) of cities"
        :key="key"
        :ref="key"
      >
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleClickCity(innerItem.name)"
          >
            {{innerItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
    // console.log(this.scroll)
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    handleClickCity (city) {
      // 由于数据没有异步操作，直接commit
      // this.$store.dispatch('changeCity', city)
      // this.$store.commit('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl';

.border-topbottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.border-bottom {
  &:after {
    border-color: #ccc;
  }
}
.list
  // 利用position来设置固定宽高
  position absolute
  top 1.58rem
  bottom 0
  right 0
  left 0
  overflow hidden
.title {
  line-height: 0.54rem;
  padding-left: 0.2rem;
  background-color: #f5f5f5;
  font-size: 0.26rem;
  color: #666;
}

.button-list {
  overflow: hidden;
  padding: 0.1rem 0.6rem 0.1rem 0.1rem;

  .button-wrapper {
    float: left;
    width: 33.33%;

    .button {
      padding: 0.1rem 0;
      margin: 0.1rem;
      border: 0.02rem solid #ccc;
      text-align: center;
      border-radius: 0.06rem;
    }
  }
}

.item-list {
  .item {
    line-height: 0.76rem;
    padding-left: 0.2rem;
  }
}
</style>
