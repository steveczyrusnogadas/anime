import axios from 'axios';

const baseUrl = 'https://api.jikan.moe/v4';

/**
 * Made the API calls as a service so it's cleaner in the components page
 */
export const fetchAnime = async (query) => {
  if (query) {
    const response = await axios.get(`${baseUrl}/anime?q=${query}`);
    return response.data.data.map((anime) => ({
      value: anime.mal_id,
      label: anime.title,
      data: anime,
    }));
  } else {
    return [];
  }
};

export const fetchAnimeDetails = async (id) => {
  const response = await axios.get(`${baseUrl}/anime/${id}/full`);
  return response.data.data;
};
