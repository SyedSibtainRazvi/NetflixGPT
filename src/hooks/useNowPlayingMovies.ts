import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/apiOptions';
import { addNowPlayingMovies } from '../utils/moviesSlice';

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/movie/now_playing`, API_OPTIONS);
      if (!response.ok) {
        console.error('API error:', response.status, response.statusText);
        const text = await response.text();
        console.error('Response body:', text);
        return;
      }
      const json = await response.json();
      dispatch(addNowPlayingMovies(json.results));
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };
  useEffect(() => {
    getNowPlayingMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useNowPlayingMovies;
