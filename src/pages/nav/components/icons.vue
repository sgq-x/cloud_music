<template>
  <div class="container border-bottom">
    <icon
      v-for="(item,index) in findIcons"
      :icons="item"
      :bgcolor="true"
      :key="index"
      @goPage="goPage(item.linkTo)"
    >
      <span class="today" v-if="item.text === '每日推荐'"></span>
    </icon>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import {findIcons} from 'getInfos/getData'
import icon from 'base/icon'
import api from 'api'

export default {
  name: 'findIcon',
  data () {
    return {
      findIcons
    }
  },
  components: {
    icon
  },
  computed: {
    today: function () {
      return new Date().getDate()
    }
  },
  mounted () {
    this.initData()
  },
  methods: {
    initData () {
      this.findIcons = findIcons()
    },
    goPage (link) {
      if (link === 'persolFm') {
        // 当如果是点击私人fm时需要做的操作
        // 获取私人fm信息
        this._getPersonalFm()
      } else {
        // 正常的是点击图标跳转
        this.$router.push(link)
      }
    },
    // 播放全部
    startPlay (list) {
      this.startPayAll({
        list
      })
    },
    _getPersonalFm () {
      api.peronalFm()
        .then(res => {
          const data = res.data
          if (data.code === 200) {
            const list = data.data
            // 将信息传到播放页面进行播放
            this.startPlay(list)
          }
        })
    },
    ...mapActions(['startPlayAll'])
  }
}
</script>

<style>

</style>
