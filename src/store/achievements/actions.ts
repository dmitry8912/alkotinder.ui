import { ActionTree } from 'vuex'
import { StoreInterface } from '../index'
import { AchievementsInterface } from '../entities/Achievements'
import { LocalStorage, uid } from 'quasar'
import axios from "app/node_modules/axios"
import { api, websockethost } from 'src/config/config'
import { Loading } from 'app/node_modules/quasar'
import settings from 'src/store/settings/state'
const actions: ActionTree<AchievementsInterface, StoreInterface> = {
  addToProgress ({ commit, dispatch }, payload) {
    payload.uid = uid()
    Loading.show()
    axios.post(api + 'api/progress', payload, {
      headers: { Authorization: `Bearer ${settings.apiToken}` }
    })
      .then(response => {
        commit('addToProgress', payload)
        dispatch('saveData')
        Loading.hide()
      })
      .catch((e) => {
        console.error(e)
        Loading.hide()
      })
  },
  deleteProgress ({ commit, dispatch }, payload) {
    Loading.show()
    axios.delete(api + `api/progress/${payload.uid}`, {
      headers: { Authorization: `Bearer ${settings.apiToken}` }
    })
      .then(response => {
        commit('deleteProgress', payload)
        dispatch('saveData')
        Loading.hide()
      })
      .catch((e) => {
        console.error(e)
        Loading.hide()
      })
  },
  saveData ({ state }) {
    LocalStorage.set('achievements', state)
  },
  getAchievements ({ commit }) {
    LocalStorage.remove('achievements')
    axios.get(api + 'api/progress', {
      headers: { Authorization: `Bearer ${settings.apiToken}` }
    })
      .then(response => {
        for (const key in response.data) {
          let dataPart = response.data[key]
          commit('addToProgress', {
            uid: dataPart.uid,
            date: dataPart.created_at,
            total: dataPart.actual_total,
            drinkName: {
              label: dataPart.actual_drink_name,
              id: dataPart.drink_id,
              value: dataPart.drink_id,
              strong: dataPart.actual_strong
            }
          })
        }
        Loading.hide()

      })
      .catch((e) => {
        console.error(e)
        Loading.hide()
      })
  }
}

export default actions
