import { GetterTree } from 'vuex'
import { StoreInterface } from '../index'
import { UserDataInterface } from '../entities/UserData'
import { api } from 'src/config/config'
import state from './state'

const getters: GetterTree<UserDataInterface, StoreInterface> = {
  dailyTarget (state) {
    return state.dailyTarget
  },
  nickname (state) {
    return state.nickname
  },
  kVidmark (): number {
    return state.sex === 'm' ? 0.7 : 0.6
  },
  isLoggedIn (): boolean {
    return state.apiToken.trim() !== ""
  },
  avatar (): string {
    return api + "storage/images/" + state.avatar
  }
}

export default getters
