import Groq from 'groq-sdk';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../../utils/apiOptions';
import { addGptMovieResult } from '../../utils/gptSlice';
import { GPT_PROMPT_TEMPLATE } from '../../utils/constant';

const groqClient = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
});

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const searchMovieTMDB = async (movie: string) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error(`Error searching for movie "${movie}":`, error);
      return [];
    }
  };

  const getMovieRecommendations = async (query: string) => {
    try {
      const prompt = GPT_PROMPT_TEMPLATE.replace('{query}', query);
      const results = await groqClient.chat.completions.create({
        messages: [{ role: 'user', content: prompt }],
        model: 'llama3-8b-8192',
      });
      return results.choices[0].message.content?.split(',') || [];
    } catch (error) {
      console.error('Error getting GPT recommendations:', error);
      return [];
    }
  };

  const handleGptSearch = async () => {
    if (!searchText.current?.value.trim()) return;

    setIsLoading(true);
    try {
      const movieData = await getMovieRecommendations(searchText.current.value);
      const tmdbResults = await Promise.all(movieData.map(movie => searchMovieTMDB(movie)));

      dispatch(
        addGptMovieResult({
          movieNames: movieData,
          movieResults: tmdbResults,
        })
      );
    } catch (error) {
      console.error('Error in GPT search:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={e => e.preventDefault()}
      className="flex items-center bg-[#141414] border border-gray-700 rounded-lg px-4 py-2 w-full max-w-xl shadow-md"
    >
      <input
        ref={searchText}
        type="text"
        placeholder="What would you like to watch"
        className="bg-transparent text-white placeholder-gray-400 focus:outline-none flex-grow"
        disabled={isLoading}
      />
      <button
        type="submit"
        onClick={handleGptSearch}
        disabled={isLoading}
        className={`ml-4 bg-red-600 text-white font-semibold py-2 px-4 rounded transition duration-200 flex items-center gap-2 min-w-[100px] justify-center ${
          isLoading ? 'opacity-50 cursor-not-allowed bg-red-700' : 'hover:bg-red-700 cursor-pointer'
        }`}
      >
        {isLoading ? (
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Searching...</span>
          </div>
        ) : (
          'Search'
        )}
      </button>
    </form>
  );
};

export default GptSearchBar;
