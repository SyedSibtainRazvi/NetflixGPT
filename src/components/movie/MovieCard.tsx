import { POSTER_BASE_URL } from '../../utils/constant';

const MovieCard = ({ title, posterPath }: { title: string; posterPath: string }) => {
  return (
    <div className="w-32 h-auto sm:w-48 flex-shrink-0">
      <img
        src={POSTER_BASE_URL + posterPath}
        alt={`Poster of ${title}`}
        className="w-full h-72 object-cover rounded"
        loading="lazy"
      />
    </div>
  );
};

export default MovieCard;
