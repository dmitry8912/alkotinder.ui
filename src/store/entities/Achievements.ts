import { BageInterface } from './Bage'
import { TodayProgressInterface } from './TodayProgress'
import { CoachAdviceInterface } from './CoachAdvice'

export interface AchievementsInterface {
  progress: TodayProgressInterface;
  todayBages: BageInterface[];
  recordBages: BageInterface[];
  advice: CoachAdviceInterface;
}
