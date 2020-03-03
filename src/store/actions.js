import {
  SET_PLAY_SATE,
  SET_FULL_SCREEN,
  SET_AUDIO_LIST,
  SET_AUDIO_INDEX,
  SET_AUDIO_MODE,
  SET_PLAY_LIST
} from './mutation-types'

function findIndex (list, song) {
  return list.findIndex(item => {
    return item.id === song.id
  })
}
export default {
  /**
   * 播放全部
   * 传入播放列表
   */
  startPlayAll ({commit}, {list}) {
    commit(SET_AUDIO_LIST, list)
    commit(SET_AUDIO_INDEX, 0)
    commit(SET_PLAY_LIST, list)
    commit(SET_PLAY_SATE, true)
    commit(SET_FULL_SCREEN, true)
    commit(SET_AUDIO_MODE, 0)
  },
  /**
   * 香播放列表添加歌曲
   * 当播放列表为空时添加后开始播放
   */
  addToAudioList ({
    commit,
    state
  }, song) {
    let audioList = state.audioList
    let playList = state.playList
    let currentIndex = state.audioIngIndex
    // 记录当前歌曲
    let audioIng = audioList[currentIndex]
    // 查找当前列表中是否有要插入的歌曲,并返回它的索引
    let findAudioIndex = findIndex(audioList, song)
    // 因为是插入歌曲，所以索引要+1
    currentIndex++
    // 插入这首歌到当前索引位置
    audioList.splice(currentIndex, 0, song)
    // 如果已经有了这首歌
    if (findAudioIndex > -1) {
      // 如果当前插入序号大于列表中的序号
      if (currentIndex > findAudioIndex) {
        audioList.splice(findAudioIndex, 1)
        currentIndex--
      } else {
        audioList.splice(currentIndex + 1, 1)
      }
    }

    let currentPlayIndex = findIndex(playList, audioIng) + 1

    let findPlayIndex = findIndex(playList, song)

    playList.splice(currentPlayIndex, 0, song)

    if (findPlayIndex > -1) {
      if (currentPlayIndex > findPlayIndex) {
        playList.splice(findPlayIndex, 1)
      } else {
        playList.splice(findPlayIndex + 1, 1)
      }
    }
    commit(SET_AUDIO_INDEX, currentIndex)
    commit(SET_PLAY_SATE, true)
  }
}
