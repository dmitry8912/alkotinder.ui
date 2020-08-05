import { ActionTree } from 'vuex'
import { StoreInterface } from '../index'
import { UserDataInterface } from '../entities/UserData'
import { LocalStorage, openURL, Loading } from 'quasar'
import axios from 'axios'
import getters from "src/store/settings/getters"
import { api, websockethost } from 'src/config/config'
import Echo from 'laravel-echo'
declare const window: any
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
  setAvatar ({ commit, dispatch }, payload): void {
    commit('setAvatar', payload)
    dispatch('saveData')
  },
  setDailyTarget ({ commit, dispatch }, payload): void {
    commit('setDailyTarget', payload)
    dispatch('saveData')
  },
  getStateToken ({ commit, dispatch, state }): void {
    Loading.show()
    window.io = require('socket.io-client')
    window.echo = new Echo({
      broadcaster: 'socket.io',
      host: websockethost
    })
    window.echo.channel('laravel_database_auth')
      .listen('.authBroadcaster', (data: { token: string }) => {
        if (data.token === state.deviceUid) {
          dispatch('getApiToken')
        }
      })
    axios.get(api + 'login/google/device/' + this.state.settings.deviceUid)
      .then(response => {
        commit('setStateToken', response.data.state)
        openURL(response.data.url)
        Loading.hide()
      })
      .catch((e) => {
        console.error(e)
        Loading.hide()
      })
  },
  getApiToken ({ commit, dispatch }): void {
    axios.get(api + 'api/token/' + this.state.settings.stateToken)
      .then(response => {
        commit('setApiToken', response.data.token)
        dispatch('saveData')
        dispatch('getSettings')
      })
      .catch((e) => {
        console.error(e)
        Loading.hide()
      })
  },
  clearApiToken ({ commit, dispatch }): void {
    commit('clearApiToken')
    dispatch('saveData')
  },
  saveData ({ state, getters }) {
    LocalStorage.set('settings', state)
    if (getters.isLoggedIn) {
      axios.put(api + 'api/settings', {
        nickname: state.nickname,
        sex: state.sex,
        weight: state.weight,
        dailyTarget: state.dailyTarget
      }, {
        headers: { Authorization: `Bearer ${state.apiToken}` }
      })
        .catch((e) => {
          console.error(e)
          Loading.hide()
        })
    }
  },
  getSettings: function ({ state, commit, dispatch }) {
    const data: UserDataInterface | null = LocalStorage.getItem('settings')
    commit('setData', data)
    if ((getters as any).isLoggedIn(state)) {
      Loading.show()
      axios.get(api + 'api/settings', { headers: { Authorization: `Bearer ${state.apiToken}` } })
        .then(response => {
          data!.nickname = response.data.name
          data!.email = response.data.email
          data!.weight = response.data.settings.weight
          data!.sex = response.data.settings.sex
          data!.dailyTarget = response.data.settings.dailyTarget
          data!.avatar = response.data.avatar
          commit('setData', data)
          dispatch('saveData')
          Loading.hide()
        })
        .catch((e) => {
          console.error(e)
          Loading.hide()
        })
    }
  }
}

export default actions
