import { ActionTree } from 'vuex'
import { StoreInterface } from '../index'
import { AchievementsInterface } from '../entities/Achievements'
import { LocalStorage } from 'quasar'
const actions: ActionTree<AchievementsInterface, StoreInterface> = {
  addToProgress ({ commit, dispatch }, payload) {
    commit('addToProgress', payload)
    dispatch('saveData')
  },
  saveData ({ state }) {
    LocalStorage.set('achievements', state)
  },
  getAchievements ({ commit }) {
    const data = LocalStorage.getItem('achievements')
    if (data) {
      commit('setData', data)
    }
  }
}

export default actions
