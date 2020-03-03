import axios from 'axios'

import {
  bannerSwiper,
  personalFm,
  recSongList,
  newSongs,
  newDish
} from './config'

// 请求超时时间
axios.defaults.timeout = 3000

// post 请求头
axios.defaults.headers.post['Content-type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

export default {
  // 请求发现首页轮播图
  bannerSwiperFn () {
    return axios.get(bannerSwiper)
  },
  // 获取私人FM
  // 需要登录
  personalFmFn () {
    return axios.get(personalFm)
  },
  /**
   * 请求 可获取推荐歌单
   * ?limit=10&order=hot
   * @param {*} limit 取出数量,默认是30
   * @param {*} order 分别对应最新和最热,可选值为 'new' 和 'hot'
   * @param {*} cat tag,比如 "华语","古风","欧美"
   */
  recSongListFn (limit = 30, order = 'hot', cat) {
    return axios.get(recSongList, {
      params: {
        limit,
        order,
        cat
      }
    })
  },
  /**
   * 调用此接口 , 可获取新歌速递
   * @param {*} type 地区类型 id,对应以下:
   * 全部:0 华语:7 欧美:96 日本:8 韩国:16
   */
  newSongsFn (type = 0) {
    return axios.get(newSongs, {
      params: {
        type
      }
    })
  },
  /**
   * 调用此接口 , 可获取新碟上架列表
   * @param {*} limit 取出数量 , 默认为 50
   * @param {*} offset 偏移数量 , 用于分页
   *  如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0
   */
  newDishFn (limit = 10, offset) {
    return axios.get(newDish, {
      params: {
        limit,
        offset
      }
    })
  }
}
