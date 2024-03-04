import { useRef } from "react";
import "./about.scss";
import { motion, useInView } from "framer-motion";

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

const About = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <div>
        <div className="text-container">
          <h1 className="">About Me.</h1>
          <p>Experienced software developer based in Moscow, Russia, proficient in JavaScript, Python, C++, and PHP, with expertise in frameworks like React, Node.js, Flask, and Three.js. Alongside my proficiency in software development, I am also a Mechatronics engineer and Robotics student, blending theoretical knowledge with practical application in the field. With a proven track record of delivering efficient and scalable solutions, I excel in addressing real-world challenges head-on.</p>
          <p>I have extensive experience in developing web applications, APIs, databases and interactive experiences using a combination of these technologies. From frontend development with React to backend solutions with Node.js and Flask, I am adept at crafting robust and dynamic software solutions that meet and exceed your expectations. My ability to analyze complex problems and architect elegant solutions makes me a valuable asset in any development team.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
