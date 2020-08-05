import { DrinkInterface } from 'src/store/entities/Drink'

export interface ProgressDataInterface {
  uid: string;
  date: Date;
  drinkName: DrinkInterface;
  total: number;
}
