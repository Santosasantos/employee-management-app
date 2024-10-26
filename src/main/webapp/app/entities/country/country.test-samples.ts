import { ICountry, NewCountry } from './country.model';

export const sampleWithRequiredData: ICountry = {
  id: 5910,
};

export const sampleWithPartialData: ICountry = {
  id: 5503,
  countryName: 'butter',
};

export const sampleWithFullData: ICountry = {
  id: 2295,
  countryName: 'hmph ugh unwritten',
};

export const sampleWithNewData: NewCountry = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
