import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 12764,
  login: '7h{5pb@XS9n\\Vhww\\;ERL',
};

export const sampleWithPartialData: IUser = {
  id: 3486,
  login: 'aDUd@ZPAf',
};

export const sampleWithFullData: IUser = {
  id: 27230,
  login: 'R33**D@GoxP-v\\.Fvdo0-',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
