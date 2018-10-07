<template>
  <div>
    <div class="search">
      <input v-model="keyword" type="text" class="search-input" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item of List"
          :key="item.id"
          @click="handleClickCity(item.name)"
        >{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      List: [],
      timer: null
    }
  },
  computed: {
    hasData () {
      return !this.List.length
    }
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
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.List = []
        return
      }
      setTimeout(() => {
        const result = []
        for (const key in this.cities) {
          this.cities[key].forEach((value) => {
            const nameIndex = value.name.indexOf(this.keyword)
            const spellIndex = value.spell.indexOf(this.keyword)
            if (nameIndex > -1 || spellIndex > -1) {
              if (nameIndex === 0 || spellIndex === 0) {
                result.unshift(value)
              } else {
                result.push(value)
              }
            }
          })
        }
        // console.log(result)
        this.List = result
        // console.log(this.List)
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variable.styl'
  .search
    height .72rem
    padding 0 .1rem
    background-color $bgColor
    .search-input
      box-sizing border-box
      width 100%
      height .62rem
      padding 0 .1rem
      line-height .62rem
      border-radius .06rem
      text-align center
      color #666
  .search-content
    position absolute
    top 1.58rem
    bottom 0
    left 0
    right 0
    z-index 1
    overflow hidden
    // margin 0 .5rem
    background-color #eee
    .search-item
      line-height .62rem
      padding-left .2rem
      background-color #fff
      color #666
</style>
