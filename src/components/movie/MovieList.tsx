import MovieCard from './MovieCard';
import { Movie } from '../../utils/moviesSlice';

interface MovieListProps {
  movies: Movie[];
  title: string;
}

const MovieList = ({ movies, title }: MovieListProps) => {
  return (
    <section className="flex flex-col space-y-2 mx-2 sm:mx-8">
      <h2 className="text-2xl text-white font-semibold z-20">{title}</h2>
      <div className="flex overflow-x-auto space-x-2 py-2 " tabIndex={0} aria-label={`${title} movies`}>
        {movies.map(movie => (
          <MovieCard key={movie.id || movie.title} title={movie.title} posterPath={movie.poster_path} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
