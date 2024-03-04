import { useRef } from "react";
import "./skills.scss";
import { motion, useInView } from "framer-motion";
import { BallCanvas } from "../../../models/canvas";
import { technologies } from "../../../constants";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Skills = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="skills"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <div>
        <div className="container">
          <h1 className="">My skills.</h1>
          <div className='skills-container flex flex-row flex-wrap justify-center'>
            {technologies.map((technology) => (
                <div className='ball' key={technology.name}>
                    <BallCanvas icon={technology.icon} />
                </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
