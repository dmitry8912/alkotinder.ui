import { Module } from 'vuex'
import { StoreInterface } from '../index'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import { ReferencesInterface } from "src/store/entities/References"

const module: Module<ReferencesInterface, StoreInterface> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

export default module
