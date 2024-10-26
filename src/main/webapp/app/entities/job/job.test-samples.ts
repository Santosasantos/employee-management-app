import { IJob, NewJob } from './job.model';

export const sampleWithRequiredData: IJob = {
  id: 3238,
};

export const sampleWithPartialData: IJob = {
  id: 12920,
  minSalary: 30914,
};

export const sampleWithFullData: IJob = {
  id: 28191,
  jobTitle: 'Principal Division Specialist',
  minSalary: 30586,
  maxSalary: 21174,
};

export const sampleWithNewData: NewJob = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
