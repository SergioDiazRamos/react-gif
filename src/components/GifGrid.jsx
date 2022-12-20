import { GifItem } from './';
import { useFetchGifs } from '../hooks';

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  if (isLoading) return <h3>Cargando...</h3>;

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
