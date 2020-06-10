import { Module } from 'vuex'
import { StoreInterface } from '../index'
import state from './state'
import { UserDataInterface } from '../entities/UserData'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const module: Module<UserDataInterface, StoreInterface> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

export default module
