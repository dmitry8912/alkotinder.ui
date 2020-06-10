import { Module } from 'vuex'
import { StoreInterface } from '../index'
import state from './state'
import { AchievementsInterface } from '../entities/Achievements'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const module: Module<AchievementsInterface, StoreInterface> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

export default module
