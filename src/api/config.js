const api = process.env.NODE_ENV === 'development' ? '/api' : ''

// ============== 发现页面
export const bannerSwiper = api + '/banner?type=1' // 请求发现页面轮播图
export const recSongList = api + '/top/playlist' // 推荐歌单,歌单广场
export const personalFm = api + '/personal_fm' // 发现页私人fm
export const newDish = api + '/top/album' // 发现页新碟
export const newSongs = api + '/top/song' // 发现页新歌
