import { Avatar } from "../../../models";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Loader } from "../../../components";
import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-420%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  const adjustAvatarForScreenSize = () => {
    let screenScale, screenPosition;
    // If screen width is less than 768px, adjust the scale and position
    if (window.innerWidth < 768) {
      screenScale = [3.7, 3.7, 3.7];
      screenPosition = [0.3, -4.8, 0];
    } else {
      screenScale = [6.5, 6.5, 6.5];
      screenPosition = [0.8, -9, -4];
    }

    return [screenScale, screenPosition];
  };

  const [avatarScale, avatarPosition] = adjustAvatarForScreenSize();

  return (
    <div className="hero mt-20">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Abdurrahman Idris</motion.h2>
          <motion.h1 variants={textVariants}>
            Software Engineer
          </motion.h1>
          <motion.h3 variants={textVariants} className="subtitle">
            Full Stack Developer | Founder of Residity | Robotics Engineer
          </motion.h3>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Developer Entrepreneur Leader
      </motion.div>
      <div className="imageContainer">
        <Canvas
          className={'w-full h-screen bg-transparent'}
          camera={{ near: 0.1, far: 1000 }}
        >
          <Suspense fallback={<Loader />}>
            <directionalLight position={[1, 1, 1]} intensity={2} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 5, 10]} intensity={2} />
            <spotLight
              position={[0, 50, 10]}
              angle={0.15}
              penumbra={1}
              intensity={2}
            />
            <hemisphereLight
              skyColor='#b1e1ff'
              groundColor='#000000'
              intensity={1}
            />
            <Avatar
            position={avatarPosition}
            rotation={[0.5, -0.1, 0]}
            scale={avatarScale}
            />

          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default Hero;