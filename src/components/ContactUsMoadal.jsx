import React from "react";
import Icon from "../images/icon1.png";
import Icon2 from "../images/icon2.png";
import Icon3 from "../images/icon3.png";
import Facebook from "../images/Facebookicon.png";
import Instagram from "../images/Twittericon.png";
import Twitter from "../images/Instagramicon.png";
import Linkedin from "../images/Linkedinicon.png";
import Map from "../images/Frame18.png";
import { BsXLg } from "react-icons/bs";
const ContactUsMoadal = ( { setModalIsOpen}) => {
  return  (
    <>
    <div className="">
          <div className="flex justify-between mt-4">
            <div
              className="bg-blue rounded mx-10"
              style={{ width: "124px", height: "34px" }}
            >
              <span className="text-blue-2 font-nexa ml-2 text-base flex justify-center items-center">
                Contact
              </span>
            </div>

            <div
              className="bg-blue rounded flex justify-center items-center relative right-10"
              style={{ width: "42px", height: "42px" }}
            >
              <button
                onClick={() => {
                  setModalIsOpen(false);
                }}
              >
                {" "}
                <BsXLg color="#6838FE" fontSize="20px" />
              </button>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-8">
            <div className="p-0">
              <h3 className="text-xl font-nexa text-blackk pt-4 mx-10">
                We’ll love to hear from you,
                <br /> Get in touch.
              </h3>

              <div className="flex gap-2 mt-4 mx-10">
                <div className="mt-1">
                  <img src={Icon} alt="location icon" />
                </div>

                <div className="flex flex-col">
                  <span className="text-base font-nexaRegular text-gray">
                    Shop 100, Omida Mall, Ibara, Abeokuta,
                  </span>
                  <span className="text-base font-nexaRegular text-gray">
                    Ogun state.
                  </span>
                </div>
              </div>

              <div className="flex gap-2 mt-2 mx-10">
                <div className="mt-1">
                  <img src={Icon2} alt="location icon" />
                </div>

                <div className="flex flex-col">
                  <span className="text-base font-nexaRegular text-gray">
                    +234 706 807 4131
                  </span>
                  <span className="text-base font-nexaRegular text-gray">
                    +234 905 179 2049
                  </span>
                </div>
              </div>

              <div className="flex gap-6 relative left-10">
                <div className="flex gap-2 mt-2 ml-1">
                  <div className="mt-1 -ml-1">
                    <img src={Icon3} alt="location icon" />
                  </div>

                  <div className="">
                    <span className="text-base font-nexaRegular text-gray">
                      info@lunddr.com
                    </span>
                  </div>
                </div>

                <div className="flex">
                  <div
                    className="border border-gray relative top-2"
                    style={{ width: "0px", height: "33px" }}
                  ></div>
                  <div className="flex gap-2 mt-3 ml-3">
                    <a href="#">
                      {" "}
                      <img src={Facebook} alt="Facebook" />
                    </a>
                    <a href="#">
                      <img src={Twitter} alt="Facebook" />
                    </a>

                    <a href="#">
                      {" "}
                      <img src={Instagram} alt="Facebook" />
                    </a>
                    <a href="#">
                      <img src={Linkedin} alt="Linkedin" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 mx-10">
                <img src={Map} alt="Map" />
              </div>
            </div>
            <div className="relative">
              <div className="w-full max-w-xs">
                <form class="px-8 pt-4">
                  <div className="mb-4">
                    <label
                      class="block text-darkBlack text-sm font-normal"
                      for="name"
                    >
                      Name
                    </label>
                    <input
                      class="appearance-none border border-gray200 rounded w-full py-1 px-3 text-gray300  font-normal text-xs"
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      style={{ width: "328px", height: "32px" }}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      class="block text-darkBlack text-sm font-normal"
                      for="email"
                    >
                      Email
                    </label>
                    <input
                      class="appearance-none border border-gray200 rounded w-full py-1 px-3 text-gray300  font-normal text-xs"
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      style={{ width: "328px", height: "32px" }}
                    />
                  </div>
                  <label
                    for="countries"
                    class="block text-darkBlack text-sm font-normal"
                  >
                    What are you interested in
                  </label>
                  <select
                    id="countries"
                    class=" px-2 bg-fff border-2 border-lightBlue text-gray300 text-sm rounded  dark:placeholder-lightBlue  dark:focus:ring-lightBlue dark:focus:border-lightBlue focus:ring-lightBlue focus:border-lightBlue block"
                    style={{ width: "328px", height: "32px" }}
                  >
                    <option selected>Laundfri</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>

                  <div class="">
                    <div class="mt-3">
                      <label
                        for="comment"
                        className="block text-darkBlack text-sm font-normal"
                      >
                        Message
                      </label>
                      <textarea
                        id="comment"
                        rows="4"
                        class="px-2 mb-4 border border-gray400 rounded bg-fff text-sm text-gray400"
                        placeholder="Let us know how we can help"
                        required
                        style={{ width: "328px", height: "89px" }}
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="button"
                    class=" bg-blue300 rounded hover:bg-blue-800 text-sm font-medium text-fff"
                    style={{ width: "328px", height: "32px" }}
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
    </>
  ) 
};

export default ContactUsMoadal;
