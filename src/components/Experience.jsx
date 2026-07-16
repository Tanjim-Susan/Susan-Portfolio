import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  const navigate = useNavigate();

  const openCertificate = () => {
    navigate(`/certificate/${experience.id}`);
  };

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.title}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div
        onClick={openCertificate}
        className="cursor-pointer"
      >
        <h3 className="text-white text-[24px] font-bold">
          {experience.title}
        </h3>

        <img
          src={experience.certificate}
          alt={experience.title}
          className="mt-4 rounded-xl w-full"
        />
      </div>
    </VerticalTimelineElement>
  );
};
const Experience = () => {
  
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have achieved so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Certificates.
        </h2>
      </motion.div>

     <div className='mt-20 flex flex-col'>
  <VerticalTimeline>
    {experiences.slice(0, 4).map((experience, index) => (
      <ExperienceCard
        key={`experience-${index}`}
        experience={experience}
      />
    ))}
  </VerticalTimeline>

  <div className="flex justify-center mt-10">
    <Link to="/certificates">
      <button className="green-pink-gradient p-[1px] rounded-[20px]">
        <div className="bg-tertiary rounded-[20px] py-3 px-8">
          View All Certificates
        </div>
      </button>
    </Link>
  </div>
</div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
