import { Heroes } from '../data/Heroes';

export const getHeroesByPublisher = (publisher) => {
  const validPublishers = ['DC Comics', 'Marvel Comics'];

  if (!validPublishers.includes(publisher)) {
    throw new Error(`Publisher "${publisher}" no es correcto`);
  }

  return Heroes.filter((hero) => hero.publisher === publisher);
};
