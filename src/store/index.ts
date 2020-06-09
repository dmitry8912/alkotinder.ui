import { store } from 'quasar/wrappers'
import Vuex from 'vuex'
import achievements from './achievements'
import { AchievementsInterface } from './entities/Achievements'
import friends from './friends'
import { FriendInterface } from './entities/Friend'
// import example from './module-example';
// import { ExampleStateInterface } from './module-example/state';

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export interface StoreInterface {
  achievements: AchievementsInterface;
  friends: FriendInterface[];
}

export default store(function ({ Vue }) {
  Vue.use(Vuex)

  const Store = new Vuex.Store<StoreInterface>({
    modules: {
      achievements,
      friends
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: !!process.env.DEV
  })

  return Store
})
