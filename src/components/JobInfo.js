import React from "react";
import { Link, useLocation } from "react-router-dom";
import parse from "html-react-parser";
import { BiWorld, BiTimeFive } from "react-icons/bi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

function JobInfo() {
  let { state } = useLocation();
  //console.log(state);
  var dateTimeExp = new Date(state.page.job_offer_expiration_timestamp * 1000);
  var dateTimePosted = new Date(state.page.job_posted_at_timestamp * 1000);
  var des = state.page.job_description;
  console.log(des);
  return (
    <div>
      <HiOutlineArrowNarrowRight
        className="text-2xl text-gray-500 cursor-pointer"
        onClick={() => {
          state.history.push("/jobs");
        }}
      />
    </div>
  );
}

export default JobInfo;
