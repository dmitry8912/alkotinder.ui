import { AchievementsInterface } from '../entities/Achievements'

const state: AchievementsInterface = {
  progress: {
    remains: 2.7,
    progressData: [
    ]
  },
  todayBages: [
    {
      icon: 'fas fa-wine-glass-alt',
      color: 'primary',
      name: 'Статистика',
      value: 'Вы перепили 15% пользователей'
    },
    {
      icon: 'fas fa-dice-six',
      color: 'red',
      name: 'Станьте лучше',
      value: 'Вы выпили 65% от среднего потребления. Превзойдите самого себя!'
    },
    {
      icon: 'fas fa-skull-crossbones',
      color: 'grey-5',
      name: 'Опасная зона',
      value: 'Вы еще не приблизились к переделу'
    }
  ],
  recordBages: [
    {
      icon: 'fas fa-chart-line',
      color: 'primary',
      name: 'Рекорды',
      value: 'Последняя серия завершена 3 дня назад'
    },
    {
      icon: 'fas fa-signal',
      color: 'red',
      name: 'Литраж',
      value: 'За последнюю серию выпито 15 литров'
    },
    {
      icon: 'fas fa-dna',
      color: 'amber',
      name: 'Мой ЗОЖ',
      value: 'Баланс кальция в организме восстановлен до 2045 года'
    }
  ],
  advice: {
    img: 'https://ic.pics.livejournal.com/beerexpert/26636993/582549/582549_original.jpg',
    advice: 'Лучше выпией литр пива чем работай целый день!'
  }
}

export default state
