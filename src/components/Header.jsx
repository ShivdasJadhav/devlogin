import "./Header.css";
import maleIcon from "../imgs/manIcon.jpg";
import Register from "./Register";
const Header = () => {
  return (
    <>
      <header
        id="nav"
        className="sticky top-0 w-full text-gray-600 body-font rounded-br-xl rounded-bl-xl"
      >
        <div className="container mx-auto flex flex-wrap w-full p-5 bg-blue-400 flex-col md:flex-row items-center rounded-br-xl rounded-bl-xl">
          <a className="flex title-font font-medium items-center text-white lg mb-4 md:mb-0">
            <img src={maleIcon} alt="" className="w-10 h-10 text-white rounded-full"/>
            <span className="ml-3 text-xl">DevLogin</span>
          </a>
          
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900" href="#hero">
              Home
            </a>
            <a className="mr-5 hover:text-gray-900" href="#news">
              Articles
            </a>
            <a className="mr-5 hover:text-gray-900" href="#about">
              About
            </a>
            <a className="mr-5 hover:text-gray-900" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Header;
