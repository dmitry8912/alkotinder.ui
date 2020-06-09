import { FriendsInterface } from '../entities/Friends'

const state: FriendsInterface = {
  friends: [
    {
      name: 'Wilhelm',
      status: 'Grnadmaster of CW [lvl 115]',
      avatar: 'https://upload.wikimedia.org/wikipedia/ru/thumb/8/8d/Blazkowicz.png/274px-Blazkowicz.png',
      likes: 2,
      bages: [
        {
          icon: 'local_bar',
          color: 'primary',
          name: 'Достижения',
          value: 'Сегодня не пьет'
        },
        {
          icon: 'fas fa-wine-bottle',
          color: 'red',
          name: 'Предпочтения',
          value: 'Nazi Blood'
        },
        {
          icon: 'fas fa-trophy',
          color: 'amber',
          name: 'Последнняя награда',
          value: 'Восхождение за бургером'
        }
      ]
    },
    {
      name: 'Бацька',
      status: 'Potato owner [lvl 90]',
      avatar: 'https://icdn.lenta.ru/images/2020/06/03/19/20200603191354956/square_320_e2079773ab943e4fc32976a900797fdb.png',
      likes: 15,
      bages: [
        {
          icon: 'local_bar',
          color: 'primary',
          name: 'Достижения',
          value: 'World of tanks'
        },
        {
          icon: 'fas fa-wine-bottle',
          color: 'red',
          name: 'Предпочтения',
          value: 'Село, баня, самогон'
        },
        {
          icon: 'fas fa-trophy',
          color: 'amber',
          name: 'Последнняя награда',
          value: 'Трактор'
        }
      ]
    }
  ]
}

export default state
