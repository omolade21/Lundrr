import React from "react";
import Frame from "../images/Frame.svg";
import Dowload from "../images/Frame-2.png";
import Search from "../images/Frame-1.png";
import Schedule from "../images/Frame-3.png";
import Frame2 from "../images/Frame-9.png";
import Frame5 from "../images/Frame-5.png";
import Frame6 from "../images/Frame-6.png";
import Frame8 from "../images/Frame-8.png";
import Frame4 from "../images/Frame-4.png";

const HowItWorks = () => {
  return (
    <div id="HowItWorks">
      <div className="flex flex-col justify-center items-center py-10 mt-16">
        <div
          className="bg-blue rounded"
          style={{ width: "124px", height: "34px" }}
        >
          <span className="text-blue-2 font-nexa ml-2 text-base">
            How its work
          </span>
        </div>
        <h3 className="text-xl lg:text-3xl font-nexa text-blackk py-5">
          How Lunddr works
        </h3>
        <p className="text-gray  font-nexaRegular text-center text-lg lg:text-2xl">
          We'll clean and return your clothes in no time
        </p>
      </div>
      <div class="lg:block hidden px-20">
        <div class=" container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-x-1">
          <div class="flex items-center ml-32">
            <img
              className="animate-pulse "
              src={Frame}
              alt="lady"
              style={{ width: "500px", height: "600px" }}
            />
          </div>
          <div class="p-4 mt-14 ml-0 md:ml-0 lg:ml-4 bg-cyan-400 rounded-md flex flex-col">
            <div
              className="bg-blue rounded"
              style={{ width: "124px", height: "34px" }}
            >
              <span className="text-blue-2 font-nexa text-base ml-4 ">
                Schedule
              </span>
            </div>
            <h3 className="text-3xl text-blackk font-nexa font-semibold py-5 test-animate">
              Schedule a pickup
            </h3>
            <p className="text-gray font-nexaRegular text-2xl">
              Tell us about you and your cleaning <br /> needs.
            </p>
            <div className="my-8">
              <div className="flex gap-2">
                <img src={Dowload} alt="" />
                <a className="mt-1 font-nexa text-xl text-gray" href="#">
                  Download Lunddr App
                </a>
              </div>
              <div className="flex gap-2 py-4">
                <img src={Search} alt="" />
                <a className="text-xl font-nexa text-gray" href="#">
                  Search availabe service
                </a>
              </div>
              <div className="flex gap-2">
                <img src={Schedule} alt="" className="animate-pulse" />
                <a className="text-xl font-nexa text-gray" href="#">
                  Book your schedule
                </a>
              </div>
            </div>
          </div>
          <div class="py-10 ml-0 md:ml-0 lg:ml-32 bg-cyan-400 rounded-md flex flex-col">
            <div
              className="bg-blue rounded"
              style={{ width: "124px", height: "34px" }}
            >
              <span className="text-blue-2 font-nexa text-base ml-4">
                Pickup
              </span>
            </div>
            <h3 className="text-3xl font-nexa text-blackk py-5">We pickup</h3>
            <p className="text-gray text-xl font-nexaRegular">
              You tell us your location for pickup
            </p>
            <div className="my-8">
              <div className="flex gap-2">
                <img src={Frame5} alt="" />
                <a className="mt-1 text-xl font-nexa text-gray" href="#">
                  We locate your address
                </a>
              </div>
              <div className="flex gap-2 py-4">
                <img src={Frame6} alt="" />
                <a className="text-xl font-nexa text-gray" href="#">
                  Collect the clothes
                </a>
              </div>
              <div className="flex gap-2">
                <img src={Frame6} alt="" />
                <a className="text-xl font-nexa text-gray" href="#">
                  We launder the clothes
                </a>
              </div>
            </div>
          </div>
          <div class="flex items-center -ml-2 -mt-10">
            <img
              src={Frame2}
              className="animate-pulse"
              alt="lady"
              style={{ width: "500px", height: "600px" }}
            />{" "}
          </div>
          <div class="flex items-center relative left-32 -top-4">
            <img
              src={Frame4}
              className="animate-pulse"
              alt="lady"
              style={{ width: "500px", height: "600px" }}
            />
          </div>
          <div class="p-4 mt-14 ml-0 md:ml-0 lg:ml-8 bg-cyan-400 rounded-md flex flex-col">
            <div
              className="bg-blue rounded"
              style={{ width: "124px", height: "34px" }}
            >
              <span className="text-blue-2 font-nexa text-base ml-4">
                Delivery
              </span>
            </div>
            <h3 className="text-3xl text-blackk font-nexa py-5">We deliver</h3>
            <p className="text-gray text-2xl font-nexaRegular">
              Tell us about you and your cleaning <br /> needs.
            </p>
            <div className="my-8">
              <button class="font-nexaRegular border border-blackk hover:cursor-pointer hover:bg-blue-2 ease-in duration-300 hover:border-none hover:text-fff btn-top  text-black text-lg py-2 px-4 rounded">
                Schedule a pickup
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:hidden block px-6">
        <div class=" container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-x-1">
          <div class="bg-cyan-400 rounded-md flex flex-col">
            <div
              className="bg-blue rounded"
              style={{ width: "124px", height: "34px" }}
            >
              <span className="font-nexa text-blue-2 text-base ml-4">
                Schedule
              </span>
            </div>
            <h3 className="text-xl font-nexa text-blackk py-5">
              Schedule a pickup
            </h3>
            <p className="text-gray text-lg font-nexaRegular">
              Tell us about you and your cleaning needs.
            </p>
            <div className="my-8">
              <div className="flex gap-2">
                <img src={Dowload} alt="" className="animate-pulse" />
                <a className="mt-1 font-nexa text-lg text-gray" href="#">
                  Download Lunddr App
                </a>
              </div>
              <div className="flex gap-2 py-4">
                <img src={Search} alt="" />
                <a className="text-lg font-nexa text-gray" href="#">
                  Search available service
                </a>
              </div>
              <div className="flex gap-2">
                <img src={Schedule} alt="" />
                <a className="text-lg font-nexa text-gray" href="#">
                  Book your schedule
                </a>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-center">
            <img
              src={Frame}
              className="animate-pulse"
              alt="lady"
              style={{ width: "358px", height: "395px" }}
            />
          </div>
          <div class="pt-10 bg-cyan-400 rounded-md flex flex-col">
            <div
              className="bg-blue rounded"
              style={{ width: "124px", height: "34px" }}
            >
              <span className="text-blue-2 text-base font-nexa ml-4">
                Pickup
              </span>
            </div>
            <h3 className="text-2xl text-blackk py-5 font-nexa">We pickup</h3>
            <p className="text-gray text-lg font-nexaRegular">
              You tell us your location for pickup
            </p>
            <div className="my-8">
              <div className="flex gap-2">
                <img src={Frame5} alt="" className="animate-pulse" />
                <a className="mt-1 font-nexa text-lg text-gray" href="#">
                  We locate your address
                </a>
              </div>
              <div className="flex gap-2 py-4">
                <img src={Frame6} alt="" />
                <a className="text-lg font-nexa text-gray" href="#">
                  Collect the clothes
                </a>
              </div>
              <div className="flex gap-2">
                <img src={Frame6} alt="" />
                <a className="text-lg font-nexa text-gray" href="#">
                  We launder the clothes
                </a>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-center">
            <img
              src={Frame2}
              className="animate-pulse"
              alt="lady"
              style={{ width: "423px", height: "376px" }}
            />{" "}
          </div>

          <div class="pt-4 bg-cyan-400 rounded-md flex flex-col">
            <div
              className="bg-blue rounded"
              style={{ width: "124px", height: "34px" }}
            >
              <span className="text-blue-2 font-nexa text-base ml-4">
                Delivery
              </span>
            </div>
            <h3 className="text-xl text-blackk py-5 font-nexa">We deliver</h3>
            <p className="text-gray font-nexaRegular text-base">
              Tell us about you and your cleaning needs.
            </p>
            <div className="my-8">
              <button class=" border font-nexaRegular border-blackk  text-black text-lg py-2 px-2 hover:cursor-pointer hover:bg-blue-2 ease-in duration-300 hover:border-none hover:text-fff">
                Schedule a pickup
              </button>
            </div>
          </div>
          <div class="flex items-center justify-center">
            <img
              src={Frame4}
              alt="lady"
              style={{ width: "410px", height: "396px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
