import React from "react";
import Frame19 from "../images/Frame19.png";
import { BsXLg } from "react-icons/bs";

const AboutModal = ( {setModalOpen}) => {
  return (
    <>
<div
          className="bg-fff relative top-10 mx-auto border-none rounded-lg"
          style={{ width: "1183px", height: "494px" }}
        >
          <div
            className="bg-darkBlue rounded-tl-lg rounded-bl-lg"
            style={{ width: "428px", height: "494px" }}
          >
            <img src={Frame19} alt="" className="relative top-8 left-12 z-10" />
          </div>
          <div className="bg-fff box-2 rounded-tr-lg rounded-br-lg">
            <div className="flex justify-between pt-6">
              <div
                className="bg-blue rounded mx-24"
                style={{ width: "124px", height: "34px" }}
              >
                <span className="text-blue-2 font-nexa ml-2 text-base flex justify-center items-center">
                  About us
                </span>
              </div>
              <div
                className="bg-blue rounded flex justify-center items-center relative right-10"
                style={{ width: "42px", height: "42px" }}
              >
                <button
                  onClick={() => {
                    setModalOpen(false);
                  }}
                >
                  <BsXLg color="#6838FE" fontSize="20px" />
                </button>
              </div>
            </div>

            <h3 className="mx-24 text-xl  font-nexa font-semibold text-blackk py-1">
              About Lunddr App
            </h3>
            <p
              className="mx-24 text-gray  flex flex-col font-nexaRegular  text-xs"
              style={{ lineHeight: "26px" }}
            >
              <span>
                Welcome to our laundry services website! We offer a range of
                high-quality laundry and dry cleaning services to meet all of
                your needs. Our team of professionals is dedicated to providing
                top-notch service and ensuring that your clothes and linens come
                back looking and smelling fresh and clean.{" "}
              </span>
              <span>
                Our services include washing and drying clothes, pressing and
                ironing, and dry cleaning for more delicate fabrics. We also
                offer stain removal and alteration services to ensure that your
                garments look their best.
              </span>
              <span>
                We use state-of-the-art equipment and eco-friendly cleaning
                products to provide the best possible care for your clothes and
                the environment. We also offer convenient pickup and delivery
                options to make it easy for you to use our services.
              </span>
              <span>
                Thank you for choosing us for all of your laundry needs. We look
                forward to serving you and helping you look and feel your best.
              </span>
            </p>
          </div>
        </div>
    </>
  );
};

export default AboutModal;
