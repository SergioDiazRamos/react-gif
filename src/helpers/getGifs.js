const apiKey = 'IV9QAnFRAiAJMVyGrZ4f08PWtWPjpYaP';

export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=20`;
  const resp = await fetch(url);
  const { data = [] } = await resp.json();
  const gifs = data.map(({ id, title, images }) => ({
    id,
    title,
    url: images.downsized_medium.url,
  }));

  console.log('❗ :: gifs', gifs);

  return gifs;
};
