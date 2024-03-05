import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(0px at 340px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobileCheck = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    mobileCheck(); 

    const handleResize = () => {
      mobileCheck(); 
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const clipPath = isMobile ? "circle(0px at 115px 50px)" : "circle(0px at 340px 50px)";

  variants.closed.clipPath = clipPath;

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"} initial="closed">
      <motion.div className="bg" animate={open ? "open" : "closed"} variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
