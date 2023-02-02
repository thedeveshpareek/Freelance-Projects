import React from "react";
import MapPinIcon from "@heroicons/react/24/outline/MapPinIcon";
import Button from "../common/Button";
import PlayButton from "../common/Button/PlayButton";
import ArrowLongRightIcon from "@heroicons/react/24/solid/ArrowLongRightIcon";
import Header from "../common/Header";
import Search from "./Search";
import {
  BurgerDesignElement,
  CapDesignElement,
  UpperCircleElement,
  YogaDesignElement,
} from "../../assets";
import Link from "next/link";
import Flip from 'react-reveal/Flip';




const Banner = () => {
  return (
    <div className="bg-[#ffece5] overflow-hidden md:overflow-visible">
      <Header />
      {/* Top Section */}
      <div className="main__padding">
        <span className="md:flex hidden py-2 border-b-[1px] border-primary max-w-[10rem]">
          <MapPinIcon className="h-6 w-6 text-primary" /> Jaipur, Rajasthan
        </span>

        {/* Main Banner */}
        <div className="md:grid grid-cols-1 hidden relative lg:grid-cols-2">
          {/* Left Section */}
          <div className="pt-0 md:pt-20 pb-5">
            <div>
              <h2 className="font-playfair font-bold text-5xl leading-normal mb-4">
                Don't Let Your Period <br /> Stop You
              </h2>
              <p className="text-xl">Live Video Consultation Start at 199/-</p>
            </div>

            {/* <div className="block md:hidden">
              <h2 className="font-playfair font-bold text-3xl leading-normal mb-4">
              Start Your Jounrey With our Live Video Consultation
                
              </h2>
              <p className="text-xl">
                Live Video Consultation <br /> Start at 199/-
              </p>
            </div> */}
            <div className="flex mt-12 gap-8 items-center">
              <Link href='/singleService' passHref legacyBehavior>
                <a>
                  <Button buttonText="Book Now" />
                </a>
              </Link>

              <div className="md:flex hidden items-center gap-2">
                <PlayButton />
                <span className="main__primaryText underline underline-offset-1">
                  Watch Now
                </span>
              </div>
            </div>

            <div className="mt-16">
              {/* Avatars */}
              <div className="md:flex block items-center gap-6">
                <div className="isolate py-10 flex -space-x-2 overflow-hidden">
                  <img
                    className="relative z-20 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="relative z-10 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="relative z-0 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                {/* Right Section */}
                <div className="flex gap-3 items-center">
                  <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                  <p className="rounded-sm font-bold">20+ Doctors Online</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}

          <div className="relative lg:-bottom-25 hidden top-24 right-10 md:flex justify-center">
            {/* <Zoom top>
            </Zoom> */}
            <div className="absolute hidden md:block -top-14 -right-0 global__rotate-animation">
              <UpperCircleElement />
            </div>

            <div className="absolute hidden global__jump-animation md:block -top-32 left-20">
              <CapDesignElement />
            </div>

            <div className="absolute hidden global__jump-animation md:block bottom-[270px] -left-16">
              <YogaDesignElement />
            </div>

            <div className="absolute hidden global__jump-animation md:block bottom-[200px] -right-3">
              <BurgerDesignElement />
            </div>

            <div
              className="md:flex block md:justify-center absolute md:top-14"
              style={{
                height: "457px",
              }}
            >
              <img src="/images/svg/blob.svg" className="h-[100%]" />
            </div>
            <div
              className="flex justify-center absolute md:-top-16"
              style={{
                height: "580px",
              }}
            >
              <img src="/images/image/girl.png" className="h-[100%]" />
            </div>
          </div>

        </div>

        {/* main banner for mobile */}
        <div className="grid grid-cols-1 md:hidden relative lg:grid-cols-2">
          {/* Left Section */}
          <div className="pt-0 md:pt-20 pb-5">
            {/* <div>
              <h2 className="font-playfair font-bold text-5xl leading-normal mb-4">
              Don't Let Your Period <br /> Stop You
              </h2>
              <p className="text-xl">Live Video Consultation Start at 199/-</p>
            </div> */}

            <div>
              <h2 className="font-playfair font-bold text-3xl leading-normal mb-4">
                Start Your Jounrey With our Live Video Consultation

              </h2>
              <p className="text-xl">
                Live Video Consultation <br /> Start at 199/-
              </p>
            </div>
            <div className="flex mt-12 gap-8 items-center">
              <Button buttonText="Book Now" />

              <div className="md:flex hidden items-center gap-2">
                <PlayButton />
                <span className="main__primaryText underline underline-offset-1">
                  Watch Now
                </span>
              </div>
            </div>

            <div className="mt-5">
              {/* Avatars */}
              <div className="md:flex block items-center gap-6">
                <div className="isolate py-10 flex -space-x-2 overflow-hidden">
                  <img
                    className="relative z-20 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="relative z-10 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="relative z-0 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                {/* Right Section */}
                <div className="flex gap-3 items-center">
                  <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                  <p className="rounded-sm text-sm">20+ Doctors Online</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative lg:-bottom-25 right-0 -translate-y-[330px] translate-x-12 flex justify-center">


            <div
              className="md:flex block right-0 md:justify-center absolute top-0"
              style={{
                height: "400px",
                width: '280px'
              }}
            >
              <img src="/images/svg/blob.svg" className="h-[100%]" />
            </div>
            <div
              className="flex justify-center absolute -top-10 right-10"
              style={{
                height: "380px",
              }}
            >
              <img src="/images/image/girl.png" className="h-[100%]" />
            </div>
          </div>
        </div>
      </div>

      {/* Associations */}
      <div className="bg-[#fff6f2] py-8 mt-5 lg:mt-0 px-4 md:px-14 flex flex-col md:flex-row gap-10 ">
        <div className="lg:w-2/3 flex gap-0 md:gap-10 items-center">
          <img
            className="w-1/3 sm:w-auto"
            src="/images/image/association1.png"
          />
          <img
            className="w-1/3 sm:w-auto"
            src="/images/image/association2.png"
          />
          <img
            className="w-1/3 sm:w-auto"
            src="/images/image/association3.png"
          />
        </div>

        <Flip left>
          <div
            className="lg:w-[27vw] hidden lg:block pl-12 fixed bottom-8 right-20"
            style={{ zIndex: "99" }}
          >
            <div className="rounded-3xl bx2 flex index__banner-rightBox">
              <div className="md:w-2/4">
                <h5 className="text-base">Know Your Medicine</h5>
                <p>
                  <small>
                    Salubrify Introduce you to{" "}
                    <span className="text-primary border-b-[1px] border-primary">
                      <Link href='/askDose' legacyBehavior passHref>
                        <a>
                          Ask Dose
                        </a>
                      </Link>
                    </span>
                  </small>
                </p>
                <span className="flex mt-5 text-white underline underline-offset-1">
                  Know more <ArrowLongRightIcon className="h-6 w-6 text-white" />
                </span>
              </div>
              <img src="/images/image/doctor2.png" />
            </div>
          </div>
        </Flip>
      </div>

      {/* Search Bar */}
      <div className="relative z-40">
        <Search />
      </div>
    </div>
  );
};

export default Banner;
