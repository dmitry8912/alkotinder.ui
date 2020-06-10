import { ActionTree } from 'vuex'
import { StoreInterface } from '../index'
import { AchievementsInterface } from '../entities/Achievements'

const actions: ActionTree<AchievementsInterface, StoreInterface> = {
  addToProgress ({ commit }, payload) {
    commit('addToProgress', payload)
  }
}

export default actions
