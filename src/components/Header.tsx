import { useEffect } from 'react';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import userLogo from '../assets/user.jpg';
import { RootState } from '../utils/appStore';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import netflix_logo from '../assets/netflix_logo.png';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  const handleSignout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
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
      <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-row justify-between items-center">
        <img src={netflix_logo} alt="netflix" className="w-44" />
        {user && (
          <div className="flex items-center gap-4">
            <img src={userLogo} alt="user" className="w-8 h-8" />
            <button onClick={handleSignout} className="cursor-pointer text-white font-bold">
              Sign Out
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
