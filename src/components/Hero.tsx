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
    <div className="relative w-full h-[90vh] flex items-end bg-black overflow-hidden">
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

      <div className="relative z-10 p-8 flex flex-col items-start space-y-6 w-full max-w-2xl">
        <img
          src={poster_path ? `${IMAGE_BASE_URL}${poster_path}` : ''}
          alt={title}
          loading="lazy"
          className="w-32 rounded-lg shadow-lg mb-4"
        />
        <h1 className="text-4xl font-bold mb-4 drop-shadow-lg text-white">{title}</h1>
        <p className="mb-6 text-lg drop-shadow text-white">{overview}</p>
        <div className="flex space-x-4">
          <button className="cursor-pointer bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-200 transition">
            ▶️ Play
          </button>
          <button className="cursor-pointer bg-gray-700 bg-opacity-70 text-white px-6 py-2 rounded font-semibold hover:bg-gray-600 transition">
            ℹ️ More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
