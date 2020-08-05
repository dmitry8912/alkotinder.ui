import { store } from 'quasar/wrappers'
import Vuex from 'vuex'
import achievements from './achievements'
import { AchievementsInterface } from './entities/Achievements'
import friends from './friends'
import { FriendInterface } from './entities/Friend'
import settings from './settings'
import { UserDataInterface } from './entities/UserData'
import references from './references'
import { ReferencesInterface } from "src/store/entities/References"
// import example from './module-example';
// import { ExampleStateInterface } from './module-example/state';

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export interface StoreInterface {
  achievements: AchievementsInterface;
  friends: FriendInterface[];
  settings: UserDataInterface;
  references: ReferencesInterface;
}

export default store(function ({ Vue }) {
  Vue.use(Vuex)

  const Store = new Vuex.Store<StoreInterface>({
    modules: {
      achievements,
      friends,
      settings,
      references
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: !!process.env.DEV
  })

  return Store
})
