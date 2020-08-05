import { MutationTree } from 'vuex'
import { AchievementsInterface } from '../entities/Achievements'
import { uid } from 'quasar'

const mutation: MutationTree<AchievementsInterface> = {
  addToProgress (state, payload) {
    state.progress.progressData.push({
      uid: payload.uid,
      date: new Date(),
      total: payload.total,
      drinkName: {
        label: payload.drinkName.label,
        value: payload.drinkName.id,
        strong: payload.drinkName.strong,
        id: payload.drinkName.id
      }
    })
  },
  deleteProgress (state, payload) {
    state.progress.progressData.splice(state.progress.progressData.indexOf(payload), 1)
  },
  setData (state, payload) {
    Object.assign(state.progress, payload.progress)
  }
}

export default mutation
