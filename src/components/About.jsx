import React from "react";
import BussinessImg from "../imgs/bgimg2.png";
import manIcon from "../imgs/manIcon.jpg";
function About() {
  return (
    <section id="about" className="text-gray-600 my-10 body-font h-fit">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
            <img
              alt="content"
              className="object-cover w-88 rounded-xl shadow-lg shadow-blue-500/50 mx-auto object-center h-full w-full"
              src={BussinessImg}
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
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                  @JadhavShivdas
                </h2>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p className="text-base">
                “The best way to predict the future is to create it.”<br/>
                 – Peter Drucker, Management Consultant and Author
                </p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4">
                When individuals or businesses alike are looking for tech
                products or tech-based solutions, the first and foremost thing
                they do is run an online search. Both customer segments
                automatically assume that given the nature of the product or
                service, a robust online presence is mandatory for a sound tech
                company. But just a significant online presence is not enough.
                For a tech company to succeed, it must have a comprehensive
                marketing strategy that utilizes all online channels to stand
                out from its competitors. And within this marketing strategy,
                content is critical. 
              </p>
              <a className="text-indigo-500 inline-flex items-center">
                Learn More
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
