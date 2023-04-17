import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Frame10 from '../images/Frame10.png'
import Frame11 from '../images/Frame11.png'
import Frame12 from '../images/Frame12.png'
import Frame13 from '../images/Frame13.png'
import Frame14 from '../images/Frame14.png'
import Frame15 from '../images/Frame15.png'
import Frame16 from '../images/Frame16.png'


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default function SliderComponent() {
    return (
        <>
           <Swiper
                pagination={true}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                <div class="p-4   bg-white rounded-lg border border-gray2 mx-auto " style={{width:"300px", height:"294px"}}>
         <img src={Frame10} alt="" />
         <p className="text-base py-4 font-nexa text-gray-800">Dry cleaning</p>
          </div>
                </SwiperSlide>
                <SwiperSlide>
                <div class="p-4  bg-white rounded-lg  border border-gray2 mx-auto" style={{width:"300px", height:"294px"}}>
          <img src={Frame11} alt="" />
          <p className="text-base py-4 text-gray-800 font-nexa">Wash and fold</p>
          </div>
                </SwiperSlide>
                <SwiperSlide>
                <div class="p-4  bg-white rounded-lg  border border-gray2 mx-auto" style={{width:"300px", height:"294px"}}>
           <img src={Frame12} alt="" />
           <p className="text-base py-4 text-gray-800 font-nexa">Ironing</p>
          </div>
                </SwiperSlide>
                <SwiperSlide>
                <div class="p-4  bg-white rounded-lg  border border-gray2 mx-auto" style={{width:"300px", height:"294px"}}>
           <img src={Frame13} alt="" />
           <p className="text-base py-4 text-gray-800 font-nexa">Stain removal/treatment</p>
          </div>
                </SwiperSlide>
                <SwiperSlide>
                <div class="p-4   bg-white rounded-lg border border-gray2 mx-auto" style={{width:"331px", height:"290px"}}>
         <img src={Frame14} alt=""  style={{width:"270px" , height:"220px"}} />
         <p className="text-base py-4 text-gray-800 font-nexa">Office cleaning</p>
          </div>
                </SwiperSlide>
                <SwiperSlide>
                <div class="p-4  bg-white rounded-lg  border border-gray2 mx-auto" style={{width:"331px", height:"290px"}}>
          <img src={Frame15} alt="" style={{width:"270px" , height:"220px"}}  />
          <p className="text-base py-2  text-gray-800 font-nexa">After party clean-up</p>
          </div>
                </SwiperSlide>
                <SwiperSlide>
                <div class="p-4  bg-white rounded-lg  border border-gray2 mx-auto" style={{width:"331px", height:"331px"}}>
           <img src={Frame16} alt="" />
           <p className="text-base py-4 text-gray-800 font-nexa">Suit laundry and treatment</p>
          </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}