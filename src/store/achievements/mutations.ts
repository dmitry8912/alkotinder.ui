import { MutationTree } from 'vuex'
import { AchievementsInterface } from '../entities/Achievements'

const mutation: MutationTree<AchievementsInterface> = {
  addToProgress (state, payload) {
    state.progress.progressData.push(payload)
  }
}

export default mutation
