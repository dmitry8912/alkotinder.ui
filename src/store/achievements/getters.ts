import { GetterTree } from 'vuex'
import { StoreInterface } from '../index'
import { AchievementsInterface } from '../entities/Achievements'
import state from './state'

const getters: GetterTree<AchievementsInterface, StoreInterface> = {
  todayLitres (): number {
    console.log('todayLitres', state.progress.progressData.reduce((total, current) => {
      console.log('arh.total', total)
      console.log('arh.cr', current.total)
      return Number(total) + Number(current.total)
    }, 0) / 1000)
    return state.progress.progressData.reduce((total, current) => {
      return Number(total) + Number(current.total)
    }, 0) / 1000
  }
}

export default getters
