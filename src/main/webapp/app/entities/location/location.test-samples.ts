import { ILocation, NewLocation } from './location.model';

export const sampleWithRequiredData: ILocation = {
  id: 8413,
};

export const sampleWithPartialData: ILocation = {
  id: 1624,
  streetAddress: 'than geez outrageous',
  stateProvince: 'fair',
};

export const sampleWithFullData: ILocation = {
  id: 13191,
  streetAddress: 'declaration preclude mmm',
  postalCode: 'unabashedly where',
  city: 'Lavernworth',
  stateProvince: 'short-term sense adventurously',
};

export const sampleWithNewData: NewLocation = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
