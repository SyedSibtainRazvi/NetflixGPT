import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import userLogo from '../assets/user.jpg';
import { useEffect, useState } from 'react';
import { RootState } from '../utils/appStore';
import { useNavigate } from 'react-router-dom';
import arrowDown from '../assets/arrow_down.svg';
import { onAuthStateChanged } from 'firebase/auth';
import { toggleGptSearch } from '../utils/gptSlice';
import netflix_logo from '../assets/netflix_logo.png';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const [dropdown, setDropdown] = useState(false);

  const handleSignout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = () => {
    setDropdown(!dropdown);
  };

  const handleGptSearch = () => {
    dispatch(toggleGptSearch());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });
    return () => {
      unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="absolute w-screen px-6 py-2 bg-gradient-to-b from-black z-10 flex flex-row justify-between items-center">
        <img src={netflix_logo} alt="netflix" className="w-28 sm:w-44" />
        {user && (
          <div className="flex items-center gap-4">
            <button
              onClick={handleGptSearch}
              className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-1 px-4 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200"
            >
              GPT Search
            </button>
            <img src={userLogo} alt="user" className="w-8 h-8 rounded cursor-pointer" />
            <img
              src={arrowDown}
              alt="arrow"
              onClick={handleClick}
              className={`w-4 h-4 cursor-pointer transition-transform duration-300 ${dropdown ? 'rotate-180' : ''}`}
            />
            <div
              className={`absolute bg-black/80 top-16 right-4 p-4 rounded transition-all duration-300 ${
                dropdown ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}
            >
              <button onClick={handleSignout} className="cursor-pointer text-white font-bold">
                Sign Out
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
