import axios from 'axios';
export const load = async ({ params }) =>
{
    try {
        const API_KEY = import.meta.env.VITE_API_KEY;
        const API_URL = import.meta.env.VITE_API_URL;

        const urls = [ `${API_URL}/movie/${params.id}?language=en-US&api_key=${API_KEY}`, `${API_URL}/movie/${params.id}/similar?language=en-US&api_key=${API_KEY}`, `${API_URL}/movie/${params.id}/videos?language=en-US&api_key=${API_KEY}`, `${API_URL}/movie/${params.id}/reviews?language=en-US&api_key=${API_KEY}` ];
        const responses = await Promise.all(urls.map(url => axios.get(url)));
        const data = responses.map(response => response.data);

        console.log(data);

        return {
            movie: data[ 0 ],
            similarMovies: data[ 1 ]?.results,
            videos: data[ 2 ]?.results,
            reviews: data[ 3 ]?.results
        };
    } catch (error) {
        console.log(error);


    }
};
