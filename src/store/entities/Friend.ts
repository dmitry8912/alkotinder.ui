import { BageInterface } from './Bage'

export interface FriendInterface {
  name: string;
  status: string;
  avatar: string;
  likes: number;
  bages: BageInterface[];
}
