import { useRef } from "react";
import "./certificates.scss";
import { motion, useInView } from "framer-motion";
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



const Certificates = () => {

  return (
    <motion.div
      className="certificates"
    >
      <div>
        <div className="container">
          <h1 className="">My Certificates.</h1>
          <div className='flex flex-row flex-wrap justify-center items-center gap-14'>
            {certificates.map((certificate) => (
                <motion.div
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
                >
                  <div className='flex flex-col  text-center w-[120px] h-[150px] lg:w-[140px] lg:h-[170px] gap-4 cursor-pointer transition ' key={certificate.id}>
                      <img  src={certificate.img} alt={certificate.title} />
                      <p className="text-sm">{certificate.title}</p>
                  </div>
                </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Certificates;
