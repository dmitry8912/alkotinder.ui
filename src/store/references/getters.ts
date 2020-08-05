import { GetterTree } from 'vuex'
import { StoreInterface } from '../index'
import { ReferencesInterface } from 'src/store/entities/References'
import state from 'src/store/references/state'
import { DrinkInterface } from 'src/store/entities/Drink'

const getters: GetterTree<ReferencesInterface, StoreInterface> = {
  drinksReferences (): DrinkInterface[] {
    return state.drinks
  }
}

export default getters
