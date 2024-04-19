import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import Skeleton from "react-loading-skeleton";
import { ratingsEndpoints } from "../../../services/apis";
import { apiConnector } from "../../../services/apiConnector";
import RatingStars from "../../common/RatingStars";

const RatingSlider = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getReviews = async () => {
      setLoading(true);
      try {
        const res = await apiConnector(
          "GET",
          ratingsEndpoints.REVIEWS_DETAILS_API
        );
        setReviews(res.data.data);
        console.log("LOGGING REVIEWS", res);
      } catch (error) {
        console.log("LOGGING Review ERROR", error);
      } finally {
        setLoading(false);
      }
    };
    getReviews();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto">
      <Swiper
        slidesPerView={3}
        loop={true}
        spaceBetween={15}
        pagination={false}
        modules={[Autoplay]}
        className="mySwiper md:pt-5 rounded-lg overflow-hidden"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        freeMode={false}
        centeredSlides={true}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 25 },
        }}
      >
        {loading
          ? Array.from({ length: 3 }).map((_, index) => (
              <SwiperSlide key={index}>
                <Skeleton height={150} />
              </SwiperSlide>
            ))
          : reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col gap-3 min-h-[150px] bg-richblack-800 p-3 text-[14px] text-richblack-25 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105">
                  <div className="flex items-center gap-4">
                    {review?.user?.image && (
                      <img
                        src={review.user.image}
                        alt="user"
                        className="h-9 w-9 rounded-full object-cover"
                      />
                    )}
                    <div className="flex flex-col">
                      <h3 className="font-semibold text-richblack-5">
                        {review?.user?.firstName} {review?.user?.lastName || ""}
                      </h3>
                      <p className="text-[12px] font-medium text-richblack-500">
                        {review?.course?.courseName}
                      </p>
                    </div>
                  </div>
                  <div className="font-medium text-richblack-25">
                    {review?.review?.slice(0, 70)}...
                  </div>
                  <RatingStars Review_Count={review?.rating} />
                </div>
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
};

export default RatingSlider;
