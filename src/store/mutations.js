import * as types from './mutation-types'
const mutations = {
  [types.SET_COLOR] (state, color) {
    state.color = color
  }
}
export default mutations
