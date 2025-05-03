import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/apiOptions';
import { addUpcomingMovies, Movie } from '../utils/moviesSlice';

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/movie/upcoming?page=2`, API_OPTIONS);
      if (!response.ok) {
        console.error('API error:', response.status, response.statusText);
        const text = await response.text();
        console.error('Response body:', text);
        return;
      }
      const json = await response.json();
      const movies: Movie[] = json.results;

      dispatch(addUpcomingMovies(movies));
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  useEffect(() => {
    getUpcomingMovies(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useUpcomingMovies;
