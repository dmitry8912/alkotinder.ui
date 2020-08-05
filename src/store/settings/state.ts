import { UserDataInterface } from '../entities/UserData'
import { uid } from 'quasar'

const state: UserDataInterface = {
  nickname: 'Dmitry',
  email: '',
  sex: 'm',
  weight: 65,
  id: '',
  dailyTarget: 5,
  token: '',
  deviceUid: uid(),
  apiToken: '',
  stateToken: '',
  avatar: 'default-avatar.png'
}

export default state
