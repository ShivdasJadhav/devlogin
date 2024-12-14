import React, { useState, useEffect } from "react";
import axios from "axios";

function Articles() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get(`./news.json`)
      .then((res) => setPosts(res.data.articles))
      .catch((e) => console.log("Error fetching data:", e));
  }, []);
  return (
    <div id="news" className="w-10/12 mx-auto py-8">
      <ul>
        <div className="grid gap-6 lg:grid-cols-3 xl:gap-x-12 h-screen overflow-auto no-scrollbar">
          {posts.reverse().map((post) => (
            <li key={post._id}>
              <div className="mb-6 lg:mb-0">
                <div className="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border">
                  <div className="flex">
                    <div
                      className="relative mx-4 -mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg "
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      <img
                        src={post.media}
                        className="w-full border border-2"
                      />
                      <a href="#!">
                        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <h5 className="mb-3 text-sm font-bold">{post.title}</h5>
                    <p className="mb-4 text-neutral-500">
                      <small className="text-xs">
                        Published <u>{post.published_date}</u> by&nbsp;
                        <a href="#!">{post.author}</a>
                      </small>
                    </p>
                    <p className="mb-4 pb-2 text-xs">{post.excerpt}</p>
                    <div className="flex justify-between">
                      <a
                        href={post.link}
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        className="inline-block rounded-full bg-blue-400 bold text-white px-5 pt-2 pb-1 text-xs font-medium uppercase leading-normal "
                      >
                        Read more
                      </a>
                      <div className="flex items-center">
                        <img
                          className="h-3 mx-1 w-auto"
                          src="https://th.bing.com/th/id/OIP.YJI6uzDgHOrtLFKE0HiH4QHaFP?w=275&h=195&c=7&r=0&o=5&pid=1.7"
                        />
                        <small>{post.rank}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
}
export default Articles;
