import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {


  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

       <div className="mt-12 flex flex-col gap-6">

  <a
    href="tel:+8801984827286"
    className="bg-tertiary py-4 px-6 rounded-lg flex items-center gap-4 text-white transition hover:scale-105"
  >
    <span className="text-2xl">📞</span>

    <div>
      <p className="text-secondary text-sm">Call me</p>
      <p className="font-medium">01984-827286</p>
    </div>
  </a>

  <a
    href="https://wa.me/8801984827286"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-tertiary py-4 px-6 rounded-lg flex items-center gap-4 text-white transition hover:scale-105"
  >
    <span className="text-2xl">💬</span>

    <div>
      <p className="text-secondary text-sm">WhatsApp</p>
      <p className="font-medium">01984-827286</p>
    </div>
  </a>

  <a
    href="mailto:tnjmssn@gmail.com"
    className="bg-tertiary py-4 px-6 rounded-lg flex items-center gap-4 text-white transition hover:scale-105"
  >
    <span className="text-2xl">📧</span>

    <div>
      <p className="text-secondary text-sm">Email</p>
      <p className="font-medium">tnjmssn@gmail.com</p>
    </div>
  </a>

</div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
