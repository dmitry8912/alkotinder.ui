import { ActionTree } from 'vuex'
import { StoreInterface } from '../index'
import { UserDataInterface } from '../entities/UserData'
import { LocalStorage } from 'quasar'
const actions: ActionTree<UserDataInterface, StoreInterface> = {
  setNickname ({ commit, dispatch }, payload): void {
    commit('setNickname', payload)
    dispatch('saveData')
  },
  setSex ({ commit, dispatch }, payload): void {
    commit('setSex', payload)
    dispatch('saveData')
  },
  setWeight ({ commit, dispatch }, payload): void {
    commit('setWeight', payload)
    dispatch('saveData')
  },
  setDailyTarget ({ commit, dispatch }, payload): void {
    commit('setDailyTarget', payload)
    dispatch('saveData')
  },
  saveData ({ state }) {
    LocalStorage.set('settings', state)
  },
  getSettings ({ commit }) {
    const data = LocalStorage.getItem('settings')
    if (data) {
      commit('setData', data)
    }
  }
}

export default actions
