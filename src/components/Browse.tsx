import Hero from './Hero';
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MovieContainer from './movie/MovieContainer';

const Browse = () => {
  useNowPlayingMovies();

  return (
    <>
      <Header />
      <Hero />
      <MovieContainer />
    </>
  );
};

export default Browse;
