<<<<<<< HEAD
<<<<<<< HEAD
/* eslint-disable no-unused-vars */
=======
>>>>>>> 400eb95 (Up)
=======
/* eslint-disable no-unused-vars */
>>>>>>> origin/main
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import CTAButton from "../Components/core/HomePage/Button";
import HighlightText from "../Components/core/HomePage/HighlightText";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../Components/core/HomePage/CodeBlocks";
import TimelineSection from "../Components/core/HomePage/TimelineSection";
import LearningLanguageSection from "../Components/core/HomePage/LearningLanguageSection";
import InstructorSection from "../Components/core/HomePage/InstructorSection";
import ExploreMore from "../Components/core/HomePage/ExploreMore";
import { useDispatch } from "react-redux";
import { setProgress } from "../slices/loadingBarSlice";
<<<<<<< HEAD
<<<<<<< HEAD
import RatingSlider from "../Components/core/Ratings/RatingSlider";
=======
import { getCatalogaPageData } from "../services/operations/pageAndComponentData";
import CourseSlider from "../Components/core/Catalog/CourseSlider";
import Spinner from "../Components/common/Spinner";
import RatingSlider from "../Components/core/Ratings/RatingSlider";
import ReviewSlider from "../Components/common/ReviewSlider";
>>>>>>> 400eb95 (Up)
=======
import RatingSlider from "../Components/core/Ratings/RatingSlider";
>>>>>>> origin/main
import { motion } from "framer-motion";
import { fadeIn } from "./../Components/common/motionFrameVarients";

function Home() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data or perform any necessary initialization
    dispatch(setProgress(0)); // Example dispatch call
    setLoading(false);
  }, [dispatch]);

  return (
    <div>
      {/* Section 1 */}
      <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white">
        {/* Become an Instructor Button */}
        <Link to={"/signup"}>
          <div className="group mx-auto mt-16 w-fit rounded-full bg-richblack-800 p-1 font-bold text-richblack-200 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none">
            <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        {/* Heading */}
        <motion.div
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/main
          variants={fadeIn("left", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, threshold: 0.1 }}
<<<<<<< HEAD
=======
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, threshold: 0.5 }}
>>>>>>> 400eb95 (Up)
=======
>>>>>>> origin/main
          className="text-center text-3xl lg:text-4xl font-semibold mt-7"
        >
          Empower Your Future with
          <HighlightText text={"Coding Skills"} />
        </motion.div>

        <motion.div
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/main
          variants={fadeIn("right", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, threshold: 0.1 }}
<<<<<<< HEAD
=======
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, threshold: 0.5 }}
>>>>>>> 400eb95 (Up)
=======
>>>>>>> origin/main
          className="mt-4 w-[90%] text-center text-base lg:text-lg font-bold text-richblack-300"
        >
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </motion.div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-row gap-7">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>
          <CTAButton active={false} linkto={"/login"}>
            Book a Demo
          </CTAButton>
          <CTAButton active={true} linkto={"/signup"}>
            Watch Live
          </CTAButton>
        </div>

        {/* Video */}
        <div className="mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200">
          <video
            className="shadow-[20px_20px_rgba(255,255,255)]"
            muted
            loop
            autoPlay
          >
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

        {/* Code Section 1  */}
        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-3xl lg:text-4xl font-semibold">
                Unlock your
                <HighlightText text={"coding potential"} /> with our online
                courses.
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "Try it Yourself",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: true,
            }}
            codeColor={"text-yellow-25"}
            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1>
            <a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
            backgroundGradient={
              <div className="code-block1-grad codeblock1 absolute"></div>
            }
          />
        </div>

        {/* Most Popular
        <div className=" mx-auto box-content w-full max-w-maxContentTab px- py-12 lg:max-w-maxContent">
          <h2 className="section_heading mb-6 md:text-3xl text-xl">
            Most Popular Courses
          </h2>
          <CourseSlider Courses={getCatalogaPageData?.selectedCourses} />
        </div> */}

        {/* Code Section 2 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                Start
                <HighlightText text={"coding in seconds"} />
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Continue Lesson",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-white"}
            codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
            backgroundGradient={<div className="codeblock2 absolute"></div>}
          />
        </div>

        {/* Explore Section */}
        <ExploreMore />
      </div>

      {/* Section 2 */}
      <div className="bg-pure-greys-5 text-richblack-700">
        <div className="homepage_bg h-[320px]">
          {/* Explore Full Category Section */}
          <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
            <div className="lg:h-[150px]"></div>
            <div className="flex flex-row gap-7 text-white lg:mt-8">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-2">
                  Explore Full Catalog
                  <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/login"}>
                Learn More
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 ">
          {/* Job that is in Demand - Section 1 */}
          <div className="mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0">
            <div className="text-4xl font-semibold lg:w-[45%] ">
              Get the skills you need for a{" "}
              <HighlightText text={"job that is in demand."} />
            </div>

            <div className="flex flex-col items-start gap-10 lg:w-[40%]">
              <div className="text-[16px]">
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>
              <CTAButton active={true} linkto={"/signup"}>
                <div className="">Learn More</div>
              </CTAButton>
            </div>
          </div>

          {/* Timeline Section - Section 2 */}
          <TimelineSection />

          {/* Learning Language Section - Section 3 */}
          <LearningLanguageSection />
        </div>
      </div>

      {/* Section 3 */}
      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        {/* Become an instructor section */}
        <InstructorSection />
      </div>

      {/* Review Slider here */}
      <div className=" mb-16 mt-3">
        <h2 className="text-center text-5xl md:text-4xl font-semibold mt-8 text-richblack-5 mb-5">
          <span className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl  font-semibold text-transparent lg:w-[70%]">
            Reviews From Other Learners
          </span>
        </h2>
        <div>
          <RatingSlider />
        </div>
      </div>
    </div>
  );
}

export default Home;
