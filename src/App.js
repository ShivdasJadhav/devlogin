import React from "react";
import './App.css';
import Contact from "./components/Contact";
import Header from "./components/Header";
import Prising from "./components/Pricing";
import Main from "./components/Main"
import About from "./components/About";
import image from "./imgs/bgimg1.jpg";
function App(){
	// bg-gradient-to-br from-blue-300 to-purple-300
	return(
	<div className="">
	<Header/>
	<Main/>
	<About/>
	<Prising/>
	<Contact/>
	</div>
	);
}
export default App;