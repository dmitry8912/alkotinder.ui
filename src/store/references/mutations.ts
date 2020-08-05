import { MutationTree } from 'vuex'
import { ReferencesInterface } from "src/store/entities/References"

const mutation: MutationTree<ReferencesInterface> = {
  addNewDrink (state, payload): void {
    state.drinks.push(payload)
  }
}

export default mutation
