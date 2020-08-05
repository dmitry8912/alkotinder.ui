import { ActionTree } from 'vuex'
import { StoreInterface } from '../index'
import { ReferencesInterface } from 'src/store/entities/References'
import axios from "app/node_modules/axios"
import { api, websockethost } from 'src/config/config'
import { Loading } from "app/node_modules/quasar"
import settings from 'src/store/settings/state'
import Echo from "app/node_modules/laravel-echo"
declare const window: any
const actions: ActionTree<ReferencesInterface, StoreInterface> = {
  addNewDrink ({ commit }, payload): void {
    Loading.show()
    axios.post(api + 'api/drinks', payload, {
      headers: { Authorization: `Bearer ${settings.apiToken}` }
    })
      .then(response => {
        commit('addNewDrink', response.data)
        Loading.hide()
      })
      .catch((e) => {
        console.error(e)
        Loading.hide()
      })
  },
  loadDrinks ({ commit }): void {
    Loading.show()
    axios.get(api + 'api/drinks', {
      headers: { Authorization: `Bearer ${settings.apiToken}` }
    })
      .then(response => {
        for (const key in response.data) {
          commit('addNewDrink', response.data[key])
        }
        Loading.hide()

        window.io = require('socket.io-client')
        window.echo = new Echo({
          broadcaster: 'socket.io',
          host: websockethost
        })
        window.echo.channel('laravel_database_drinkUpdates')
          .listen('.drinkBroadcaster', (data: object) => {
            commit('addNewDrink', (data as any).drink)
          })
      })
      .catch((e) => {
        console.error(e)
        Loading.hide()
      })
  }
}

export default actions
