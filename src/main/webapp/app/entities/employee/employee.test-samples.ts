import dayjs from 'dayjs/esm';

import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 31507,
};

export const sampleWithPartialData: IEmployee = {
  id: 18998,
  firstName: 'Clara',
  hireDate: dayjs('2024-10-24T20:27'),
  salary: 29430,
};

export const sampleWithFullData: IEmployee = {
  id: 18728,
  firstName: 'Myrtis',
  lastName: 'Vandervort',
  email: 'Chester_Runolfsdottir-Hansen@hotmail.com',
  phoneNumber: 'fuel',
  hireDate: dayjs('2024-10-24T15:57'),
  salary: 28769,
  commissionPct: 14340,
};

export const sampleWithNewData: NewEmployee = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
