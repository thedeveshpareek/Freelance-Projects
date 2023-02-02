import React from "react";
import Button from "../common/Button/index_blue";
import {
  ArrowLongRightIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/solid";
import IconBlueSimple from "../common/Button/IconBlueSimple";
import Testimonials from "../common/Testimonials";
import { BlueCircleElement, MedicalCareGraphicOne, MedicalCareGraphicTwo } from "../../assets";

const Detail = () => {
  return (
    <>
      <div className="main__padding mt-16 overflow-hidden">
        <div>
          <h2 className="text-xl md:text-2xl lg:text-[32px] font-playfair tracking-wide font-bold text-center text-gray-800">
            What we Give{" "}
          </h2>

          <div className="flex flex-col md:flex-row gap-6 py-2 sm:py-8 md:py-12 lg:py-20">
            {/* Detail */}
            <div className="order-1 md:order-2 md:w-1/2">
              <div>
                <div className="mt-4 md:mt-7 lg:mt-10">
                  <h6 className="font-bold text-[#252525] text-xs sm:text-base lg:text-lg">
                    Medication Question ?
                  </h6>
                  <p className="main__text">
                    We are here to help you get the right dose with a simple
                    question{" "}
                  </p>
                </div>
                <div className="mt-4 md:mt-7 lg:mt-10">
                  <h6 className="font-bold text-[#252525] text-xs sm:text-base lg:text-lg">
                    Save Time & Money{" "}
                  </h6>
                  <p className="main__text">
                    Get answers to all your doubts about doses, common mistakes
                    in which drugs can be taken together{" "}
                  </p>
                </div>
                <div className="mt-4 md:mt-7 lg:mt-10">
                  <h6 className="font-bold text-[#252525] text-xs sm:text-base lg:text-lg">
                    Safe & Secure Solution{" "}
                  </h6>
                  <p className="main__text">
                    Forget online searches or guessing at dosage amounts - just
                    answer a few questions and we’ll tell you what’s best for
                    you{" "}
                  </p>
                </div>
              </div>

              {/* Button */}
              <div className="flex items-center gap-3 mt-5">
                <Button buttonText="Get Started" />
                <div className="text-primary_blue h-full font-medium text-[10px] md:text-base lg:text-lg flex items-center gap-1">
                  Learn More
                  <ArrowLongRightIcon className="h-3 w-3 md:h-5 md:w-5" />
                </div>
              </div>
            </div>

            {/* Image section */}
            <div className="mt-12 order-2 relative md:order-1 md:w-1/2">
              <div
                style={{
                  background: "url(/images/svg/blob2.svg)",
                  backgroundSize: "95% 146%",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="absolute -top-24 -z-[2] right-40 hidden md:block">
                  <BlueCircleElement />
                </div>
                <img
                  src="/images/svg/medicine2.svg"
                  className="h-full relative sm:left-20 sm:-top-5 md:left-1 lg:-top-8 lg:left-10"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 py-2 sm:py-8 md:py-12 lg:py-20">
            {/* Detail */}
            <div className="md:w-1/2">
              <div>
                <div>
                  <h6 className="font-bold text-[#252525] text-sm sm:text-lg md:text-xl lg:text-2xl">
                    Dose Safe
                  </h6>
                  <p className="main__text">
                    We are here to help you get the right dose with a simple
                    question{" "}
                  </p>
                </div>
                <div className="mt-4 md:mt-7 lg:mt-10">
                  <h6 className="font-bold text-[#252525] text-xs sm:text-base lg:text-lg">
                    Instant Prescription-based answers
                  </h6>
                  <p className="main__text">
                    Get answers to all your doubts about doses, common mistakes
                    in which drugs can be taken together{" "}
                  </p>
                </div>
                <div className="mt-4 md:mt-7 lg:mt-10">
                  <h6 className="font-bold text-[#252525] text-xs sm:text-base lg:text-lg">
                    Free Trial Periods{" "}
                  </h6>
                  <p className="main__text">
                    Forget online searches or guessing at dosage amounts - just
                    answer a few questions and we’ll tell you what’s best for
                    you{" "}
                  </p>
                </div>
              </div>

              {/* Button */}
              <div className="flex items-center gap-3 mt-5">
                <Button buttonText="Get Started" />
                <div className="text-primary_blue h-full font-bold flex items-center gap-1">
                  Learn More
                  <ArrowLongRightIcon className="h-3 w-3 md:h-5 md:w-5" />
                </div>
              </div>
            </div>

            {/* Image section */}
            <div className="mt-12 order-2 relative md:order-1 md:w-1/2">
              <div
                style={{
                  background: "url(/images/svg/blob2.svg)",
                  backgroundSize: "140% 146%",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="absolute -top-28 -z-[2] hidden md:block right-0">
                  <BlueCircleElement />
                </div>
                <img
                  src="/images/svg/dr.svg"
                  className="h-full relative lg:-right-[200px] lg:-top-8π"
                />
              </div>
            </div>
          </div>

          {/* Medication Simplified */}
          <div className="pt-12 py-2 sm:pt-0 sm:py-8 md:py-12 lg:py-20">
            <h2 className="text-xl md:text-2xl lg:text-[32px] font-playfair tracking-wide font-bold text-center text-gray-800">
              Medication Simplified{" "}
            </h2>
            <p className="md:mt-2 lg:mt-4 text-[#404040] hidden md:block font-raleway font-semibold text-center md:text-base lg:text-lg max-w-2xl mx-auto">
              Forget online searches or guessing at dosage amounts - just answer
              a few questions and we’ll tell you what’s best for you{" "}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-0 sm:mt-3 md:mt-5 lg:mt-8">
              {/* Card1 */}
              <div className="p-6 mt-5 bg-gray-100 rounded-3xl hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-200 duration-200">
                <div className="flex">
                  <div className="w-2/3">
                    <h4 className="font-bold text-sm sm:text-lg md:text-xl lg:text-2xl mb-2 text-[#252525]">
                      The Smartest way to Get a Drug Answer{" "}
                    </h4>
                    <span className="font-raleway text-[10px] sm:text-sm md:text-base text-lg font-semibold text-[#404040] leading-[4px] md:leading-6 lg:leading-8">
                      No More guessing about what dose is right for you or your
                      patinet, we have the answer in less then two minutes
                    </span>
                    <div className="text-primary_blue mt-4 font-bold flex items-center gap-1">
                      Learn More
                      <ArrowLongRightIcon className="h-3 w-3 md:h-5 md:w-5" />
                    </div>
                  </div>
                  <div className="w-1/3 hidden md:block">
                    <MedicalCareGraphicOne  />
                  </div>
                </div>
              </div>

              {/* Card2 */}
              <div className="p-6 mt-5 bg-gray-100 rounded-3xl hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-200 duration-200">
                <div className="flex">
                  <div className="md:w-2/3">
                    <h4 className="font-bold text-sm sm:text-lg md:text-xl lg:text-2xl mb-2 text-[#252525]">
                      The Smartest way to Get a Drug Answer{" "}
                    </h4>
                    <span className="font-raleway text-[10px] sm:text-sm md:text-base text-lg font-semibold text-[#404040] leading-[4px] md:leading-6 lg:leading-8">
                      No More guessing about what dose is right for you or your
                      patinet, we have the answer in less then two minutes
                    </span>
                    <div className="text-primary_blue mt-4 font-bold flex items-center gap-1">
                      Learn More
                      <ArrowLongRightIcon className="h-3 w-3 md:h-5 md:w-5" />
                    </div>
                  </div>
                  <div className="md:w-1/3  hidden md:block">
                    <MedicalCareGraphicTwo />
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-secondary_blue  hidden md:block">
        <Testimonials />
      </div>

      {/* Career */}
      <div className="main__padding">
        <div className="px-0 xs:px-3 sm:px-10 md:px-16 py-8 md:py-12 lg:py-16">
          <div
            className="mt-10 bx2 rounded-lg md:rounded-xl lg:rounded-3xl bg-[#f5fbff]
                        px-6 py-12 text-center md:flex md:justify-between md:items-center"
          >
            <div className="flex gap-2">
              <CalendarDaysIcon className="text-primary_blue h-7 w-6 hidden md:block" />
              <div className=" mx-auto text-center">
                <p className="text-center md:text-left text-primary_blue font-semibold font-raleway text-sm sm:text-lg md:text-xl lg:text-2xl">
                  Career at Salubrify
                </p>
                <p className="mt-2 md:mt-0 font-raleway text-xs md:text-sm lg:text-base font-medium mb-5 text-[#252525]">
                  Are you a Healthcare professsional ?{" "}
                </p>
              </div>
            </div>
            <Button buttonText="Apply Now" />
          </div>
        </div>
      </div>

      {/* Apply Now */}
      <div className="askDose__consultation-image px-10 md:px-20 py-[20%] md:py-[8%] mt-10 w-full">
        <h4 className="font-bold text-xl text-white font-playfair text-lg sm:text-xl md:text-2xl lg:text-[32px]">
          LIVE VIDEO CONSULTATION{" "}
        </h4>
        <p className="text-white font-raleway text-xs md:text-sm lg:text-base mt-3 sm:mt-5 mb-3 max-w-xl leading-5 lg:leading-8">
          Salubrify LIVE is an end-to-end real platform for women and girls to
          take control of their health, beauty and fitness.{" "}
        </p>
        <IconBlueSimple buttonText="Ask Now" />
      </div>
    </>
  );
};

export default Detail;
