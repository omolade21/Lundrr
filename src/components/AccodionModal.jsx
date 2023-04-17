import { Accordion, AccordionBody, AccordionHeader } from "@material-tailwind/react";
import { Fragment, useState } from "react";
// import {
//   Accordion,
//   AccordionHeader,
//   AccordionBody,
// } from "@material-tailwind/react";
 
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="#C5C5C5"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}
 
export default function Example() {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <Fragment>
        <div className="mx-32">
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader  className="px-4 text-lg font-nexa bg-darkGray my-4" onClick={() => handleOpen(1)}  style={{width:"800px", height:"58px"}} >
        What is lunddr.?
        </AccordionHeader>
        <AccordionBody className="-mt-4 text-sm font-nexaRegular text-gray px-2" style={{width:"800px"}}>
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader className=" px-4 text-lg font-nexa bg-darkGray rounded" onClick={() => handleOpen(2)} style={{width:"800px", height:"58px"}}>
        What is lunddr.?
        </AccordionHeader>
        <AccordionBody  className="text-sm font-nexaRegular text-gray px-2" style={{width:"800px"}}>
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader className=" px-4 text-lg font-nexa bg-darkGray my-4 rounded" onClick={() => handleOpen(3)} style={{width:"800px", height:"58px"}}>
        What is lunddr.?
        </AccordionHeader>
        <AccordionBody  className="-mt-4 text-sm font-nexaRegular text-gray px-2" style={{width:"800px"}}>
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
        <AccordionHeader className=" px-4 text-lg font-nexa bg-darkGray  rounded" onClick={() => handleOpen(4)} style={{width:"800px", height:"58px"}}>
        What is lunddr.?
        </AccordionHeader>
        <AccordionBody  className="-mt-4 text-sm font-nexaRegular text-gray px-2" style={{width:"800px"}}>
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
        <AccordionHeader className=" px-4 text-lg font-nexa bg-darkGray my-4 rounded" onClick={() => handleOpen(5)} style={{width:"800px", height:"58px"}}>
        What is lunddr.?
        </AccordionHeader>
        <AccordionBody  className="-mt-4 text-sm font-nexaRegular text-gray px-2" style={{width:"800px"}}>
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
        <AccordionHeader className=" px-4 text-lg font-nexa bg-darkGray rounded" onClick={() => handleOpen(6)} style={{width:"800px", height:"58px"}}>
        What is lunddr.?
        </AccordionHeader>
        <AccordionBody  className="-mt-4 text-sm font-nexaRegular text-gray px-2" style={{width:"800px"}}>
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      </div>
    </Fragment>
  );
}