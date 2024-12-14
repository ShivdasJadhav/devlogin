import "./Main.css";
import Login from "./Login";
import Register from "./Register";
import { useState } from "react";
const Main = (props) => {
  const [form, setLogin] = useState(<Login setLogin={props.setLogin} />);
  const [loginClick, setLoginClick] = useState("clicked");
  const [registerClick, setRegisterClick] = useState("unclicked");
  const LoginPage = () => {
    setLogin(<Login setLogin={props.setLogin} />);
    setLoginClick("clicked");
    setRegisterClick("unclicked");
  };
  const RegisterPage = () => {
    setLogin(<Register setLogin={props.setLogin} />);
    setRegisterClick("clicked");
    setLoginClick("unclicked");
  };
  return (
    <section id="hero" className="mb-20">
      <div className="px-6 md:px-12 text-gray-800 text-center lg:text-left">
        <div className="container mx-auto xl:px-32">
          <div className="grid lg:grid-cols-2 mb-20 gap-12 mt-28 flex h-fit items-center">
            <div className="mt-12 lg:mt-0">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-12">
                Empowering Businesses<span className="text-blue-600">,</span>
                <br />
                <span className="text-blue-600"> Fueling Growth.</span>
              </h1>
              <p className="text-gray-600">
                A good developer is a maestro of the digital realm,
                orchestrating a symphony of code and creativity to build
                remarkable digital experiences. Possessing an insatiable
                curiosity and a relentless drive for improvement, they are
                perpetual learners, constantly seeking to enhance their skills
                and stay ahead of the ever-evolving technological landscape.
              </p>
            </div>
            <div className="mb-12 lg:mb-0">
              <div
                id="form"
                className="block round-lg shadow-lg shadow-blue-500/50 bg-white px-6 py-12 md:px-12"
              >
                {form}
              </div>
              <div className="signBtn">
                <a
                  id={loginClick}
                  onClick={LoginPage}
                  className="mr-5 h-10 hover:text-gray-900"
                  style={{ borderRadius: "0 0 0 0.5rem" }}
                >
                  Sign In
                </a>
                <a
                  id={registerClick}
                  onClick={RegisterPage}
                  className="mr-5 h-10 hover:text-gray-900"
                  style={{ borderRadius: "0 0 0.5rem 0" }}
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Main;
