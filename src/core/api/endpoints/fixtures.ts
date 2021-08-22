import { Fixture } from '../models';
import { fixtureMocks } from './mocks';

export const get = (): Promise<Fixture[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(fixtureMocks);
    }, 3000);
  });
};
