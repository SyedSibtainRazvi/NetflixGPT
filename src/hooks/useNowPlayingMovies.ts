import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/apiOptions';
import { addNowPlayingMovies, Movie, Video } from '../utils/moviesSlice';

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
      const movies: Movie[] = json.results;

      const moviesWithTrailers = await Promise.all(
        movies.map(async movie => {
          try {
            const videoRes = await fetch(`${import.meta.env.VITE_BASE_URL}/movie/${movie.id}/videos`, API_OPTIONS);
            const videoJson = await videoRes.json();
            const videos: Video[] = videoJson.results;
            const filteredVideo = videos.filter((video: Video) => video.type === 'Trailer');
            const trailer = filteredVideo.length ? filteredVideo[0] : videos[0];
            return { ...movie, trailer };
          } catch (err) {
            console.error('Video fetch error:', err);
            return { ...movie, trailer: undefined };
          }
        })
      );

      dispatch(addNowPlayingMovies(moviesWithTrailers));
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
