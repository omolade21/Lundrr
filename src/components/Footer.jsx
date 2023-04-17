import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import Logo from "../images/Logo.svg";
import ContactUsMoadal from "./ContactUsMoadal";
import AccodionModal from "./Accodion";
import AboutModal from "./AboutModal";
import PricingModal from "./PricingModal";

const Footer = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [accodionModal, setAccodionModal] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [princingModal, setPrincingModal] = useState(false);

  return (
    <>
      <div>
        {/* Laptop size */}
        <footer class="bg-white  lg:text-left mt-10 lg:block hidden">
          <div class=" p-1 lg:p-6">
            <div class=" lg:ml-28 ml-2 my-6 grid md:grid-cols-2 lg:grid-cols-4">
              <div class="mb-6 relative font-nexaRegular -left-0 lg:-left-12 md:-left-0">
                <a href="">
                  <img src={Logo} alt="" className="logo" />
                </a>

                <span
                  className="text-base font-nexaRegular text-gray relative top-4"
                  style={{ lineHeight: "42px" }}
                >
                  Welcome to our laundry services! We offer a range of
                  high-quality laundry and dry cleaning services to meet all of
                  your needs. read more...
                </span>
              </div>

              <div class="mb-6 ml-10 font-nexaRegular">
                <h5 class="mb-2.5 text-base ">Our Services</h5>

                <ul
                  class="list-none font-nexaRegular text-base"
                  style={{ lineHeight: "42px" }}
                >
                  <li>
                    <a href="#!" class="text-base text-gray">
                      Dry Cleaning
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-base text-gray">
                      Wash and fold
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-base text-gray">
                      Ironing
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-base text-gray">
                      Stain removal
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-base text-gray">
                      Office cleaning
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-base text-gray">
                      After party clean-up
                    </a>
                  </li>
                </ul>
              </div>

              <div class="mb-6">
                <h5 class="mb-2.5 text-base font-nexaRegular">Follow us</h5>

                <ul
                  class="mb-0 list-none font-nexaRegular  "
                  style={{ lineHeight: "42px" }}
                >
                  <li>
                    <a href="#!" class="text-base text-gray">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-base text-gray">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-base text-gray">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-base text-gray">
                      Linkedin
                    </a>
                  </li>
                </ul>
              </div>

              <div class="mb-6">
                <h5 class="mb-2.5 font-nexaRegular text-base">Company</h5>

                <ul
                  class="mb-0 list-none font-nexaRegular "
                  style={{ lineHeight: "42px" }}
                >
                  <li>
                    <button
                      class="text-base text-gray"
                      onClick={() => {
                        setModalOpen(true);
                      }}
                    >
                      About us
                    </button>
                  </li>
                  <li>
                    <button class="text-base text-gray">Why Lunddr?</button>
                  </li>
                  <li>
                    <button
                      class="text-base text-gray"
                      onClick={() => {
                        setPrincingModal(true);
                      }}
                    >
                      Pricing
                    </button>
                  </li>
                  <li>
                    <button
                      class="text-base text-gray"
                      onClick={() => {
                        setModalIsOpen(true);
                      }}
                    >
                      Contact us
                    </button>
                  </li>
                  <li>
                    <button
                      class="text-base text-gray"
                      onClick={() => {
                        setAccodionModal(true);
                      }}
                    >
                      FAQ
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr
            class="h-px border border-gray2 mx-auto"
            style={{ width: "1184px" }}
          />
          <div class="p-4 text-center">
            <p className="text-gray font-nexaRegular text-base py-8">
              {" "}
              © 2023 Lunddr. All rights reserved.
            </p>
          </div>
        </footer>
        {/* laptop size */}

        {/* mobile start */}
        <footer class="bg-white  lg:text-left my-10 block lg:hidden">
          <div class=" p-1 lg:p-6">
            <div class=" lg:ml-28 ml-2 my-6 grid md:grid-cols-2 lg:grid-cols-4">
              <div class="mb-6 ml-4 lg:ml-10">
                <h5 class="mb-2.5  font-nexaRegular text-black text-xl lg:text-2xl">
                  Our Services
                </h5>

                <ul
                  class="list-none font-nexaRegular"
                  style={{ lineHeight: "42px" }}
                >
                  <li>
                    <a href="#!" class="text-base text-gray">
                      Dry Cleaning
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-base text-gray">
                      Wash and fold
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-base text-gray">
                      Ironing
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-base text-gray">
                      Stain removal
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-base text-gray">
                      Office cleaning
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-base text-gray">
                      After party clean-up
                    </a>
                  </li>
                </ul>
              </div>

              <div class="mb-6 ml-4 lg:ml-10 font-nexaRegular">
                <h5 class="mb-2.5  text-black text-xl lg:text-2xl">
                  Follow us
                </h5>

                <ul
                  class="mb-0 list-none font-nexaRegular "
                  style={{ lineHeight: "42px" }}
                >
                  <li>
                    <a href="#!" class="text-base text-gray">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-base text-gray">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-base text-gray">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-base text-gray">
                      Linkedin
                    </a>
                  </li>
                </ul>
              </div>

              <div class="mb-6 ml-4 lg:ml-10 font-nexaRegular">
                <h5 class="mb-2.5  text-black text-xl lg:text-2xl">Company</h5>

                <ul class="mb-0 list-none" style={{ lineHeight: "42px" }}>
                  <li>
                    <a href="#!" class="text-base text-gray">
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-base text-gray">
                      Why Lunddr?
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-base text-gray">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-base text-gray">
                      Contact us
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-base text-gray">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
              <div class="mb-6">
                <a href="">
                  <img src={Logo} alt="" className="logo" />
                </a>

                <p
                  className="text-sm text-gray px-2 py-4 font-nexaRegular"
                  style={{ lineHeight: "42px" }}
                >
                  Welcome to our laundry services! We offer a range of
                  high-quality laundry and dry cleaning services to meet all of
                  your needs. read more...
                </p>
              </div>
            </div>
          </div>
          <hr
            class="h-px border border-gray2 mx-auto"
            style={{ width: "1184px" }}
          />
          <div class="p-4 text-center">
            <p className="text-gray text-sm lg:text-base pt-8 font-nexaRegular">
              {" "}
              © 2023 Lunddr. All rights reserved.
            </p>
          </div>
        </footer>
        {/* mobile end */}
      </div>

      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => {
          setModalIsOpen(false);
        }}
        style={{
          overlay: {
            backgroundColor: "#C2C2C2",
            position: "fixed",
            width: "100%",
          },
          content: {
            borderRadius: "10px",
            width: "1100px",
            position: "absolute",
            overflow: "auto",
            left: "200px",
            right: "100px",
            bottom: "10px",
            paddingTop:"20px"
          },
        }}
      >
        <ContactUsMoadal setModalIsOpen={setModalIsOpen}/>
      </Modal>

      <Modal
        isOpen={accodionModal}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => {
          setAccodionModal(false);
        }}
        style={{
          overlay: {
            backgroundColor: "#C2C2C2",
            position: "fixed",
            width: "100%",
          },
          content: {
            borderRadius: "10px",
            width: "1100px",
            position: "absolute",
            overflow: "auto",
            left: "200px",
            right: "100px",
            bottom: "20px",
          },
        }}
      >
       <AccodionModal  setAccodionModal={setAccodionModal}/>
      </Modal>

      <Modal
        isOpen={modalOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => {
          setModalOpen(false);
        }}
        style={{
          overlay: {
            backgroundColor: "#C2C2C2",
          },
          content: {
            color: "orange",
            border:"none",
            backgroundColor:"#c2c2c2"
          },
        }}
      >
       <AboutModal  setModalOpen={setModalOpen}/>
      </Modal>

      <Modal
        isOpen={princingModal}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => {
          setPrincingModal(false);
        }}
        style={{
          overlay: {
            backgroundColor: "#C2C2C2",
            position:"fixed",
            width:"2500px"
          },
          content: {
            borderRadius: "10px",
            width: "1200px",
            position: "absolute",
   
            left: "200px",
            right: "100px",
      
        
          },
        }}
      >
        <PricingModal setPrincingModal={setPrincingModal}/>
      </Modal>
    </>
  );
};

export default Footer;
