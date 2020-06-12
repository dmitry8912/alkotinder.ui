import { GetterTree } from 'vuex'
import { StoreInterface } from '../index'
import { UserDataInterface } from '../entities/UserData'
import state from './state'

const getters: GetterTree<UserDataInterface, StoreInterface> = {
  dailyTarget (state) {
    return state.dailyTarget
  },
  nickname (state) {
    return state.nickname
  },
  kVidmark (): number {
    return state.sex === 'male' ? 0.7 : 0.6
  }
}

export default getters
