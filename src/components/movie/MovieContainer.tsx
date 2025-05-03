import MovieList from './MovieList';
import { useSelector } from 'react-redux';
import { RootState } from '../../utils/appStore';

const MovieContainer = () => {
  const nowPlayingMovies = useSelector((store: RootState) => store.movies.nowPlayingMovies);
  if (!nowPlayingMovies || nowPlayingMovies.length === 0) return null;

  return (
    <div className="bg-black">
      <div className="-mt-32 relative">
        <MovieList title="Now Playing" movies={nowPlayingMovies} />
      </div>
      <MovieList title="Now Playing" movies={nowPlayingMovies} />
      <MovieList title="Now Playing" movies={nowPlayingMovies} />
      <MovieList title="Now Playing" movies={nowPlayingMovies} />
    </div>
  );
};

export default MovieContainer;
