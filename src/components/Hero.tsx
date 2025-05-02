import { useSelector } from 'react-redux';
import { RootState } from '../utils/appStore';
import { IMAGE_BASE_URL } from '../utils/constant';

const Hero = () => {
  const movies = useSelector((store: RootState) => store.movies.nowPlayingMovies);
  if (!movies || movies.length === 0) return null;

  const mainMovie = movies[3];
  const { title, overview, backdrop_path, poster_path } = mainMovie;

  return (
    <div
      className="relative w-full h-[90vh] flex items-end bg-cover bg-center"
      style={{
        backgroundImage: `url(${IMAGE_BASE_URL}${backdrop_path})`,
        backgroundColor: '#222',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      <div className="relative z-10 p-8 flex flex-col md:flex-row items-end space-x-8 w-full">
        <img
          src={poster_path ? `${IMAGE_BASE_URL}${poster_path}` : ''}
          alt={title}
          loading="lazy"
          className="w-32 rounded-lg shadow-lg hidden md:block"
        />
        <div className="text-white max-w-2xl">
          <h1 className="text-4xl font-bold mb-4 drop-shadow-lg">{title}</h1>
          <p className="mb-6 text-lg drop-shadow">{overview}</p>
          <div className="flex space-x-4">
            <button className="cursor-pointer bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-200 transition">
              Play
            </button>
            <button className="cursor-pointer bg-gray-700 bg-opacity-70 text-white px-6 py-2 rounded font-semibold hover:bg-gray-600 transition">
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
