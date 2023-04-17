import React from "react";

import { BsXLg } from "react-icons/bs";
import Example from "./AccodionModal";

const AccodionModal = ({setAccodionModal}) => {
  return (
    <div>
          <div className="flex justify-between py-2">
            <div
              className="bg-blue rounded mx-32"
              style={{ width: "124px", height: "34px" }}
            >
              <span className="text-blue-2 font-nexa ml-2 text-base flex justify-center items-center">
                FAQ
              </span>
            </div>
            <div
              className="bg-blue rounded flex justify-center items-center relative right-4"
              style={{ width: "42px", height: "42px" }}
            >
              <button
                onClick={() => {
                  setAccodionModal(false);
                }}
              >
                <BsXLg color="#6838FE" fontSize="20px" />
              </button>
            </div>
          </div>
          <h3 className="mx-32 text-xl  font-nexa text-blackk py-1">
            How Lunddr works
          </h3>
          <p className="mx-32 text-gray  font-nexaRegular  text-base  py-1">
            We'll clean and return your clothes in no time
          </p>
          <Example />
        </div>
  );
};

export default AccodionModal;
