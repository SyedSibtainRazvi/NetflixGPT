import GptSearchBar from './GptSearchBar';
import GptMovieResult from './GptMovieResult';

const GptMovieSuggestion = () => {
  return (
    <div className="flex flex-col items-center  min-h-screen bg-black px-4 py-8">
      <h1 className="text-white text-3xl font-bold mb-4 mt-16 z-20">AI Movie Suggestion</h1>
      <GptSearchBar />
      <div className="mt-8 w-full max-w-7xl">
        <GptMovieResult />
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
