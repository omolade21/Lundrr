import React from "react";
import Group from "../images/Group.svg";
import image from "../images/image.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Testiminial = () => {
  return (
    <div>
      <div className="bg-blue w-full">
        <p className="text-center text-base font-nexa text-bluish p-6">
          Testimonies
        </p>
        <div className="flex justify-center lg:justify-center  lg:items-center p-0 lg:p-6 md:p-6">
          <h5
            className=" text-blackk text-2xl font-nexa font-medium lg:text-4xl md:text-3xl  text-center lg:flex lg:flex-col"
            style={{ lineHeight: "50px" }}
          >
            <span>You are not alone, see how we </span>
            <span>have been able to put smiles on </span>
            <span>our customers face.</span>
          </h5>
        </div>
        <div className=" flex lg:justify-center lg:items-center px-1 lg:p-6 md:p-6">
          <h5
            className="font-nexaRegular text-gray text-base lg:text-2xl md:text-2xl text-center lg:flex lg:flex-col"
            style={{ lineHeight: "42px" }}
          >
            <span>Read what our customers have to say about </span>
            <span>their experience using Lunddr.</span>
          </h5>
        </div>

        <div className="mx-auto my-16 flex justify-between items-center div-box">
          <img src={Group} alt="" className="group-img" />
          <div
            className="flex flex-col"
            style={{ width: "120px", height: "64px" }}
          >
            <span className="font-nexa font-medium text-blackk text-xl lg:text-2xl md:text-2xl ml-2 lg:ml-0">
              2,500+
            </span>
            <span className=" font-nexaRegular text-gray text-sm lg:text-base md:text-base mt-1">
              Happy Users
            </span>
          </div>

          <div className="w-0  h-16 bg-gray2 border border-gray2 relative left-3"></div>
          <div
            className="flex flex-col ml-6"
            style={{ width: "134px", height: "60px" }}
          >
            <span className="font-nexa font-medium text-blackk text-xl lg:text-2xl md:text-2xl ml-4">
              4.8/5
            </span>
            <div className="flex gap-2">
              <span>
                <i
                  class="bi bi-star-fill"
                  style={{ color: "#E5C100", fontSize: "12px" }}
                ></i>
                <i
                  class="bi bi-star-fill"
                  style={{ color: "#E5C100", fontSize: "12px" }}
                ></i>
                <i
                  class="bi bi-star-fill"
                  style={{ color: "#E5C100", fontSize: "12px" }}
                ></i>
                <i
                  class="bi bi-star-fill"
                  style={{ color: "#E5C100", fontSize: "12px" }}
                ></i>
                <i
                  class="bi bi-star-fill"
                  style={{ color: "#FAF7E6", fontSize: "12px" }}
                ></i>
              </span>
              <span className="text-gray  font-nexaRegular mt-1 lg:mt-0 md:mt-0 text-sm lg:text-base md:text-base">
                Rating
              </span>
            </div>
          </div>
        </div>
        {/* section 3 start */}
        <div class="px-20 mt-20 md:hidden lg:block hidden">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-x-1 lg:gap-y-4">
            <div
              class="py-4 bg-white hover:shadow-xl cursor-pointer rounded-md hover:-translate-y-4 duration-300"
              style={{ width: "281px", height: "200px" }}
            >
              <span className="flex gap-2 mx-3">
                <i
                  class="bi bi-star-fill"
                  style={{ color: "#E5C100", fontSize: "22px" }}
                ></i>
                <i
                  class="bi bi-star-fill"
                  style={{ color: "#E5C100", fontSize: "22px" }}
                ></i>
                <i
                  class="bi bi-star-fill"
                  style={{ color: "#E5C100", fontSize: "22px" }}
                ></i>
                <i
                  class="bi bi-star-fill"
                  style={{ color: "#E5C100", fontSize: "22px" }}
                ></i>
                <i
                  class="bi bi-star-fill"
                  style={{ color: "#E5C100", fontSize: "22px" }}
                ></i>
              </span>
              <p className="mx-3 text-xs text-gray">
                Anytime I send my laundry out to Lunddr, I get treated nicely
                and my family loves to see it because I get to spend more time
                with them.
              </p>

              <div className="flex mx-3 my-2 gap-2">
                <div className="w-8 h-8 bg-gray-3 rounded-full"></div>
                <div className="flex flex-col pt-1">
                  <span className="text-xs text-black-1">Balogun Rukayat</span>
                  <span className="text-gray" style={{ fontSize: "8px" }}>
                    Balogun Rukayat
                  </span>
                </div>
              </div>
            </div>
            <div
              class=" py-4 bg-white hover:shadow-xl cursor-pointer rounded-md hover:-translate-y-4 duration-300"
              style={{ width: "281px", height: "200px" }}
            >
              <span className="flex gap-2 mx-3">
                <i
                  class="bi bi-star-fill"
                  style={{ color: "#E5C100", fontSize: "22px" }}
                ></i>
                <i
                  class="bi bi-star-fill"
                  style={{ color: "#E5C100", fontSize: "22px" }}
                ></i>
                <i
                  class="bi bi-star-fill"
                  style={{ color: "#E5C100", fontSize: "22px" }}
                ></i>
                <i
                  class="bi bi-star-fill"
                  style={{ color: "#E5C100", fontSize: "22px" }}
                ></i>
                <i
                  class="bi bi-star-fill"
                  style={{ color: "#E5C100", fontSize: "22px" }}
                ></i>
              </span>
              <p className="mx-3 text-xs text-gray">
              Using Lunddr for my laundry has been one of the best decisions 
            I have ever made. They are professional and delivers quality service.
              </p>

              <div className="flex mx-3 my-2 gap-2">
                <div className="w-8 h-8 bg-gray-3 rounded-full"></div>
                <div className="flex flex-col pt-1">
                  <span className="text-xs text-black-1">Balogun Rukayat</span>
                  <span className="text-gray" style={{ fontSize: "8px" }}>
                    Balogun Rukayat
                  </span>
                </div>
              </div>
            </div>
            <div
              class=" py-4 bg-white hover:shadow-xl cursor-pointer rounded-md hover:-translate-y-4 duration-300"
              style={{ width: "281px", height: "200px" }}
            >
              <span className="flex gap-2 mx-3">
                <i
                  class="bi bi-star-fill"
                  style={{ color: "#E5C100", fontSize: "22px" }}
                ></i>
                <i
                  class="bi bi-star-fill"
                  style={{ color: "#E5C100", fontSize: "22px" }}
                ></i>
                <i
                  class="bi bi-star-fill"
                  style={{ color: "#E5C100", fontSize: "22px" }}
                ></i>
                <i
                  class="bi bi-star-fill"
                  style={{ color: "#E5C100", fontSize: "22px" }}
                ></i>
                <i
                  class="bi bi-star-fill"
                  style={{ color: "#E5C100", fontSize: "22px" }}
                ></i>
              </span>
              <p className="mx-3 text-xs text-gray">
              Neatly packed clothes, timely delivery and warm reception are the three qualities I see in Lunddr.
              </p>

              <div className="flex mx-3 my-2 gap-2">
                <div className="w-8 h-8 bg-gray-3 rounded-full"></div>
                <div className="flex flex-col pt-1">
                  <span className="text-xs text-black-1">Balogun Rukayat</span>
                  <span className="text-gray" style={{ fontSize: "8px" }}>
                    Balogun Rukayat
                  </span>
                </div>
              </div>
            </div>
            <div
              class=" py-4 bg-white hover:shadow-xl cursor-pointer rounded-md hover:-translate-y-4 duration-300"
              style={{ width: "281px", height: "200px" }}
            >
              <span className="flex gap-2 mx-3">
                <i
                  class="bi bi-star-fill"
                  style={{ color: "#E5C100", fontSize: "22px" }}
                ></i>
                <i
                  class="bi bi-star-fill"
                  style={{ color: "#E5C100", fontSize: "22px" }}
                ></i>
                <i
                  class="bi bi-star-fill"
                  style={{ color: "#E5C100", fontSize: "22px" }}
                ></i>
                <i
                  class="bi bi-star-fill"
                  style={{ color: "#E5C100", fontSize: "22px" }}
                ></i>
                <i
                  class="bi bi-star-fill"
                  style={{ color: "#E5C100", fontSize: "22px" }}
                ></i>
              </span>
              <p className="mx-3 text-xs text-gray">
              With Lunddr,less is more! I get to do my laundry at a very affordable price and still get the best service from them.
              </p>

              <div className="flex mx-3 my-2 gap-2">
                <div className="w-8 h-8 bg-gray-3 rounded-full"></div>
                <div className="flex flex-col pt-1">
                  <span className="text-xs text-black-1">Balogun Rukayat</span>
                  <span className="text-gray" style={{ fontSize: "8px" }}>
                    Balogun Rukayat
                  </span>
                </div>
              </div>
            </div>

            <div
              class=" py-4 bg-white hover:shadow-xl cursor-pointer rounded-md hover:-translate-y-2 duration-300"
              style={{ width: "281px", height: "200px" }}
            >
              <span className="flex gap-2 mx-3">
                <i
                  class="bi bi-star-fill"
                  style={{ color: "#E5C100", fontSize: "22px" }}
                ></i>
                <i
                  class="bi bi-star-fill"
                  style={{ color: "#E5C100", fontSize: "22px" }}
                ></i>
                <i
                  class="bi bi-star-fill"
                  style={{ color: "#E5C100", fontSize: "22px" }}
                ></i>
                <i
                  class="bi bi-star-fill"
                  style={{ color: "#E5C100", fontSize: "22px" }}
                ></i>
                <i
                  class="bi bi-star-fill"
                  style={{ color: "#E5C100", fontSize: "22px" }}
                ></i>
              </span>
              <p className="mx-3 text-xs text-gray">
                Read what they have to say about their experiences using our
                App. Read what they have to say about their experiences using
                our App.
              </p>

              <div className="flex mx-3 my-2 gap-2">
                <div className="w-8 h-8 bg-gray-3 rounded-full"></div>
                <div className="flex flex-col pt-1">
                  <span className="text-xs text-black-1">Balogun Rukayat</span>
                  <span className="text-gray" style={{ fontSize: "8px" }}>
                    Balogun Rukayat
                  </span>
                </div>
              </div>
            </div>
            <div
              class=" py-4 bg-white hover:shadow-xl cursor-pointer rounded-md hover:-translate-y-2 duration-300"
              style={{ width: "281px", height: "200px" }}
            >
              <span className="flex gap-2 mx-3">
                <i
                  class="bi bi-star-fill"
                  style={{ color: "#E5C100", fontSize: "22px" }}
                ></i>
                <i
                  class="bi bi-star-fill"
                  style={{ color: "#E5C100", fontSize: "22px" }}
                ></i>
                <i
                  class="bi bi-star-fill"
                  style={{ color: "#E5C100", fontSize: "22px" }}
                ></i>
                <i
                  class="bi bi-star-fill"
                  style={{ color: "#E5C100", fontSize: "22px" }}
                ></i>
                <i
                  class="bi bi-star-fill"
                  style={{ color: "#E5C100", fontSize: "22px" }}
                ></i>
              </span>
              <p className="mx-3 text-xs text-gray">
                Read what they have to say about their experiences using our
                App. Read what they have to say about their experiences using
                our App.
              </p>

              <div className="flex mx-3 my-2 gap-2">
                <div className="w-8 h-8 bg-gray-3 rounded-full"></div>
                <div className="flex flex-col pt-1">
                  <span className="text-xs text-black-1">Balogun Rukayat</span>
                  <span className="text-gray" style={{ fontSize: "8px" }}>
                    Balogun Rukayat
                  </span>
                </div>
              </div>
            </div>
            <div
              class=" py-4 bg-white hover:shadow-xl cursor-pointer rounded-md hover:-translate-y-2 duration-300"
              style={{ width: "281px", height: "200px" }}
            >
              <span className="flex gap-2 mx-3">
                <i
                  class="bi bi-star-fill"
                  style={{ color: "#E5C100", fontSize: "22px" }}
                ></i>
                <i
                  class="bi bi-star-fill"
                  style={{ color: "#E5C100", fontSize: "22px" }}
                ></i>
                <i
                  class="bi bi-star-fill"
                  style={{ color: "#E5C100", fontSize: "22px" }}
                ></i>
                <i
                  class="bi bi-star-fill"
                  style={{ color: "#E5C100", fontSize: "22px" }}
                ></i>
                <i
                  class="bi bi-star-fill"
                  style={{ color: "#E5C100", fontSize: "22px" }}
                ></i>
              </span>
              <p className="mx-3 text-xs text-gray">
                Read what they have to say about their experiences using our
                App. Read what they have to say about their experiences using
                our App.
              </p>

              <div className="flex mx-3 my-2 gap-2">
                <div className="w-8 h-8 bg-gray-3 rounded-full"></div>
                <div className="flex flex-col pt-1">
                  <span className="text-xs text-black-1">Balogun Rukayat</span>
                  <span className="text-gray" style={{ fontSize: "8px" }}>
                    Balogun Rukayat
                  </span>
                </div>
              </div>
            </div>
            <div
              class=" py-4 bg-white hover:shadow-xl cursor-pointer rounded-md hover:-translate-y-2 duration-300"
              style={{ width: "281px", height: "200px" }}
            >
              <span className="flex gap-2 mx-3">
                <i
                  class="bi bi-star-fill"
                  style={{ color: "#E5C100", fontSize: "22px" }}
                ></i>
                <i
                  class="bi bi-star-fill"
                  style={{ color: "#E5C100", fontSize: "22px" }}
                ></i>
                <i
                  class="bi bi-star-fill"
                  style={{ color: "#E5C100", fontSize: "22px" }}
                ></i>
                <i
                  class="bi bi-star-fill"
                  style={{ color: "#E5C100", fontSize: "22px" }}
                ></i>
                <i
                  class="bi bi-star-fill"
                  style={{ color: "#E5C100", fontSize: "22px" }}
                ></i>
              </span>
              <p className="mx-3 text-xs text-gray">
                Read what they have to say about their experiences using our
                App. Read what they have to say about their experiences using
                our App.
              </p>

              <div className="flex mx-3 my-2 gap-2">
                <div className="w-8 h-8 bg-gray-3 rounded-full"></div>
                <div className="flex flex-col pt-1">
                  <span className="text-xs text-black-1">Balogun Rukayat</span>
                  <span className="text-gray" style={{ fontSize: "8px" }}>
                    Balogun Rukayat
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:block block lg:hidden my-1">
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            <SwiperSlide>
              <div
                class="py-6 bg-white hover:shadow-xl cursor-pointer rounded-md mx-auto"
                style={{ width: "320px", height: "250px" }}
              >
                <span className="flex gap-2 mx-3">
                  <i
                    class="bi bi-star-fill"
                    style={{ color: "#E5C100", fontSize: "22px" }}
                  ></i>
                  <i
                    class="bi bi-star-fill"
                    style={{ color: "#E5C100", fontSize: "22px" }}
                  ></i>
                  <i
                    class="bi bi-star-fill"
                    style={{ color: "#E5C100", fontSize: "22px" }}
                  ></i>
                  <i
                    class="bi bi-star-fill"
                    style={{ color: "#E5C100", fontSize: "22px" }}
                  ></i>
                  <i
                    class="bi bi-star-fill"
                    style={{ color: "#E5C100", fontSize: "22px" }}
                  ></i>
                </span>
                <p className="mx-3 text-xs text-gray">
                  Read what they have to say about their experiences using our
                  App. Read what they have to say about their experiences using
                  our App.
                </p>

                <div className="flex mx-3 my-2 gap-2 mt-4">
                  <div className="w-8 h-8 bg-gray-3 rounded-full"></div>
                  <div className="flex flex-col pt-1">
                    <span className="text-xs text-black-1">
                      Balogun Rukayat
                    </span>
                    <span className="text-gray" style={{ fontSize: "8px" }}>
                      Balogun Rukayat
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                class="py-6 bg-white hover:shadow-xl cursor-pointer rounded-md mx-auto"
                style={{ width: "320px", height: "250px" }}
              >
                <span className="flex gap-2 mx-3">
                  <i
                    class="bi bi-star-fill"
                    style={{ color: "#E5C100", fontSize: "22px" }}
                  ></i>
                  <i
                    class="bi bi-star-fill"
                    style={{ color: "#E5C100", fontSize: "22px" }}
                  ></i>
                  <i
                    class="bi bi-star-fill"
                    style={{ color: "#E5C100", fontSize: "22px" }}
                  ></i>
                  <i
                    class="bi bi-star-fill"
                    style={{ color: "#E5C100", fontSize: "22px" }}
                  ></i>
                  <i
                    class="bi bi-star-fill"
                    style={{ color: "#E5C100", fontSize: "22px" }}
                  ></i>
                </span>
                <p className="mx-3 text-xs text-gray">
                  Read what they have to say about their experiences using our
                  App. Read what they have to say about their experiences using
                  our App.
                </p>

                <div className="flex mx-3 my-2 gap-2 mt-4">
                  <div className="w-8 h-8 bg-gray-3 rounded-full"></div>
                  <div className="flex flex-col pt-1">
                    <span className="text-xs text-black-1">
                      Balogun Rukayat
                    </span>
                    <span className="text-gray" style={{ fontSize: "8px" }}>
                      Balogun Rukayat
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                class="py-6 bg-white hover:shadow-xl cursor-pointer rounded-md mx-auto"
                style={{ width: "320px", height: "250px" }}
              >
                <span className="flex gap-2 mx-3">
                  <i
                    class="bi bi-star-fill"
                    style={{ color: "#E5C100", fontSize: "22px" }}
                  ></i>
                  <i
                    class="bi bi-star-fill"
                    style={{ color: "#E5C100", fontSize: "22px" }}
                  ></i>
                  <i
                    class="bi bi-star-fill"
                    style={{ color: "#E5C100", fontSize: "22px" }}
                  ></i>
                  <i
                    class="bi bi-star-fill"
                    style={{ color: "#E5C100", fontSize: "22px" }}
                  ></i>
                  <i
                    class="bi bi-star-fill"
                    style={{ color: "#E5C100", fontSize: "22px" }}
                  ></i>
                </span>
                <p className="mx-3 text-xs text-gray">
                  Read what they have to say about their experiences using our
                  App. Read what they have to say about their experiences using
                  our App.
                </p>

                <div className="flex mx-3 my-2 gap-2 mt-4">
                  <div className="w-8 h-8 bg-gray-3 rounded-full"></div>
                  <div className="flex flex-col pt-1">
                    <span className="text-xs text-black-1">
                      Balogun Rukayat
                    </span>
                    <span className="text-gray" style={{ fontSize: "8px" }}>
                      Balogun Rukayat
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                class="py-6 bg-white hover:shadow-xl cursor-pointer rounded-md mx-6"
                style={{ width: "320px", height: "250px" }}
              >
                <span className="flex gap-2 mx-3">
                  <i
                    class="bi bi-star-fill"
                    style={{ color: "#E5C100", fontSize: "22px" }}
                  ></i>
                  <i
                    class="bi bi-star-fill"
                    style={{ color: "#E5C100", fontSize: "22px" }}
                  ></i>
                  <i
                    class="bi bi-star-fill"
                    style={{ color: "#E5C100", fontSize: "22px" }}
                  ></i>
                  <i
                    class="bi bi-star-fill"
                    style={{ color: "#E5C100", fontSize: "22px" }}
                  ></i>
                  <i
                    class="bi bi-star-fill"
                    style={{ color: "#E5C100", fontSize: "22px" }}
                  ></i>
                </span>
                <p className="mx-3 text-xs text-gray">
                  Read what they have to say about their experiences using our
                  App. Read what they have to say about their experiences using
                  our App.
                </p>

                <div className="flex mx-3 my-2 gap-2 mt-4">
                  <div className="w-8 h-8 bg-gray-3 rounded-full"></div>
                  <div className="flex flex-col pt-1">
                    <span className="text-xs text-black-1">
                      Balogun Rukayat
                    </span>
                    <span className="text-gray" style={{ fontSize: "8px" }}>
                      Balogun Rukayat
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                class="py-6 bg-white hover:shadow-xl cursor-pointer rounded-md mx-6"
                style={{ width: "320px", height: "250px" }}
              >
                <span className="flex gap-2 mx-3">
                  <i
                    class="bi bi-star-fill"
                    style={{ color: "#E5C100", fontSize: "22px" }}
                  ></i>
                  <i
                    class="bi bi-star-fill"
                    style={{ color: "#E5C100", fontSize: "22px" }}
                  ></i>
                  <i
                    class="bi bi-star-fill"
                    style={{ color: "#E5C100", fontSize: "22px" }}
                  ></i>
                  <i
                    class="bi bi-star-fill"
                    style={{ color: "#E5C100", fontSize: "22px" }}
                  ></i>
                  <i
                    class="bi bi-star-fill"
                    style={{ color: "#E5C100", fontSize: "22px" }}
                  ></i>
                </span>
                <p className="mx-3 text-xs text-gray">
                  Read what they have to say about their experiences using our
                  App. Read what they have to say about their experiences using
                  our App.
                </p>

                <div className="flex mx-3 my-2 gap-2 mt-4">
                  <div className="w-8 h-8 bg-gray-3 rounded-full"></div>
                  <div className="flex flex-col pt-1">
                    <span className="text-xs text-black-1">
                      Balogun Rukayat
                    </span>
                    <span className="text-gray" style={{ fontSize: "8px" }}>
                      Balogun Rukayat
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                class="py-6 bg-white hover:shadow-xl cursor-pointer rounded-md mx-6"
                style={{ width: "320px", height: "250px" }}
              >
                <span className="flex gap-2 mx-3">
                  <i
                    class="bi bi-star-fill"
                    style={{ color: "#E5C100", fontSize: "22px" }}
                  ></i>
                  <i
                    class="bi bi-star-fill"
                    style={{ color: "#E5C100", fontSize: "22px" }}
                  ></i>
                  <i
                    class="bi bi-star-fill"
                    style={{ color: "#E5C100", fontSize: "22px" }}
                  ></i>
                  <i
                    class="bi bi-star-fill"
                    style={{ color: "#E5C100", fontSize: "22px" }}
                  ></i>
                  <i
                    class="bi bi-star-fill"
                    style={{ color: "#E5C100", fontSize: "22px" }}
                  ></i>
                </span>
                <p className="mx-3 text-xs text-gray">
                  Read what they have to say about their experiences using our
                  App. Read what they have to say about their experiences using
                  our App.
                </p>

                <div className="flex mx-3 my-2 gap-2 mt-4">
                  <div className="w-8 h-8 bg-gray-3 rounded-full"></div>
                  <div className="flex flex-col pt-1">
                    <span className="text-xs text-black-1">
                      Balogun Rukayat
                    </span>
                    <span className="text-gray" style={{ fontSize: "8px" }}>
                      Balogun Rukayat
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* section 3 end */}
        <div className="py-2 ">
          <div className="box border-blackk border-4 rounded-lg mx-auto my-20">
            <div className="flex flex-col px-4 py-4  lg:px-10 lg:py-12 md:px-10 md:py-12 lg:flex lg:justify-center lg:flex-row">
              <div className="textimony">
                <span className="text-2xl font-nexa  lg:text-3xl md:text-3xl text-black-1 box-content">
                  Stop worrying about your next laundry, we will handle it for
                  you
                </span>
              </div>
              <div className="py-0 lg:py-8">
                <button class="bg-black font-nexaRegular text-white text-lg mt-14 ml-12 lg:mt-0  py-2 px-4 lg:ml-10  rounded">
                  Schedule a pickup
                </button>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <img
                src={image}
                alt=""
                className="arrow-img relative bottom-28 left-1 lg:bottom-20 lg:left-14 "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testiminial;
