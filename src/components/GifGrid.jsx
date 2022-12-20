import { useEffect } from 'react';

import { getGifs } from '../helpers';

export const GifGrid = ({ category }) => {
  useEffect(() => {
    getGifs('valorant');
  }, []);

  return (
    <>
      <h3>{category}</h3>
    </>
  );
};
