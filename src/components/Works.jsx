import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Link } from "react-router-dom";
const ProjectCard = ({
  index,
  id,
  name,
  description,
  file,
  thumbnail,
}) => {
  const navigate = useNavigate();
  return (
   <motion.div
  variants={fadeIn("up", "spring", index * 0.5, 0.75)}
  onClick={() => {

    navigate(`/project/${id}`);
  }}
>
 <Tilt
  options={{
    max: 45,
    scale: 1,
    speed: 450,
  }}
  className="bg-tertiary p-3 rounded-2xl sm:w-[360px] w-full h-[420px]"
>
        <div className="relative w-full h-[280px] group bg-[#1d1836] rounded-2xl overflow-hidden flex items-center justify-center"> 
          <img
  src={thumbnail}
  className="w-full h-full object-cover rounded-2xl"
/>

<video
  src={file}
  muted
  loop
  preload="metadata"
  className="absolute inset-0 z-0 w-full h-full object-cover rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
  onMouseEnter={(e) => e.target.play()}
  onMouseLeave={(e) => {
    e.target.pause();
    e.target.currentTime = 0;
  }}
/>
       </div>

        <div className="mt-5 h-[80px] flex flex-col justify-center">
  <h3 className="text-white font-bold text-[24px] text-center">
    {name}
  </h3>

  <p className="mt-2 text-secondary text-[14px] text-center">
    {description}
  </p>
</div>

        
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience of my work. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
  {projects.slice(0, 3).map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <div className="flex justify-center mt-10">
  <Link to="/projects">
    <button className="border border-[#4b3b8f] px-6 py-3 rounded-xl text-white">
      Show All
    </button>
  </Link>
</div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
