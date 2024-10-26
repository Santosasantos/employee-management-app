import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '0c1541a6-d60c-4959-bf9a-5dd1679af9d0',
};

export const sampleWithPartialData: IAuthority = {
  name: 'db2e94a6-f3bf-4957-bb7e-db793a58ae5d',
};

export const sampleWithFullData: IAuthority = {
  name: '077d013a-ef5b-4b0b-88a6-a423609efb1c',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
