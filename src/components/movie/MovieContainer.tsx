import { useSelector } from 'react-redux';
import { RootState } from '../../utils/appStore';
import React, { Suspense } from 'react';

const MovieList = React.lazy(() => import('./MovieList'));

const MovieContainer = () => {
  const nowPlayingMovies = useSelector((store: RootState) => store.movies.nowPlayingMovies);
  const popularMovies = useSelector((store: RootState) => store.movies.popularMovies);
  const upcomingMovies = useSelector((store: RootState) => store.movies.upcomingMovies);

  if (!nowPlayingMovies?.length || !popularMovies?.length || !upcomingMovies?.length) return null;

  return (
    <div className="bg-black">
      <div className="sm:-mt-32 -mt-26 relative">
        <Suspense fallback={<div>Loading...</div>}>
          <MovieList title="Now Playing" movies={nowPlayingMovies} />
        </Suspense>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <MovieList title="Popular Movies" movies={popularMovies} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <MovieList title="Upcoming Movies" movies={upcomingMovies} />
      </Suspense>
    </div>
  );
};

export default MovieContainer;
