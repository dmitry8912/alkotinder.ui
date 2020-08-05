import { MutationTree } from 'vuex'
import { UserDataInterface } from '../entities/UserData'

const mutation: MutationTree<UserDataInterface> = {
  setNickname (state, payload): void {
    state.nickname = payload
  },
  setSex (state, payload): void {
    state.sex = payload
  },
  setWeight (state, payload): void {
    state.weight = payload
  },
  setAvatar (state, payload): void {
    state.avatar = payload
  },
  setDailyTarget (state, payload): void {
    state.dailyTarget = payload
  },
  setApiToken (state, payload): void {
    state.apiToken = payload
  },
  clearApiToken (state): void {
    state.apiToken = ''
  },
  setStateToken (state, payload): void {
    state.stateToken = payload
  },
  setData (state, payload) {
    Object.assign(state, payload)
  }
}

export default mutation
