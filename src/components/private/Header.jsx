import "../Header.css";
import maleIcon from "../../assets/imgs/manIcon.jpg";
const Header = (props) => {
  return (
    <>
      <header
        id="nav"
        className="sticky top-0 w-full text-gray-600 body-font rounded-br-xl rounded-bl-xl"
      >
        <div className="container mx-auto flex flex-wrap w-full p-5 bg-blue-400 flex-col md:flex-row items-center rounded-br-xl rounded-bl-xl">
          <a className="flex title-font font-medium items-center text-white lg mb-4 md:mb-0">
            <img
              src={maleIcon}
              alt=""
              className="w-10 h-10 text-white rounded-full"
            />
            <span className="ml-3 text-xl">Welcome Onboard!</span>
          </a>

          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-white	flex flex-wrap items-center text-base justify-center">
            <div className="mr-5 px-2 rounded-md border">
              <a
                className="mr-4 text-blue-600 font-bold hover:text-blue-900"
                href="#hero"
              >
                Discover
              </a>
              <a className="mr-2 text-black" href="#hero">
                Following
              </a>
            </div>
            <a className="mr-5 text-black" href="#hero">
              News
            </a>
            <a className="mr-5 text-black">Sports</a>
            <a className="mr-5 text-black">Play</a>
            <a className="mr-5 text-black">Money</a>
            <a className="mr-5 text-black">Gaming</a>
            <a className="mr-5 text-black" href="#contact">
              Contact
            </a>
            <button
              className="mr-5 px-2 text-white rounded-md border"
              onClick={() => {
                props.setLogin(false);
                localStorage.removeItem('session_token');
              }}
            >
              Logout
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Header;
