import {
  SHOW_LOGIN,
  HIDE_LOGIN,
  TOGGLE_MODE,
  TOGGLE_MODE_TEXT,
  TO_SUN,
  TO_YUE,
  LOGIN_STATE,
  ACCOUNT_UID,
  SET_LOAD,
  RETURN_LOAD,
  SET_LINK_PAGE,
  SET_PLAY_SATE,
  SET_FULL_SCREEN,
  SET_AUDIO_LIST,
  SET_AUDIO_INDEX,
  SET_PLAY_LIST,
  SET_AUDIO_MODE,
  SET_PLAYING_SHOW,
  SET_LEVEL
} from './mutation-types'

/*   SET_PLAY_SATE,
  SET_FULL_SCREEN,
  SET_AUDIO_LIST,
  SET_AUDIO_INDEX,
  SET_AUDIO_MODE,
  SET_PLAY_LIST */

export default {
  /**
   * 设置播放状态
   * @param {*} state state数据
   * @param {*} flag 播放状态
   */
  [SET_PLAY_SATE] (state, flag) {
    state.playState = flag
  },
  /**
   * 设置播放器大小
   */
  [SET_FULL_SCREEN] (state, flag) {
    state.fullScreen = flag
  },
  /**
   * 设置播放列表信息
   */
  [SET_AUDIO_LIST] (state, list) {
    state.audioList = list
  },
  // 设置索引
  [SET_AUDIO_INDEX] (state, index) {
    state.audioIngIndex = index
  },
  /**
   * 设置当前播放列表
   */
  [SET_PLAY_LIST] (state, list) {
    state.playList = list
  },
  /**
   * 设置当前播放模式
   * @param {*} state state数据
   * @param {*} mode 模式索引
   */
  [SET_AUDIO_MODE] (state, mode) {
    state.mode = mode
  }
}
