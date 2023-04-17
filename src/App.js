import React from "react";
import AboutModal from "./components/AboutModal";
// import AboutModal from "./components/AboutModal";
// import ModalBox from "./components/Modal";
// import Modal from "./components/Modal";

import Contact from "./components/Contact";

import Footer from "./components/Footer";
import HowItWorks from "./components/HowItWorks";
import NavBar from "./components/Laundry";

import SecondPage from "./components/SecondPage";

import Services from "./components/services";

import Testiminial from "./components/Testiminial";

function App() {
  return (
    <>
      <div className="">
        <NavBar />
        <SecondPage />
        <Testiminial />

        <HowItWorks />
        <Services />
        <Contact />
        <Footer />

        {/*  <ModalBox/> */}

      </div>
    </>
  );
}

export default App;
