import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const location = useLocation();
  const items = ["World", "Portfolio", "Contact"];
  const subItems = ['About', 'Skills', 'Projects', 'Contact'];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        item === "Portfolio" && location.pathname === "/portfolio" ? (
          <>
            <motion.a
              href={item === 'Homepage' ? '/' : `${item.toLowerCase()}`}
              key={item}
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
            {subItems.map((subItem) => (
              <motion.a
                className="sub-link"
                href={`/${item.toLowerCase()}#${subItem.toLowerCase()}`}
                key={`${item}-${subItem}`} // Using a combination of item and subItem for key
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {subItem} {/* Rendering subItem here */}
              </motion.a>
            ))}
          </>
        ) : (
          <motion.a
            href={item === 'Homepage' ? '/' : `${item.toLowerCase()}`}
            key={item}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {item}
          </motion.a>
        )
      ))}
    </motion.div>
  );
};

export default Links;
