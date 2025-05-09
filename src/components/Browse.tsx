import Hero from './Hero';
import Header from './Header';
import Footer from './Footer';
import { useSelector } from 'react-redux';
import { RootState } from '../utils/appStore';
import MovieContainer from './movie/MovieContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import GptMovieSuggestion from './gpt/GptMovieSuggestion';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';

const Browse = () => {
  const showGptSearch = useSelector((store: RootState) => store.gpt.showGptSearch);
  const movies = useSelector((store: RootState) => store.movies.nowPlayingMovies);
  const isLoading = !movies?.length;

  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        {showGptSearch ? (
          <GptMovieSuggestion />
        ) : (
          <>
            <Hero />
            <MovieContainer />
          </>
        )}
      </div>
      {!isLoading && <Footer />}
    </div>
  );
};

export default Browse;
