import React from "react";
import Apple from "../images/Apple.png";
import Google from "../images/Google.png";
import Smartphone from "../images/smartphone.png";
import Brandpattern from "../images/Brandpattern.png";
import BrandpatternMobile from "../images/Brandpattern2.png";


const Contact = () => {
  return (
    <div className="px-0 py-1 lg:px-20 lg:py-6">
      <div className="bg-royal rounded-lg mx-auto box-contact">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-8">
          <div class="p-4 lg:p-12">
            <h2 className="text-3xl p-2 font-nexa text-white-color">
              Start using laundry <br /> app in a jiffy!
            </h2>
            <p className="text-base font-nexaRegular p-2 text-white-color">
              You can download Lunddr app below for maximum experience
            </p>

            <div className="flex gap-2 p-2 lg:mt-0 mt-6">
              <a href="">
                <img src={Apple} alt="" className="apstore" />
              </a>
              <a href="">
                <img src={Google} alt="" className="googlestore" />
              </a>
            </div>
          </div>
          <div className="">
          <img src={Brandpattern} alt="Brandpattern" className="relative bottom-8 md:hidden hidden lg:block" />
          <img src={BrandpatternMobile} alt=""  className="relative md:block block lg:hidden top-24"  />
          <img src={Smartphone} alt="smartphone" className="relative bottom-96 left-20 md:hidden hidden lg:block"  />
          <img src={Smartphone} alt="smartphone" className="relative  md:block block lg:hidden bottom-60"  />
          </div>
          <div class="relative bottom-72 ">
        
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
