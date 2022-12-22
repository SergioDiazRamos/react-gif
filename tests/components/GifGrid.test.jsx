import { render, screen } from '@testing-library/react';

import { GifGrid } from '../../src/components';

describe('Pruebas en <GifGrid/>', () => {
  const category = 'One Punch';
  test('Debe de mostrar el loading inicialmente', () => {
    render(<GifGrid category={category} />);
    expect(screen.getByText('Cargando...'));
  });

  test('Debe de mostrar items cuando se cargan las imágenes useFetchGifs', () => {
    //
  });
});
