import { DivisionEnum } from './division-list';
import { Staff } from './staff';

export type Division = {
  nama: string;
};

export type DivisionWithStaff = {
  [key in keyof typeof DivisionEnum]: Staff[];
};
