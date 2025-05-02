import Hero from './Hero';
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';

const Browse = () => {
  useNowPlayingMovies();

  return (
    <>
      <Header />
      <Hero />
    </>
  );
};

export default Browse;
