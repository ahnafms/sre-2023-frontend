import { DivisionEnum } from './division-list';
import { Staff } from './staff';

export type DivisionWithStaff = {
  [key in DivisionEnum]: Staff[];
};
