import { ActionTree } from 'vuex'
import { StoreInterface } from '../index'
import { UserDataInterface } from '../entities/UserData'

const actions: ActionTree<UserDataInterface, StoreInterface> = {
  setNickname ({ commit }, payload): void {
    commit('setNickname', payload)
  },
  setSex ({ commit }, payload): void {
    commit('setSex', payload)
  },
  setWeight ({ commit }, payload): void {
    commit('setWeight', payload)
  },
  setDailyTarget ({ commit }, payload): void {
    commit('setDailyTarget', payload)
  }
}

export default actions
