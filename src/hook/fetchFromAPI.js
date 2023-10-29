import axios from 'axios';

const BASE_URL = 'https://youtube-search-and-download.p.rapidapi.com';

const options = {
  params: {
    type: 'mu, mo, v',
    hl: 'en',
    gl: 'IN',
  },
  headers: {
    'X-RapidAPI-Key': '70f8978d68mshde7f2a57cfdca17p1a3be9jsn3e784b57a56e',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
