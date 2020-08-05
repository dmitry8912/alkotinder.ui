import { GetterTree } from 'vuex'
import { StoreInterface } from '../index'
import { AchievementsInterface } from '../entities/Achievements'
import state from './state'
import { ProgressDataInterface } from 'src/store/entities/ProgressData'
import { date } from 'quasar'

const getters: GetterTree<AchievementsInterface, StoreInterface> = {
  todayLitres (): number {
    return state.progress.progressData.reduce((total, current) => {
      if ((new Date()).getDate() === (new Date(current.date)).getDate()) {
        return Number(total) + Number(current.total)
      } else {
        return 0
      }
    }, 0) / 1000
  },
  todayPureAlcohol (): number {
    return state.progress.progressData.reduce((total, current) => {
      if ((new Date()).getDate() === (new Date(current.date)).getDate()) {
        return Number(total) + (Number(current.total) * Number(current.drinkName.strong))
      } else {
        return 0
      }
    }, 0) / 1000
  },
  todayDrinks (): ProgressDataInterface[] {
    return state.progress.progressData.filter(p => date.isSameDate(new Date(p.date), new Date(), 'day'))
  }
}

export default getters
