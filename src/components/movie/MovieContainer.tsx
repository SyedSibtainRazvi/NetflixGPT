import MovieList from './MovieList';
import { useSelector } from 'react-redux';
import { RootState } from '../../utils/appStore';

const MovieContainer = () => {
  const nowPlayingMovies = useSelector((store: RootState) => store.movies.nowPlayingMovies);
  const popularMovies = useSelector((store: RootState) => store.movies.popularMovies);
  const upcomingMovies = useSelector((store: RootState) => store.movies.upcomingMovies);

  if (!nowPlayingMovies?.length || !popularMovies?.length || !upcomingMovies?.length) return null;

  return (
    <div className="bg-black">
      <div className="sm:-mt-32 -mt-26 relative">
        <MovieList title="Now Playing" movies={nowPlayingMovies} />
      </div>
      <MovieList title="Popular Movies" movies={popularMovies} />
      <MovieList title="Upcoming Movies" movies={upcomingMovies} />
    </div>
  );
};

export default MovieContainer;
