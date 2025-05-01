import Header from './Header';
import { auth } from '../../firebase';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateForm } from '../utils/validate';
import netflix_bg from '../assets/netflix_bg.jpg';
import firebaseErrorMessages from '../utils/firebaseErrorMessages';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';

const Login = () => {
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const name = useRef<HTMLInputElement>(null);

  const handleFormToggle = () => {
    setIsSignIn(!isSignIn);
    setErrorMessage('');
  };

  const handleSubmit = async () => {
    setErrorMessage('');

    if (!email.current || !password.current) {
      setErrorMessage('Email and password are required.');
      return;
    }

    const error = validateForm(email.current.value, password.current.value, name.current?.value);
    if (error) {
      setErrorMessage(error);
      return;
    }

    try {
      if (isSignIn) {
        await signInWithEmailAndPassword(auth, email.current.value, password.current.value);
        navigate('/browse');
      } else {
        const userCredential = await createUserWithEmailAndPassword(auth, email.current.value, password.current.value);
        if (userCredential.user && name?.current?.value) {
          await updateProfile(userCredential.user, {
            displayName: name?.current.value,
          });
        }
        navigate('/browse');
      }
    } catch (error: unknown) {
      if (error && typeof error === 'object' && 'code' in error && 'message' in error) {
        const { code, message } = error as { code: string; message: string };
        setErrorMessage(firebaseErrorMessages[code] || message || 'An unknown error occurred.');
      } else if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('An unknown error occurred');
      }
    }
  };

  return (
    <div className="relative min-h-screen w-full">
      <Header />
      <img src={netflix_bg} alt="netflix" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 flex items-center justify-center z-20 ">
        <form
          onSubmit={e => e.preventDefault()}
          className="w-96 bg-black/80 p-8 rounded-lg flex flex-col gap-4 sm:gap-10 m-4"
        >
          <h1 className="text-4xl font-bold text-white">{isSignIn ? 'Sign In' : 'Sign Up'}</h1>
          {!isSignIn && (
            <input
              ref={name}
              type="text"
              placeholder="Name"
              className="py-4 px-4 rounded bg-black/50 text-gray-300 placeholder-gray-400 border border-gray-500 focus:outline-gray-300"
            />
          )}
          <input
            ref={email}
            type="email"
            placeholder="Email or phone number"
            className="py-4 px-4 rounded bg-black/50 text-gray-300 placeholder-gray-400 border border-gray-500 focus:outline-gray-300"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="py-4 px-4 rounded bg-black/50 text-gray-300 placeholder-gray-400 border border-gray-500 focus:outline-gray-300"
          />
          {errorMessage && <p className="text-red-500 text-sm break-words  -mt-2 sm:-mt-6">{errorMessage}</p>}
          <button
            type="submit"
            onClick={handleSubmit}
            className="cursor-pointer bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded"
          >
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </button>
          <p className="text-gray-400 text-sm break-words">
            {isSignIn ? 'New to Netflix?' : 'Already have an account?'}
            <span onClick={handleFormToggle} className="text-white cursor-pointer ml-2 hover:underline">
              {isSignIn ? 'Sign up now.' : 'Sign in now.'}
            </span>
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
