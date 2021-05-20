import { Heroes } from '../data/Heroes';

export const getHeroesById = (id) => {
  return Heroes.find((hero) => hero.id === id);
};
