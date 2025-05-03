import HeroVideo from './HeroVideo';
import { useSelector } from 'react-redux';
import { RootState } from '../utils/appStore';
import { IMAGE_BASE_URL } from '../utils/constant';

const Hero = () => {
  const movies = useSelector((store: RootState) => store.movies.nowPlayingMovies);
  if (!movies || movies.length === 0) return null;

  const mainMovie = movies[0];
  const { title, overview, backdrop_path, poster_path, trailer } = mainMovie;

  return (
    <div className="relative w-full h-[60vh] md:h-[90vh] flex items-center bg-black overflow-hidden">
      {trailer && trailer.key ? (
        <HeroVideo keyId={trailer.key} />
      ) : (
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${IMAGE_BASE_URL}${backdrop_path})`,
            backgroundColor: '#222',
          }}
        ></div>
      )}

      <div className="hidden relative z-10 p-4 md:p-8 sm:flex flex-col items-start space-y-4 md:space-y-6 w-full max-w-full md:max-w-2xl">
        <img
          src={poster_path ? `${IMAGE_BASE_URL}${poster_path}` : ''}
          alt={title}
          loading="lazy"
          className="w-20 md:w-32 rounded shadow-lg mb-2 md:mb-4"
        />
        <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 drop-shadow-lg text-white">{title}</h1>
        <p className="mb-4 md:mb-6 text-base md:text-lg drop-shadow text-white line-clamp-3 md:line-clamp-none">
          {overview}
        </p>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full">
          <button className="flex items-center justify-center cursor-pointer bg-white text-black px-4 md:px-6 py-2 rounded font-semibold hover:bg-gray-200 transition w-full sm:w-auto">
            Play
          </button>
          <button className="flex items-center justify-center cursor-pointer bg-gray-700/50 text-white px-4 md:px-6 py-2 rounded font-semibold hover:bg-gray-600 transition w-full sm:w-auto">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
