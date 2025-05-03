import Hero from './Hero';
import Header from './Header';
import MovieContainer from './movie/MovieContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();

  return (
    <>
      <Header />
      <Hero />
      <MovieContainer />
    </>
  );
};

export default Browse;
