import { useState } from 'react';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

  const onAddCategory = () => {
    setCategories(['Valorant', ...categories]);
  };

  return (
    <>
      {/* Título */}
      <h1>GifExpertApp</h1>

      {/* Input */}

      {/* Listado de Gif */}
      <button onClick={onAddCategory}>Agregar</button>
      <ol>
        {categories.map((category, idx) => (
          <li key={idx}>{category}</li>
        ))}
      </ol>
      {/* Gif Item */}
    </>
  );
};
