import React from "react";
import StarIcon from "@heroicons/react/24/solid/StarIcon";
import {
  LockIcon,
  ShieldCheckIcon,
  UpperCircleElement,
  WalletIcon,
} from "../../assets";

const Details = () => {
  return (
    <div className="px-4 md:px-6 overflow-hidden">
      <div>
        <div className="flex flex-col md:flex-row gap-6 container mx-auto items-center">
          {/* Detail */}
          <div className="order-2 md:w-1/2">
            <div>
              <h3 className="text-xl md:text-2xl lg:text-[32px] font-playfair tracking-wide font-bold text-gray-800">About Salubrify </h3>
              <p className="main__text mt-3">
                Now, moms will be relaxed as their daughter learn how to manage
                all the puberty issues that she might face during this stage of
                her life
              </p>

              <div className="mt-6 main__text">
                <p className="flex gap-2">
                  <StarIcon className="h-6 w-6 text-gray-600" /> No fear, doubts
                  and myths on puberty
                </p>

                <p className="flex gap-2 mt-5">
                  <StarIcon className="h-6 w-6 text-gray-600" /> Health, beauty
                  and fitness programs
                </p>

                <p className="flex gap-2 mt-5">
                  <StarIcon className="h-6 w-6 text-gray-600" /> Hygiene and
                  body
                </p>

                <p className="flex gap-2 mt-5">
                  <StarIcon className="h-6 w-6 text-gray-600" /> Clothes for
                  growing body- what to wear or use
                </p>

                <p className="flex gap-2 mt-5">
                  <StarIcon className="h-6 w-6 text-gray-600" /> Help her grow
                  physically, psychologically and socially.
                </p>
              </div>

              <div className="flex gap-4 h-28 mt-10 main__text">
                <div className="w-1/3 h-[100%] border flex items-center justify-center flex-col border-gray-300 border-[2px] rounded-xl">
                  <ShieldCheckIcon />
                  <p className="mt-3">Reliable</p>
                </div>
                <div className="w-1/3 h-[100%] border flex items-center justify-center flex-col border-gray-300 border-[2px] rounded-xl">
                  <LockIcon />
                  <p className="mt-3">Secure</p>
                </div>
                <div className="w-1/3 h-[100%] border flex items-center justify-center flex-col border-gray-300 border-[2px] rounded-xl">
                  <WalletIcon />
                  <p className="mt-3">Affordable</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image section */}
          {/* <div className="mt-12 order-1 md:w-1/2 relative bottom-10">
            <div
              style={{
                background: "url(/images/svg/blob.svg)",
                backgroundSize: "100% 100%",
                height: "55vh",
                backgroundPosition: "bottom",
                backgroundRepeat: "no-repeat",
                position: "relative",
                zIndex: "2",
                left: "-50px",
                top: "50px",
              }}
            >
              <img
                src="/images/image/doctor3.png"
                className="h-[55vh] mx-auto"
              />
            </div>
            <div className="absolute right-16 -top-10 -z-3 hidden lg:block">
              <UpperCircleElement height={300} width={300} />
            </div>
          </div> */}
          {/* Image section */}
          <div className="md:mt-12 mt-5 order-1 md:w-1/2 relative">
            <div
              className="relative md:-left-12 md:top-12"
              style={{
                background: "url(/images/svg/blob.svg)",
                backgroundSize: "100% 100%",
                height: "55vh",
                backgroundPosition: "bottom",
                backgroundRepeat: "no-repeat",
                zIndex: 2,
              }}
            >
              <img
                src="/images/image/doctor3.png"
                className="h-[55vh] mx-auto relative -top-12 md:top-0"
              />
            </div>
            <div className="absolute lg:right-14 hidden global__rotate-animation md:block right:-5 -top-10 -z-3">
              <UpperCircleElement height={300} width={300} />
            </div>
          </div>
        </div>

        {/* Parental Freedom */}
        <div className="flex flex-col md:flex-row gap-6 py-28 container mx-auto items-center ">
          {/* Detail */}
          <div className="order-2 md:order-1 text-right md:w-1/2">
            <div>
              <h3 className="text-xl md:text-2xl lg:text-[32px] font-playfair tracking-wide font-bold text-gray-800">
                Girls - Are you ready for Puberty?{" "}
              </h3>
              <h6 className="mt-4 font-[600] text-lg">Parental freedom</h6>

              <div className="mt-6 main__text">
                <p className="flex gap-2">
                  {" "}
                  Become the first to know your daughter's thoughts, feelings
                  and concerns. 99% mothers are worried about this{" "}
                  <StarIcon className="h-6 w-6 text-gray-600" />
                </p>

                <p className="flex gap-2 mt-5">
                  {" "}
                  You get the answers to your questions and doubts, you can see
                  where you stand in a risk category.{" "}
                  <StarIcon className="h-6 w-6 text-gray-600" />
                </p>

                <p className="flex gap-2 mt-5 justify-end">
                  Receive expert advice from a professional doctor on her health
                  related issues. <StarIcon className="h-6 w-6 text-gray-600" />{" "}
                </p>
              </div>
            </div>
          </div>

          {/* Image section */}
          <div className="order-1 md:order-2 md:w-1/2 bg-red-400 relative">
            <div className="absolute -right-10 -top-16 global__rotate-animation hidden lg:block">
              <UpperCircleElement height={160} width={160} />
            </div>
            <div className="absolute -left-16 -bottom-16 global__rotate-animation hidden lg:block">
              <UpperCircleElement height={160} width={160} />
            </div>

            <img
              src="/images/image/img5.png"
              className="md:h-[60vh] mx-auto w-full relative Z-2"
            />
          </div>
        </div>

        {/* What you get */}
        <div className="flex flex-col md:flex-row gap-6 py-10 container mx-auto items-center pb-20">
          {/* Detail */}
          <div className="order-2 md:w-1/2">
            <div>
              <h3 className="text-xl md:text-2xl lg:text-[32px] font-playfair tracking-wide font-bold  text-gray-800">What you get </h3>
              <p className="main__text mt-3">
                You've been to a lot of parenting classes, read books and talked
                to many other parents. You still have some questions about your
                daughter's puberty. We're here for you every step of the way
                with our first FREE consultation!
              </p>

              <div className="mt-6 main__text">
                <p className="flex gap-2">
                  {" "}
                  <StarIcon className="h-6 w-6 text-gray-600" /> Receive expert
                  advice from a professional doctor on all health related
                  issues.
                </p>

                <p className="flex gap-2 mt-5">
                  {" "}
                  <StarIcon className="h-6 w-6 text-gray-600" /> We Help you
                  empower Your Daughter with Healthy Life
                </p>

                <p className="flex gap-2 mt-5">
                  <StarIcon className="h-6 w-6 text-gray-600" /> Puberty Power
                  program for girls
                </p>

                <p className="flex gap-2 mt-5">
                  {" "}
                  <StarIcon className="h-6 w-6 text-gray-600" /> A Life-Changing
                  Online Puberty Counseling for Girls
                </p>

                <p className="flex gap-2 mt-5">
                  <StarIcon className="h-6 w-6 text-gray-600" /> Learn the easy
                  way to make your daughter healthy and fit.
                </p>
              </div>
            </div>
          </div>

          {/* Image section */}
          <div className="order-1 md:w-1/2 relative">
            <div className="absolute -left-16 -top-16 global__rotate-animation hidden lg:block">
              <UpperCircleElement height={160} width={160} />
            </div>
            <div className="absolute -right-16 -bottom-16 global__rotate-animation hidden lg:block">
              <UpperCircleElement height={160} width={160} />
            </div>

            <img
              src="/images/image/img6.png"
              className="md:h-[60vh] mx-auto relative z-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
