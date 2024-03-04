import { motion } from "framer-motion";

const ToggleButton = ({ setOpen }) => {
  let variant = null; // Define your initial variant value
  if (variant === null) {
    variant = "closed"; // Set variant to "closed" if it is initially null
  }

  return (
    <div className="button-div">
      <button onClick={() => setOpen((prev) => !prev)}>
        <svg width="23" height="23" viewBox="0 0 23 23" className="ml-3.5">
          <motion.path
            strokeWidth="3"
            stroke="black"
            strokeLinecap="round"
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            }}
            initial={variant} // Set the initial variant here
          />
          <motion.path
            strokeWidth="3"
            stroke="black"
            strokeLinecap="round"
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            initial={variant} // Set the initial variant here
          />
          <motion.path
            strokeWidth="3"
            stroke="black"
            strokeLinecap="round"
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" },
            }}
            initial={variant} // Set the initial variant here
          />
        </svg>
      </button>
    </div>
  );
};

export default ToggleButton;
