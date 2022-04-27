import React from "react";
// import { useEffect } from "react";
// import List from "./List";
import Header from "./pages/Header/header";
import About from "./pages/About/about";
import Contact from "./pages/Contact/contact";
import Footer from "./components/Footer/Footer";
// import Home from "../pages/Home";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import our list of users from users.js
// import users from "./users";

// Pass users array to the List component as a prop
export default function App() {
  // useEffect(() => {
  //   document.body.style.backgroundColor = "yellow";

  //   return () => {
  //     document.body.style.backgroundColor = "white";
  //   };
  // }, []);
  return (
    <div>
      <Header />
      <About />
      <Contact />
      <Footer />
      {/* <Router>
        <Routes>
          <Route path="/test" element={<Home />}></Route>
        </Routes>
      </Router> */}
    </div>
  );
}
