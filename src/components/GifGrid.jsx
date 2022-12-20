import { getGifs } from '../helpers';

export const GifGrid = ({ category }) => {
  getGifs('valorant');

  return (
    <>
      <h3>{category}</h3>
    </>
  );
};
