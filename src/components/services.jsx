import React from "react";
import Frame10 from '../images/Frame10.png'
import Frame11 from '../images/Frame11.png'
import Frame12 from '../images/Frame12.png'
import Frame13 from '../images/Frame13.png'
import Frame14 from '../images/Frame14.png'
import Frame15 from '../images/Frame15.png'
import Frame16 from '../images/Frame16.png'

import SliderComponent from "./slides";

const Services = () => {
  return (
    <div className="bg-white" id="Services"> 
      <div className="flex flex-col justify-center items-center py-10 mt-16">
        <div
          className="bg-blue rounded"
          style={{ width: "124px", height: "34px" }}
        >
          <span className="text-blue-2 font-nexa text-base px-6">Services</span>
        </div>
        <h3 className="text-2xl lg:text-3xl font-nexa text-blackk py-5">Our Awesome Services</h3>
        <p
          className="px-4 text-gray text-base font-nexaRegular text-center lg:text-xl lg:flex lg:flex-col"
          style={{ lineHeight: "42px" }}
        >
          <span>We deliver various cleaning services that makes </span>
          <span>your daily routine more convenient and efficient.</span>
        </p>
      </div>
      <div className="px-28 py-8 hidden lg:block md:hidden">
        <div class="mx-10 container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-1 ">
          <div class="p-4  bg-white rounded-lg border border-gray2" style={{width:"281px", height:"264px"}}>
         <img src={Frame10} alt=""  className="  transform 
                                        transition duration-1000 hover:scale-110 " />
         <p className="text-base py-4 font-nexa text-gray-800">Dry cleaning</p>
          </div>
          <div class="p-4  bg-white rounded-lg  border border-gray2" style={{width:"281px", height:"264px"}}>
          <img src={Frame11} alt="" className="  transform 
                                        transition duration-1000 hover:scale-110 "/>
          <p className="text-base py-4 text-gray-800 font-nexa">Wash and fold</p>
          </div>
          <div class="p-4  bg-white rounded-lg  border border-gray2" style={{width:"281px", height:"264px"}}>
           <img src={Frame12} alt="" className="  transform 
                                        transition duration-1000 hover:scale-110 "/>
           <p className="text-base py-4 text-gray-800 font-nexa">Ironing</p>
          </div>
          <div class="p-4  bg-white rounded-lg  border border-gray2" style={{width:"281px", height:"264px"}}>
           <img src={Frame13} alt="" className="  transform 
                                        transition duration-1000 hover:scale-110 " />
           <p className="text-base py-4 text-gray-800 font-nexa">Stain removal/treatment</p>
          </div>
        </div>
      </div>
     
<div className="px-28 pb-20 hidden lg:block md:hidden">
<div class="mx-10 container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-1">
          <div class="p-4   bg-white rounded-lg border border-gray2" style={{width:"381px", height:"381px"}}>
         <img src={Frame14} alt="" className="  transform 
                                        transition duration-1000 hover:scale-110 " />
         <p className="text-base py-4 text-gray-800 font-nexa">Office cleaning</p>
          </div>
          <div class="p-4  bg-white rounded-lg  border border-gray2" style={{width:"381px", height:"381px"}}>
          <img src={Frame15} alt="" className="  transform 
                                        transition duration-1000 hover:scale-110 " />
          <p className="text-base py-4 text-gray-800 font-nexa">After party clean-up</p>
          </div>
          <div class="p-4  bg-white rounded-lg  border border-gray2" style={{width:"381px", height:"381px"}}>
           <img src={Frame16} alt="" className="  transform 
                                        transition duration-1000 hover:scale-110 " />
           <p className="text-base py-4 text-gray-800 font-nexa">Suit laundry and treatment</p>
          </div>
         
        </div>
</div>

<div className="block lg:hidden md:block sm:block ">

<SliderComponent/>
</div>




    </div>
  );
};

export default Services;
