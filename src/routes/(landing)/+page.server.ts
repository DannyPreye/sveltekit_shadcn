import axios from 'axios';

export const load = async () =>
{

    const API_KEY = import.meta.env.VITE_API_KEY;
    const API_URL = import.meta.env.VITE_API_URL;

    try {

        const urls = [ `${API_URL}/trending/all/day?language=en-US&api_key=${API_KEY}`, `${API_URL}/tv/on_the_air?language=en-US&api_key=${API_KEY}` ];

        const response = await Promise.all(urls.map(async (url) => (await axios.get(url)).data));



        return {
            movies: response[ 0 ]?.results,
            tvSeries: response[ 1 ]?.results

        };

    } catch (error) {
        console.log(error);

    }
};
