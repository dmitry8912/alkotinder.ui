import { Module } from 'vuex'
import { StoreInterface } from '../index'
import state from './state'
import { FriendsInterface } from '../entities/Friends'

const module: Module<FriendsInterface, StoreInterface> = {
  namespaced: true,
  state
}

export default module
