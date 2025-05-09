import Hero from './Hero';
import Header from './Header';
import { useSelector } from 'react-redux';
import { RootState } from '../utils/appStore';
import MovieContainer from './movie/MovieContainer';
import GptMovieSuggestion from './gpt/GptMovieSuggestion';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import Footer from './Footer';

const Browse = () => {
  const showGptSearch = useSelector((store: RootState) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();

  return (
    <>
      <Header />
      {showGptSearch ? (
        <GptMovieSuggestion />
      ) : (
        <>
          <Hero />
          <MovieContainer />
        </>
      )}
      <Footer />
    </>
  );
};

export default Browse;
