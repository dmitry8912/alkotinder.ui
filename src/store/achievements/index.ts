import { Module } from 'vuex'
import { StoreInterface } from '../index'
import state from './state'
import { AchievementsInterface } from '../entities/Achievements'
import getters from './getters'

const module: Module<AchievementsInterface, StoreInterface> = {
  namespaced: true,
  state,
  getters
}

export default module
