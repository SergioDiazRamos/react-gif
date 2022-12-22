import { render, screen } from '@testing-library/react';

import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en <GifExpertApp/>', () => {
  // TODO: Hacer más adelante 111. Pruebas de tarea, descripción de la tarea
  test('description', () => {
    render(<GifExpertApp />);
    screen.debug();
  });
});
