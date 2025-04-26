import netflix_logo from '../assets/netflix_logo.png';

const Header = () => {
  return (
    <>
      <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between ">
        <img src={netflix_logo} alt="netflix" className="w-44 mx-auto md:mx-0" />
      </div>
    </>
  );
};

export default Header;
