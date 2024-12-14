import React from "react";
import BussinessImg from "../assets/imgs/bgimg2.png";
import manIcon from "../assets/imgs/manIcon.jpg";
function About() {
  return (
    <section id="about" className="text-gray-600 my-10 body-font h-fit">
      <div className="container px-5 py-24 mx-auto flex flex-col">
      <h2 className="mb-12 pb-4 text-center text-3xl font-bold">About us</h2>

        <div className="lg:w-4/6 mx-auto">
          <img
            alt="content"
            className="object-cover w-88 rounded-xl shadow-lg shadow-blue-500/50 mx-auto object-center h-full w-full"
            src="https://journeyofquality.files.wordpress.com/2021/04/test-automation-code-review.png"
          />
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <img
                  alt="content"
                  className="object-cover rounded-full object-center h-full w-full"
                  src={manIcon}
                />
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-sm">
                  <a href="www.linkedin.com/in/shivdas-s-jadhav-7b8096210">@JadhavShivdas</a>
                </h2>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p className="text-sm"><i>
                  “Past doesn't matter, Future do not exists and the Present is what people never want to continue with.”</i>
                </p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed mb-4 text-justify text-sm">
                Hey there! its a simple React application I have build to work with interesting Libraries of React.
                I have used <b><i>'Yup Resolver'</i></b> to manage my States and values of input streams gathered from user and also to provide validations on the values before submission.
                I have implemented some logic to flip from Login to Register components and vice versa. also I have used <b><i>'Axios'</i></b> here to implement API requests and represented the information fetched in the form of Articles.
                Note here that this is not a Fullstack application it consist some javascript logic to respond on value submission in above forms.
              </p>
              <a className="text-white px-2 rounded-md bg-blue-400 inline-flex items-center" href="https://www.linkedin.com/in/shivdas-jadhav-7b8096210/">
                Developer
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
