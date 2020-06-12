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
  setDailyTarget (state, payload): void {
    state.dailyTarget = payload
  },
  setData (state, payload) {
    Object.assign(state, payload)
  }
}

export default mutation
