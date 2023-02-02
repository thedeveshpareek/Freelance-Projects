import React from "react";
import ServiceCard from "./ServiceCard";
import Outlined from "../common/Button/Outlined";
import { UpperCircleElement } from "../../assets";
import Link from "next/link";
const services = [
  {
    title: "Period & Pain",
    desc: "Get a Consultation about period and Pain from our Experts",
    poster: "/images/image/service1.png",
    price: 299,
  },
  {
    title: "Healthy Diet",
    desc: "Get a Consultation about period and Pain from our Experts",
    poster: "/images/image/service2.png",
    price: 299,
  },
  {
    title: "Parenting Tips",
    desc: "Get a Consultation about period and Pain from our Experts",
    poster: "/images/image/service3.png",
    price: 299,
  },
  {
    title: "Get Healthy",
    desc: "Get a Consultation about period and Pain from our Experts",
    poster: "/images/image/service4.png",
    price: 299,
  },
  {
    title: "School and Mensuration",
    desc: "Get a Consultation about period and Pain from our Experts",
    poster: "/images/image/service5.png",
    price: 299,
  },
  {
    title: "Period & Pain",
    desc: "Get a Consultation about period and Pain from our Experts",
    poster: "/images/image/service1.png",
    price: 299,
  },
  {
    title: "Period & Pain",
    desc: "Get a Consultation about period and Pain from our Experts",
    poster: "/images/image/service1.png",
    price: 299,
  },
  {
    title: "Period & Pain",
    desc: "Get a Consultation about period and Pain from our Experts",
    poster: "/images/image/service1.png",
    price: 299,
  },
];

const ServiceContainer = () => {
  return (
    <div className="px-4 py-10 sm:px-6">
      <h1 className="text-xl md:text-2xl lg:text-[32px] font-playfair tracking-wide font-bold text-center text-gray-800 mt-4">Our Services</h1>
      <div className="relative">
        <div className="absolute -left-0 global__rotate-animation -top-16 hidden lg:block">
          <UpperCircleElement height={180} width={180} />
        </div>
        <div className="absolute right-5 global__rotate-animation bottom-10 hidden lg:block">
          <UpperCircleElement height={150} width={150} />
        </div>
        <div className="md:px-16 mt-6 grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-3 relative z-3">
          {/* Card Starting */}
          {services.map((service) => (
            <ServiceCard service={service} />
          ))}
        </div>
        <div className="mt-10">
          <Link href='/service' legacyBehavior passHref>
            <a>
              <Outlined buttonText="View All" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceContainer;
