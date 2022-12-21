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
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputText } });
    fireEvent.submit(form);
    expect(input.value).toBe('');

    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputText);
  });

  test('No debe de llamar el onNewCategory si el input está vacio', () => {
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);
    const form = screen.getByRole('form');

    fireEvent.submit(form);
    // expect(onNewCategory).toHaveBeenCalledTimes(0);
    expect(onNewCategory).not.toHaveBeenCalled();
  });
});
