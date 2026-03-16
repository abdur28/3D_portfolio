import { useRef, useEffect } from "react";
import "./about.scss";
import { motion, useInView, useAnimation } from "framer-motion";

const titleVariant = {
  hidden: {
    opacity: 0,
    y: -30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.6, 0.05, 0.01, 0.9],
    }
  }
};

const paragraphVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: index => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.2 * (index + 1),
      ease: "easeOut"
    }
  })
};

const About = () => {
  const ref = useRef();
  const controls = useAnimation();
  
  // Use once: true to ensure animations only play once
  const isInView = useInView(ref, { 
    margin: "-100px", 
    once: true,
    amount: 0.3
  });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const paragraphs = [
    "At the intersection of robotics and software development, I've built a unique career that bridges virtual and physical worlds. As a Mechatronics engineer and software developer, I create systems where code transforms into real-world motion and intelligence. This fusion of disciplines allows me to approach problems with a rare perspective—seeing both the code that drives systems and the mechanical realities they must navigate.",
    
    "My journey began with a fascination for how things work, which evolved into building robots while simultaneously mastering the full software stack—from crafting immersive 3D experiences with Three.js to architecting complex backends with Node.js, React, React Native, and Flask. This dual expertise became particularly valuable when founding Residity, where my mechanical understanding of physical spaces informed how we digitally represent properties and automate real estate processes.",
    
    "Beyond technical skills, I thrive on the creative challenge of transforming abstract problems into elegant solutions. Whether designing scalable APIs, optimizing databases for fast property searches, or programming robotic systems that interact with their environment, I apply the same methodical approach: understand the core challenge, design an adaptable architecture, and implement with precision and foresight. This blend of creativity, technical depth, and cross-disciplinary knowledge enables me to build solutions others might not envision."
  ];

  return (
    <motion.div
      className="services"
      ref={ref}
      initial="hidden"
      animate={controls}
    >
      <div>
        <div className="text-container">
          <motion.h1 
            variants={titleVariant}
            className=""
          >
            About Me.
          </motion.h1>
          
          {paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              custom={index}
              variants={paragraphVariants}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default About;