import { useSelector } from 'react-redux';
import MovieList from '../movie/MovieList';
import { RootState } from '../../utils/appStore';

const GptMovieResult = () => {
  const { movieResults, movieNames } = useSelector((store: RootState) => store.gpt);

  if (!movieResults || !movieNames || movieResults.length === 0) {
    return null;
  }

  return (
    <div className="space-y-8">
      {movieNames.map((movieName, index) => {
        const movies = movieResults[index] || [];

        return <MovieList key={`${movieName}-${index}`} title={movieName} movies={movies} />;
      })}
    </div>
  );
};

export default GptMovieResult;
