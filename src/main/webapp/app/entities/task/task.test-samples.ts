import { ITask, NewTask } from './task.model';

export const sampleWithRequiredData: ITask = {
  id: 18759,
};

export const sampleWithPartialData: ITask = {
  id: 27571,
  description: 'gosh pilot',
};

export const sampleWithFullData: ITask = {
  id: 32750,
  title: 'huff',
  description: 'and sonar',
};

export const sampleWithNewData: NewTask = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
