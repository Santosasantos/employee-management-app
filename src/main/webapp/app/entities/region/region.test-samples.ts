import { IRegion, NewRegion } from './region.model';

export const sampleWithRequiredData: IRegion = {
  id: 30166,
};

export const sampleWithPartialData: IRegion = {
  id: 4458,
};

export const sampleWithFullData: IRegion = {
  id: 27830,
  regionName: 'swim',
};

export const sampleWithNewData: NewRegion = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
