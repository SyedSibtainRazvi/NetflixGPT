import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import userLogo from '../assets/user.jpg';
import { useSelector } from 'react-redux';
import { RootState } from '../utils/appStore';
import { useNavigate } from 'react-router-dom';
import netflix_logo from '../assets/netflix_logo.png';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between ">
        <img src={netflix_logo} alt="netflix" className="w-44 mx-auto md:mx-0" />
        {user && (
          <div className="flex items-center gap-4">
            <img src={userLogo} alt="user" className="w-8 h-8" />
            <button onClick={handleSignout} className=" cursor-pointer text-white font-bold">
              Sign Out
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
