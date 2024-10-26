import { IDepartment, NewDepartment } from './department.model';

export const sampleWithRequiredData: IDepartment = {
  id: 25223,
  departmentName: 'intensely',
};

export const sampleWithPartialData: IDepartment = {
  id: 9829,
  departmentName: 'perky sardonic',
};

export const sampleWithFullData: IDepartment = {
  id: 28441,
  departmentName: 'shudder why pish',
};

export const sampleWithNewData: NewDepartment = {
  departmentName: 'till hornet warmly',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
