import { MutationTree } from 'vuex'
import { AchievementsInterface } from '../entities/Achievements'

const mutation: MutationTree<AchievementsInterface> = {
  addToProgress (state, payload) {
    state.progress.progressData.push(payload)
  },
  setData (state, payload) {
    Object.assign(state.progress, payload.progress)
  }
}

export default mutation
