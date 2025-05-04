import { useRef } from "react";
import "./achievements.scss";
import { motion, useInView } from "framer-motion";
import { awardWeb, awardJs, awardReact, awardAi, awardAnalysis, awardBackend, certificateWeb, certificateJs, certificateReact, certificateBackend} from "../../../assets/images";

// Container animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Item animation variants
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 10
    }
  }
};

const certificates = [
  {
    id: 1,
    img: awardWeb,
    title: "Web Development",
    certificate: certificateWeb,
    link: "https://www.freecodecamp.org/certification/fcc842e2290-8c51-45ec-b5a8-6c8758b29bc4/responsive-web-design",
  },
  {
    id: 2,
    img: awardJs,
    title: "Javascript algorithms and data structures",
    certificate: certificateJs,
    link: 'https://www.freecodecamp.org/certification/fcc842e2290-8c51-45ec-b5a8-6c8758b29bc4/javascript-algorithms-and-data-structures-v8',
  },
  {
    id: 3,
    img: awardReact,
    title: "Frontend Development",
    certificate: certificateReact,
    link: "https://www.freecodecamp.org/certification/fcc842e2290-8c51-45ec-b5a8-6c8758b29bc4/front-end-development-libraries",
  },
  {
    id: 4,
    img: awardBackend,
    title: "Backend Development and APIs",
    certificate: certificateBackend,
    link: 'https://www.freecodecamp.org/certification/fcc842e2290-8c51-45ec-b5a8-6c8758b29bc4/back-end-development-and-apis',
  },
  {
    id: 5,
    img: awardAi,
    title: "Machine Learning",
    certificate: '',
    link: "",
  },
  {
    id: 6,
    img: awardAnalysis,
    title: "Data Analysis and Visualization",
    certificate: '',
    link: "",
  },
];

// Replace with your actual publication information
const publications = [
  {
    id: 1,
    img: '',
    title: "Real Estate Market Analysis using Machine Learning",
    publisher: "International Journal of Real Estate Technology",
    year: "2023",
    link: "https://example.com/publication1",
  },
  {
    id: 2,
    img: '',
    title: "Mobile Application Development for Property Management",
    publisher: "Journal of Software Engineering",
    year: "2022",
    link: "https://example.com/publication2",
  }
];

// Replace with your actual award information
const awards = [
  {
    id: 1,
    img: '',
    title: "OpenDoors Olympiad Winner",
    organization: "OpenDoors International Competition",
    year: "2021",
    description: "First place in the Software Development category",
    link: "https://example.com/opendoors-results",
  }
];

const Achievements = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div 
      className="achievements"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container">
        <h1>My Achievements</h1>
        
        {/* Publications Section */}
        <motion.div 
          className="section"
          variants={itemVariants}
        >
          <h2 className="section-title">Publications</h2>
          <div className="content-grid">
            {publications.map((publication) => (
              <motion.div
                key={publication.id}
                className="publication-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                onClick={() => publication.link && window.open(publication.link)}
              >
                <div className="card-icon">
                  <img src={publication.img} alt="Publication" />
                </div>
                <div className="card-content">
                  <h3>{publication.title}</h3>
                  <p>{publication.publisher}</p>
                  <p className="year">{publication.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Awards Section */}
        <motion.div 
          className="section"
          variants={itemVariants}
        >
          <h2 className="section-title">Awards & Recognition</h2>
          <div className="content-grid">
            {awards.map((award) => (
              <motion.div
                key={award.id}
                className="award-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                onClick={() => award.link && window.open(award.link)}
              >
                <div className="card-icon">
                  <img src={award.img} alt="Award" />
                </div>
                <div className="card-content">
                  <h3>{award.title}</h3>
                  <p>{award.organization}</p>
                  <p className="description">{award.description}</p>
                  <p className="year">{award.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Certificates Section */}
        <motion.div 
          className="section"
          variants={itemVariants}
        >
          <h2 className="section-title">Certificates</h2>
          <div className="certificates-grid">
            {certificates.map((certificate) => (
              <motion.div
                key={certificate.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1, transition: { type: "spring", stiffness: 50, damping: 10 } }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                viewport={{ once: true }}
                onClick={() => {
                  if (certificate.certificate !== "") {
                    window.open(certificate.certificate);
                  }
                }}
                className="certificate-item"
              >
                <div className='flex flex-col text-center w-[120px] h-[150px] lg:w-[140px] lg:h-[170px] gap-4 cursor-pointer transition'>
                  <img src={certificate.img} alt={certificate.title} />
                  <p className="text-sm">{certificate.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Achievements;