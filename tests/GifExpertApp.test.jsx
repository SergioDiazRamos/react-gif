import { fireEvent, render, screen } from '@testing-library/react';

import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en <GifExpertApp/>', () => {
  test('Hace match con el Snapshot.', () => {
    const { container } = render(<GifExpertApp />);
    // screen.debug();
    expect(container).toMatchSnapshot();
  });

  test('Debe agregar una categoría si no existe', () => {
    render(<GifExpertApp />);

    const form = screen.getByRole('form');
    const input = screen.getByRole('textbox');

    fireEvent.input(input, { target: { value: 'Saitama' } });
    fireEvent.submit(form);

    expect(screen.getByText('Saitama')).toBeTruthy();
  });

  test('No debe agregar una categoría si existe', () => {
    render(<GifExpertApp />);

    const form = screen.getByRole('form');
    const input = screen.getByRole('textbox');

    fireEvent.input(input, { target: { value: 'One Punch' } });
    fireEvent.submit(form);

    expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(1);
  });
});
