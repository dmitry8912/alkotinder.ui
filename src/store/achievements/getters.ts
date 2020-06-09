import { GetterTree } from 'vuex'
import { StoreInterface } from '../index'
import { AchievementsInterface } from '../entities/Achievements'

const getters: GetterTree<AchievementsInterface, StoreInterface> = {
  todayTagretCompletePercentage (): number {
    let percent = 0
    percent = 27
    return percent
  }
}

export default getters
