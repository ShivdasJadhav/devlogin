import React, { useState, useEffect } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";
import News from "./components/News.jsx";
import Main from "./components/Main";
import About from "./components/About";
import Private from "./components/private";
import "./App.css";
import "./assets/css/output.css";
function App() {
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("session_token");
    if (token === "recruiter_in") {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, []);
  return (
    <div className="">
      {isLogin ? (
        <Private setLogin={setLogin} />
      ) : (
        <>
          <Header />
          <Main setLogin={setLogin} />
          <News />
          <About />
        </>
      )}
      <Contact />
    </div>
  );
}
export default App;
