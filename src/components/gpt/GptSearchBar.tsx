const GptSearchBar = () => {
  return (
    <form className="flex items-center bg-[#141414] border border-gray-700 rounded-lg px-4 py-2 w-full max-w-xl shadow-md">
      <input
        type="text"
        placeholder="What would you like to watch"
        className="bg-transparent text-white placeholder-gray-400 focus:outline-none flex-grow"
      />
      <button
        type="submit"
        className="ml-4 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded cursor-pointer transition duration-200"
      >
        Search
      </button>
    </form>
  );
};

export default GptSearchBar;
