import { useState } from "react";
import Logo from "../images/Logo.svg";
import Modal from "react-modal";
import { Link } from "react-scroll";

import PricingModal from "./PricingModal";
import AboutModal from "./AboutModal";

Modal.setAppElement("#root");
const NavBar = () => {
  const [navbar, setNavbar] = useState(false);
  const [princingModal, setPrincingModal] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <nav className="w-full">
        <div className="bg-fff justify-between px-0 lg:px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <a href="javascript:void(0)">
                <img src={Logo} alt="logo" className="ml-4 lg:ml-10 md:ml-0" />
              </a>
              <div className="md:hidden">
                <button
                  className="p-2 relative right-3 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-black"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center relative left-0 md:left-0 lg:left-32  pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-around  space-y-10 ml-2 md:flex md:space-x-6 md:space-y-0 font-nexaRegular">
                <li className="text-black  text-sm">
                  <a
                    href="javascript:void(0)"
                    onClick={() => {
                      setPrincingModal(true);
                    }}
                  >
                    Pricing
                    <i
                      class="bi bi-chevron-down"
                      style={{
                        position: "relative",
                        top: "1px",
                        fontSize: "16px",
                        left: "3px",
                      }}
                    ></i>
                  </a>
                </li>

                <Link spy={true} to="HowItWorks" smooth={true}>
                  <li className="text-black text-lg font-nexaRegular pt-2">
                    <a href="javascript:void(0)">How it works</a>
                  </li>
                </Link>
                <Link spy={true} to="Services" smooth={true}>
                  <li className="text-black text-lg pt-2">
                    <a href="javascript:void(0)">Services</a>
                  </li>
                </Link>
                <li className="text-black text-lg pt-12 relative bottom-20">
                  <a
                    href="javascript:void(0)"
                    onClick={() => {
                      setModalOpen(true);
                    }}
                  >
                    About
                    <i
                      class="bi bi-chevron-down"
                      style={{
                        position: "relative",
                        top: "1px",
                        fontSize: "16px",
                      }}
                    ></i>
                  </a>
                </li>
              </ul>

              <div className="mt-3 space-y-2 lg:hidden md:inline-block relative bottom-14">
                <a
                  href="javascript:void(0)"
                  className="inline-block ml-1 px-4 py-2 text-center text-white bg-black rounded-md  hover:bg-gray-800"
                >
                  Schedule a pickup
                </a>
              </div>
            </div>
          </div>
          <div className="hidden space-x-2 lg:right-16 relative  md:inline-block">
            <a
              href="javascript:void(0)"
              className="px-4 py-2 text-white bg-black rounded-md  hover:bg-gray-800"
            >
              Schedule a pickup
            </a>
          </div>
        </div>
      </nav>

      <Modal
        isOpen={princingModal}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => {
          setPrincingModal(false);
        }}
        style={{
          overlay: {
            backgroundColor: "#C2C2C2",
          },
          content: {
            color: "orange",

            position: "relative",
            left: "10rem",
            top: "20px",
            height: "660px",
            width: "1183px",

            borderRadius: "10px",
          },
        }}
      >
        <PricingModal setPrincingModal={setPrincingModal} />
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
            border: "none",
            backgroundColor: "#c2c2c2",
          },
        }}
      >
        <AboutModal setModalOpen={setModalOpen} />
      </Modal>
    </>
  );
};
export default NavBar;
