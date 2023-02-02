import React from "react";
import { UpperCircleElement } from "../../assets";
import TeamCard from "./TeamCard";

const teams = [
  {
    name: "Dr Haleema Yezdani",
    expertise: "Nuticiation expert",
    experience: "12 Years Experience",
    language: "Hindi, English",
    qualification: "MBBs",
    code: "2kT23vTkw",
    image: "/images/image/team1.png",
  },
  {
    name: "Dr Ria Nayyar",
    expertise: "Nuticiation expert",
    experience: "12 Years Experience",
    language: "Hindi, English",
    qualification: "MBBs",
    code: "2kT23vTkw",
    image: "/images/image/team2.png",
  },
  {
    name: "Dr Charu Singh",
    expertise: "Nuticiation expert",
    experience: "12 Years Experience",
    language: "Hindi, English",
    qualification: "MBBs",
    code: "2kT23vTkw",
    image: "/images/image/team4.png",
  },
  {
    name: "Ms Sameer Manda",
    expertise: "Nuticiation expert",
    experience: "12 Years Experience",
    language: "Hindi, English",
    qualification: "MBBs",
    code: "2kT23vTkw",
    image: "/images/image/team3.png",
  },
];

const Team = () => {
  return (
    <div className="main__padding relative py-7 md:py-9 lg:mt-12 ">
      <div className="relative">
        <div className="absolute -left-10 global__rotate-animation hidden lg:block">
          <UpperCircleElement height={180} width={180} />
        </div>
        <div className="md:px-10 relative z-2">
          <h2 className="text-xl md:text-2xl lg:text-[32px] font-playfair tracking-wide font-bold text-center text-gray-800 mb-5">
            Meet Our Team
          </h2>

          <div className="grid grid-cols-2 pb-12 md:grid-cols-3 gap-3 py-3">
            {teams.map((team) => (
              <TeamCard team={team} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
