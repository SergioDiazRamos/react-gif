import { render, screen } from '@testing-library/react';

import { GifGrid } from '../../src/components';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid/>', () => {
  const category = 'One Punch';
  test('Debe de mostrar el loading inicialmente', () => {
    useFetchGifs.mockReturnValue({ images: [], isLoading: true });

    render(<GifGrid category={category} />);
    expect(screen.getByText('Cargando...'));
  });

  test('Debe de mostrar items cuando se cargan las imágenes useFetchGifs', () => {
    const gifs = [
      {
        id: 'ABC',
        title: 'Saitama',
        url: 'https://url.com/saitama.jpg',
      },
      {
        id: '123',
        title: 'Goku',
        url: 'https://url.com/goku.jpg',
      },
    ];
    useFetchGifs.mockReturnValue({ images: gifs, isLoading: false });

    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(2);
  });
});
