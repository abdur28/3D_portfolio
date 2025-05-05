import { useRef, useEffect } from "react";
import "./achievements.scss";
import { motion, useInView, useAnimation } from "framer-motion";
import { awardWeb, awardJs, awardReact, awardAi, awardAnalysis, awardBackend, certificateWeb, certificateJs, certificateReact, certificateBackend } from "../../../assets/images";

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

// Academic publications
const publications = [
  {
    id: 1,
    title: "Optimizing Rubber Seed Oil Extraction for Biodiesel Production Using Machine Learning Tools",
    subtitle: "A Comparative Study of Response Surface Methodology and Artificial Neural Networks",
    journal: "Journal Publication",
    year: "2025", // Replace with actual year
    doi: "10.48309/PCBR.2025.510277.1399", // Replace with actual DOI
    link: "https://www.pcbiochemres.com/article_218044_8648baa3f11562ca24318b1bfb45e4da.pdf" 
  },
  {
    id: 2,
    title: "Optimizing Biodiesel Yield and Fuel Properties from Waste Avocado Oil",
    subtitle: "A Comparative Study of RSM and ANFIS Machine Learning Models",
    journal: "Journal Publication",
    year: "2025", // Replace with actual year
    doi: "10.48309/pcbr.2025.495665.1389", // Replace with actual DOI
    link: "https://www.pcbiochemres.com/article_214130_7985d5ab243bc54cb6f3d78bfe55576b.pdf"
  }
];

// Achievements
const achievements = [
  {
    id: 1,
    title: "Opendoors Olympiad Winner",
    organization: "Opendoors",
    year: "2022", // Replace with actual year
    description: "Recognized for outstanding performance in the international Opendoors olympiad competition.",
    link: "#" // Replace with link if available
  }
];

const titleVariant = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const AchievementsCertificates = () => {
  const publicationsRef = useRef();
  const achievementsRef = useRef();
  const certificatesRef = useRef();
  
  const titleControls = useAnimation();
  const pubControls = useAnimation();
  const achieveControls = useAnimation();
  const certControls = useAnimation();
  
  const isPublicationsInView = useInView(publicationsRef, { 
    once: true,
    margin: "-100px" 
  });
  
  const isAchievementsInView = useInView(achievementsRef, { 
    once: true,
    margin: "-100px" 
  });
  
  const isCertificatesInView = useInView(certificatesRef, { 
    once: true,
    margin: "-100px" 
  });

  // Handle animations only once when elements come into view
  useEffect(() => {
    if (isPublicationsInView) {
      pubControls.start("visible");
    }
  }, [isPublicationsInView, pubControls]);

  useEffect(() => {
    if (isAchievementsInView) {
      achieveControls.start("visible");
    }
  }, [isAchievementsInView, achieveControls]);

  useEffect(() => {
    if (isCertificatesInView) {
      certControls.start("visible");
    }
  }, [isCertificatesInView, certControls]);

  // Start title animation on mount
  useEffect(() => {
    titleControls.start("visible");
  }, [titleControls]);

  return (
    <div className="achievements-certificates">
      <div className="container">
        <motion.h1 
          className="main-title"
          initial="hidden"
          animate={titleControls}
          variants={titleVariant}
        >
          Achievements & Certifications
        </motion.h1>
        
        {/* Academic Publications Section */}
        <div ref={publicationsRef} className="publications-section">
          <motion.h2 
            className="section-title"
            initial="hidden"
            animate={pubControls}
            variants={titleVariant}
          >
            Academic Publications
          </motion.h2>
          
          <motion.div 
            className="publications-container"
            variants={containerVariant}
            initial="hidden"
            animate={pubControls}
          >
            {publications.map((publication) => (
              <motion.div
                key={publication.id}
                className="publication-card"
                variants={itemVariant}
              >
                <div className="publication-content">
                  <h3 className="publication-title">{publication.title}</h3>
                  <h4 className="publication-subtitle">{publication.subtitle}</h4>
                  <p className="publication-meta">
                    {publication.journal} • {publication.year} • DOI: {publication.doi}
                  </p>
                  <a 
                    href={publication.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="view-link"
                  >
                    View Publication →
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Other Achievements Section */}
        <div ref={achievementsRef} className="achievements-section">
          <motion.h2 
            className="section-title"
            initial="hidden"
            animate={achieveControls}
            variants={titleVariant}
          >
            Awards & Recognition
          </motion.h2>
          
          <motion.div 
            className="achievements-container"
            variants={containerVariant}
            initial="hidden"
            animate={achieveControls}
          >
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.id}
                className="achievement-card"
                variants={itemVariant}
              >
                <div className="achievement-content">
                  <div className="achievement-badge">🏆</div>
                  <div className="achievement-details">
                    <h3 className="achievement-title">{achievement.title}</h3>
                    <p className="achievement-meta">
                      {achievement.organization} • {achievement.year}
                    </p>
                    <p className="achievement-description">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Certificates Section */}
        <div ref={certificatesRef} className="certificates-section">
          <motion.h2 
            className="section-title"
            initial="hidden"
            animate={certControls}
            variants={titleVariant}
          >
            Technical Certifications
          </motion.h2>
          
          <motion.div 
            className="certificates-container"
            variants={containerVariant}
            initial="hidden"
            animate={certControls}
          >
            {certificates.map((certificate, index) => (
              <motion.div
                key={certificate.id}
                className="certificate-item-wrapper"
                variants={itemVariant}
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  if (certificate.certificate !== "") {
                    window.open(certificate.certificate);
                  }
                }}
              >
                <div className='certificate-item'>
                  <img src={certificate.img} alt={certificate.title} />
                  <p className="certificate-title">{certificate.title}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsCertificates;