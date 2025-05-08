import { useEffect } from 'react';
import { RootState } from '../utils/appStore';
import { API_OPTIONS } from '../utils/apiOptions';
import { useDispatch, useSelector } from 'react-redux';
import { addPopularMovies, Movie } from '../utils/moviesSlice';

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store: RootState) => store.movies.popularMovies);

  const getPopularMovies = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/movie/popular?page=2`, API_OPTIONS);
      if (!response.ok) {
        console.error('API error:', response.status, response.statusText);
        const text = await response.text();
        console.error('Response body:', text);
        return;
      }
      const json = await response.json();
      const movies: Movie[] = json.results;

      dispatch(addPopularMovies(movies));
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  useEffect(() => {
    if (!popularMovies || popularMovies.length === 0) {
      getPopularMovies();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default usePopularMovies;
