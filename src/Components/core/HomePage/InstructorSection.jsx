import React from "react";
import Instructor from "../../../assets/Images/Instructor.png";
import HighlightText from "./HighlightText";
import CTAButton from "../HomePage/Button";
import { FaArrowRight } from "react-icons/fa";

import { motion } from "framer-motion";
import { scaleUp } from "./../../common/motionFrameVarients";

const InstructorSection = () => {
  return (
    <div>
      <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-20 items-center">
        <motion.div
          variants={scaleUp}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="lg:w-[50%] "
        >
          <motion.img
            src={Instructor}
            alt=""
            className="shadow-white shadow-[-20px_-20px_0_0] rounded-1xl"
          />
        </motion.div>

        <div className="lg:w-[50%] flex gap-10 flex-col">
          <h1 className="lg:w-[50%] text-4xl font-semibold ">
            Become an
            <HighlightText text={"instructor"} />
          </h1>

          <p className="font-medium text-[16px] text-justify w-[90%] text-richblack-300">
            Instructors from around the world teach millions of students on
            StudyNotion. We provide the tools and skills to teach what you love.
          </p>

          <div className="w-fit">
            <CTAButton active={true} linkto={"/signup"}>
              <div className="flex items-center gap-3">
                Start Learning Today
                <FaArrowRight />
              </div>
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorSection;
