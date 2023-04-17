import React from "react";
import { BsXLg } from "react-icons/bs";
const PricingModal = ({setPrincingModal}) => {
  return (
    <div className="mx-16">
          <div className="mt-3 flex justify-between py-2 ">
            <div
              className="bg-blue rounded "
              style={{ width: "124px", height: "34px" }}
            >
              <span className="text-blue-2 font-nexa ml-2 text-base flex justify-center items-center">
                Pricing
              </span>
            </div>
            <div
              className="bg-blue rounded flex justify-center items-center relative right-10"
              style={{ width: "42px", height: "42px" }}
            >
              <button
                onClick={() => {
                  setPrincingModal(false);
                }}
              >
                <BsXLg color="#6838FE" fontSize="20px" />
              </button>
            </div>
          </div>
          <h3 className="text-xl  font-nexa text-blackk py-1">
            Pricing and plans
          </h3>
          <p className=" text-gray  font-nexaRegular  text-base  py-1">
            Choose the best price available for you.
          </p>

          <div className="flex justify-between mt-6">
            <div
              className="bg-blue rounded "
              style={{ width: "124px", height: "34px" }}
            >
              <span className="text-blue-2 font-nexa  text-base flex justify-center items-center">
                Item
              </span>
            </div>
            <div
              className="bg-blue rounded mx-32"
              style={{ width: "124px", height: "34px" }}
            >
              <span className="text-blue-2 font-nexa  text-base flex justify-center items-center">
                Washing
              </span>
            </div>
            <div
              className="bg-blue rounded  relative right-24"
              style={{ width: "124px", height: "34px" }}
            >
              <span className="text-blue-2 font-nexa  text-base flex justify-center items-center">
                Ironing
              </span>
            </div>
          </div>

          <div className="pricingBox border border-gray400 rounded my-4 relative ">
            <span className="text-xl font-nexa text-blackk pl-4 relative top-1">
              Shirt
            </span>
            <div className="absolute w-0 h-9 border-gray400 top-0 border left-72"></div>
            <div className="absolute w-0 h-9 border-gray400 top-0 border right-56"></div>
          </div>
          <div className="pricingBox border border-gray400 rounded  my-4 relative">
            <span className="text-xl font-nexa text-blackk pl-4 relative top-1">
              Suit
            </span>
            <div className="absolute w-0 h-9 border-gray400 top-0 border left-72"></div>
            <div className="absolute w-0 h-9 border-gray400 top-0 border right-56"></div>
          </div>
          <div className="pricingBox border border-gray400 rounded my-4 relative">
            <span className="text-xl font-nexa text-blackk pl-4 relative top-1">
              Jean Trouser
            </span>
            <div className="absolute w-0 h-9 border-gray400 top-0 border left-72"></div>
            <div className="absolute w-0 h-9 border-gray400 top-0 border right-56"></div>
          </div>
          <div className="pricingBox border border-gray400 rounded my-4 relative">
            <span className="text-xl font-nexa text-blackk pl-4 relative top-1">
              Pant Trouser
            </span>
            <div className="absolute w-0 h-9 border-gray400 top-0 border left-72"></div>
          </div>
          <div className="pricingBox border border-gray400 rounded my-4 relative">
            <span className="text-xl font-nexa text-blackk pl-4 relative top-1">
              Stain Treatment
            </span>
            <div className="absolute w-0 h-9 border-gray400 top-0 border left-72"></div>
          </div>
          <div className="pricingBox border border-gray400 rounded  my-4 relative">
            <span className="text-xl font-nexa text-blackk pl-4 relative top-1">
              Towel
            </span>
            <div className="absolute w-0 h-9 border-gray400 top-0 border left-72"></div>
          </div>
          <div className="pricingBox border border-gray400 rounded  my-4 relative">
            <span className="text-xl font-nexa text-blackk pl-4 relative top-1">
              Bed-sheet & Duvet
            </span>
            <div className="absolute w-0 h-9 border-gray400 top-0 border left-72"></div>
          </div>
          <div className="pricingBox border border-gray400 rounded  my-4 relative">
            <span className="text-xl font-nexa text-blackk pl-4 relative top-1">
              Pair Clothing
            </span>
            <div className="absolute w-0 h-9 border-gray400 top-0 border left-72"></div>
          </div>
        </div>
  );
};

export default PricingModal;
