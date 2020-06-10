import { GetterTree } from 'vuex'
import { StoreInterface } from '../index'
import { UserDataInterface } from '../entities/UserData'

const getters: GetterTree<UserDataInterface, StoreInterface> = {
  dailyTarget (state) {
    return state.dailyTarget
  },
  nickname (state) {
    return state.nickname
  }
}

export default getters
