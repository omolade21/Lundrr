import React from "react";
import Apple from "../images/Apple.png";
import Google from "../images/Google.png";
import Hero from "../images/Hero.png"
const SecondPage = () => {
  return (
    <div className="overflow-hidden">
      <div class="container mx-0 -my-10  lg:mx-4 lg:-my-2 md:mx-4 md:my-4 bg-fff">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-8">
          <div class="p-0 lg:p-12 md:p-12  mt-10 lg:mt-16">
            <h2 className="text-3xl lg:text-4xl p-0 ml-2 lg:ml-0 md:ml-0 font-semibold lg:p-2 font-nexa" style={{lineHeight:"64px"}}>Laundry and Dry- <br /> Cleaning got easier!</h2>
            <p className="text-base font-normal font-nexaRegular  p-2">
              We offer convenient pickup and delivery options to easy your
              laundry experience.
            </p>

            <div className="flex gap-2 p-2">
              <a href="">
                <img src={Apple} alt="" className="apstore" />
              </a>
              <a href="">
                <img src={Google} alt="" className="googlestore" />
              </a>
            </div>
          </div>
          <div class="p-6 lg:p-4 md:p-4  ">
        <img src={Hero} alt="" srcset=""  className="hero-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
