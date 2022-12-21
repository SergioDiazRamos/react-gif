import { fireEvent, render, screen } from '@testing-library/react';

import { AddCategory } from '../../src/components/AddCategory';

const inputText = 'Saitama';

describe('Pruebas en <AddCategory/>', () => {
  test('Debe de cambiar el valor de la caja de texto', () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole('textbox');
    fireEvent.input(input, { target: { value: inputText } });
    expect(input.value).toBe(inputText);
  });

  test('Debe de llanar onNewCategory si el input tiene un valor', () => {
    // TODO:
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputText } });
    fireEvent.submit(form);
    expect(input.value).toBe('');
    // screen.debug();
  });
});
