import Header from './Header';
import netflix_bg from '../assets/netflix_bg.jpg';

const Login = () => {
  return (
    <div className="relative min-h-screen w-full">
      <Header />
      <img src={netflix_bg} alt="netflix" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 flex items-center justify-center z-20 ">
        <form className="w-96 bg-black/80 p-8 rounded-lg flex flex-col gap-10 m-4">
          <h1 className="text-4xl font-bold text-white">Sign In</h1>
          <input
            type="email"
            placeholder="Email or phone number"
            className="py-4 px-4 rounded bg-black/50 text-gray-300 placeholder-gray-400 border border-gray-500 focus:outline-gray-300"
          />
          <input
            type="password"
            placeholder="Password"
            className="py-4 px-4 rounded bg-black/50 text-gray-300 placeholder-gray-400 border border-gray-500 focus:outline-gray-300"
          />
          <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded">
            Sign In
          </button>
          <p className="text-gray-400 text-sm break-words">
            New to Netflix? <span className="text-white">Sign up now.</span>
          </p>
          <p className="text-gray-400 text-sm break-words">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
