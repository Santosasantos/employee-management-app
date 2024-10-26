import dayjs from 'dayjs/esm';

import { IJobHistory, NewJobHistory } from './job-history.model';

export const sampleWithRequiredData: IJobHistory = {
  id: 2530,
};

export const sampleWithPartialData: IJobHistory = {
  id: 22937,
};

export const sampleWithFullData: IJobHistory = {
  id: 4182,
  startDate: dayjs('2024-10-25T02:39'),
  endDate: dayjs('2024-10-25T02:13'),
  language: 'FRENCH',
};

export const sampleWithNewData: NewJobHistory = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
