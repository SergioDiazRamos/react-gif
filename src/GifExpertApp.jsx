import { useState } from 'react';

import { AddCategory } from './components';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

  const onAddCategory = (category) => {
    setCategories([category, ...categories]);
  };

  return (
    <>
      {/* Título */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory onAddCategory={onAddCategory} />

      {/* Listado de Gif */}
      {/* <button onClick={onAddCategory}>Agregar</button> */}
      <ol>
        {categories.map((category, idx) => (
          <li key={idx}>{category}</li>
        ))}
      </ol>
      {/* Gif Item */}
    </>
  );
};
