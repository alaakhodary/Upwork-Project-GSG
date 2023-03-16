import React, { useState } from "react";

import uparrow from "../../assests/upArrow.png";

import {
  AccordionCardBox,
  AccordionContent,
  AccordionName,
  FiltersSelection,
  Pfilter,
  SelectCategory,
} from "./style";

import CheckboxInput from "../CheckboxInput";

const Accordion = () => {
  const [categoryDisplay, setcategoryDisplay] = useState("none");
  const [BrandsDisplay, setBrandsDisplay] = useState("none");
  const [FeaturesDisplay, setFeaturesDisplay] = useState("none");
  const [RatingsDisplay, setRatingsDisplay] = useState("none");
  const [ConditionDisplay, setConditionDisplay] = useState("none");
  return (
    <FiltersSelection>
      <AccordionCardBox>
        <Pfilter>Filter By</Pfilter>
        <AccordionName>
          Category
          <img
            style={
              categoryDisplay === "none"
                ? { cursor: "pointer", transform: "rotate(180deg)" }
                : { cursor: "pointer" }
            }
            src={uparrow}
            alt="uparrow icon"
            onClick={() =>
              setcategoryDisplay((prevstate) =>
                prevstate === "block" ? "none" : "block"
              )
            }
          />
        </AccordionName>
        <AccordionContent
          display={categoryDisplay === "block" ? "none" : "block"}
        >
          <SelectCategory name="" id="">
            <option value="">Select Categories</option>
          </SelectCategory>
        </AccordionContent>
      </AccordionCardBox>

      <AccordionCardBox>
        <AccordionName>
          Experience level
          <img
            style={
              BrandsDisplay === "none"
                ? { cursor: "pointer", transform: "rotate(180deg)" }
                : { cursor: "pointer" }
            }
            src={uparrow}
            alt="uparrow icon"
            onClick={() =>
              setBrandsDisplay((prevstate) =>
                prevstate === "block" ? "none" : "block"
              )
            }
          />
        </AccordionName>
        <AccordionContent
          display={BrandsDisplay === "block" ? "none" : "block"}
        >
          <ul>
            <li>
              <CheckboxInput id="Entry Level" label="Entry Level" />
            </li>
            <li>
              <CheckboxInput id="Intermediate" label="Intermediate" />
            </li>
            <li>
              <CheckboxInput id="Expert" label="Expert" />
            </li>
          </ul>
        </AccordionContent>
      </AccordionCardBox>

      <AccordionCardBox>
        <AccordionName>
          Number of proposals
          <img
            style={
              FeaturesDisplay === "none"
                ? { cursor: "pointer", transform: "rotate(180deg)" }
                : { cursor: "pointer" }
            }
            src={uparrow}
            alt="uparrow icon"
            onClick={() =>
              setFeaturesDisplay((prevstate) =>
                prevstate === "block" ? "none" : "block"
              )
            }
          />
        </AccordionName>
        <AccordionContent
          display={FeaturesDisplay === "block" ? "none" : "block"}
        >
          <ul>
            <li>
              <CheckboxInput id="Less than 5" label="Less than 5" />
            </li>
            <li>
              <CheckboxInput id="5 to 10" label="5 to 10" />
            </li>
            <li>
              <CheckboxInput id="10 to 15" label="10 to 15" />
            </li>
            <li>
              <CheckboxInput id="15 to 20" label="15 to 20" />
            </li>
            <li>
              <CheckboxInput id="20 to 50" label="20 to 50" />
            </li>
          </ul>
        </AccordionContent>
      </AccordionCardBox>

      <AccordionCardBox>
        <AccordionName>
          Client info
          <img
            style={
              ConditionDisplay === "none"
                ? { cursor: "pointer", transform: "rotate(180deg)" }
                : { cursor: "pointer" }
            }
            src={uparrow}
            alt="uparrow icon"
            onClick={() =>
              setConditionDisplay((prevstate) =>
                prevstate === "block" ? "none" : "block"
              )
            }
          />
        </AccordionName>
        <AccordionContent
          display={ConditionDisplay === "block" ? "none" : "block"}
        >
          <ul>
            <li>
              <CheckboxInput
                id="My previous clients"
                label="My previous clients"
              />
            </li>
            <li>
              <CheckboxInput id="Payment verified" label="Payment verified" />
            </li>
          </ul>
        </AccordionContent>
      </AccordionCardBox>

      <AccordionCardBox>
        <AccordionName>
          Client history
          <img
            style={
              RatingsDisplay === "none"
                ? { cursor: "pointer", transform: "rotate(180deg)" }
                : { cursor: "pointer" }
            }
            src={uparrow}
            alt="uparrow icon"
            onClick={() =>
              setRatingsDisplay((prevstate) =>
                prevstate === "block" ? "none" : "block"
              )
            }
          />
        </AccordionName>
        <AccordionContent
          display={ConditionDisplay === "block" ? "none" : "block"}
        >
          <ul>
            <li>
              <CheckboxInput id="No hires" label="No hires" />
            </li>
            <li>
              <CheckboxInput id="1 to 9 hires" label="1 to 9 hires" />
            </li>
            <li>
              <CheckboxInput id="10+ hires" label="10+ hires" />
            </li>
          </ul>
        </AccordionContent>
      </AccordionCardBox>

      <AccordionCardBox>
        <AccordionName>
          Hours per week
          <img
            style={
              RatingsDisplay === "none"
                ? { cursor: "pointer", transform: "rotate(180deg)" }
                : { cursor: "pointer" }
            }
            src={uparrow}
            alt="uparrow icon"
            onClick={() =>
              setRatingsDisplay((prevstate) =>
                prevstate === "block" ? "none" : "block"
              )
            }
          />
        </AccordionName>
        <AccordionContent
          display={ConditionDisplay === "block" ? "none" : "block"}
        >
          <ul>
            <li>
              <CheckboxInput
                id="Less than 30 hrs/week"
                label="Less than 30 hrs/week"
              />
            </li>
            <li>
              <CheckboxInput
                id="More than 30 hrs/week"
                label="More than 30 hrs/week"
              />
            </li>
          </ul>
        </AccordionContent>
      </AccordionCardBox>
    </FiltersSelection>
  );
};

export default Accordion;
