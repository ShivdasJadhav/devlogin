import React from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";
import News from "./components/News";
import Main from "./components/Main";
import About from "./components/About";
import "./App.css";
import "./assets/css/output.css";
function App() {
  return (
    <div className="">
      <Header />
      <Main />
      <News />
      <About />
      <Contact />
    </div>
  );
}
export default App;
