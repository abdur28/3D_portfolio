import { useRef } from "react";
import "./projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { game, jjphoto, dollar, blog, webApp, tourly, space, stylesavant, Residity } from "../../../assets/images";
import Tilt from 'react-parallax-tilt';

const items = [
  {
    id: 0,
    title: "Residity Real Estate Platform",
    img: `${Residity}`,
    link: 'https://residity.com/',
    desc: "A comprehensive real estate platform connecting property buyers, sellers, and agents. Features include property listings, advanced search with geolocation, real-time chat, secure payments, agent verification, and analytics dashboards for business intelligence.",
    tags: [
      {name: 'React Native', color: 'sky-blue'}, 
      {name: 'Node.js', color: 'green'}, 
      {name: 'Firebase', color: 'orange'}, 
      {name: 'Next.js', color: 'black'}, 
      {name: 'TypeScript', color: 'blue'}, 
      {name: 'TailwindCSS', color: 'light-blue'},
      {name: 'Google Maps', color: 'red'},
    ]
  },
  {
    id: 1,
    title: "StyleSavant",
    img: `${stylesavant}`,
    link: 'https://stylesavant.netlify.app/',
    desc: "Full-stack e-commerce platform with Clerk authentication, Paystack payment processing, and a custom admin dashboard for product and order management.",
    tags: [{name:'Node.JS', color:'green'}, {name:'React.JS', color:'sky-blue'}, {name:'Next.JS', color:'black'}, {name:'MongoDB', color:'light-green'}, {name:'TailwindCSS', color:'light-blue'}, {name:'Clerk', color:'blue'}, {name:'PayStack', color:'light-blue'}]
  },
  {
    id: 2,
    title: "JJ Photography",
    img: `${jjphoto}`,
    link: 'https://jerryjphotography.com/',
    desc: "Photography portfolio with AWS-hosted image galleries, Redis-cached content delivery, and an admin CMS for the photographer to manage portfolios and booking inquiries.",
    tags: [{name:'Node.JS', color:'green'},{name:'Next.JS', color:'black'}, {name:'AWS', color:'orange'}, {name:'MongoDB', color:'light-green'}, {name:'Redis', color:'red'}, {name:'TailwindCSS', color:'light-blue'}]
  },
  {
    id: 3,
    title: "3D Web App",
    img: `${webApp}`,
    link: 'https://graphic-designer-portfolio2.vercel.app/',
    tags: [{name:'React.JS', color:'sky-blue'}, {name:'WebGL', color:'red'}, {name:'Three.JS', color:'gray'}, {name:'TailwindCSS', color:'light-blue'}],
    desc: "A 3D web app built with three.js offers immersive experiences with interactive 3D graphics and animations. Users can explore virtual environments and interact with objects in real-time directly from their web browsers.",
  },
  {
    id: 4,
    title: "Tourly",
    img: `${tourly}`,
    link: 'https://abdur28.github.io/tourly/',
    tags: [{name:'Node.JS', color:'green'}, {name:'AWS', color:'orange'}, {name:'MongoDB', color:'light-green'},{name:'Redis', color:'red'},{name:'Next.JS', color:'black'}, {name:'TailwindCSS', color:'light-blue'}],
    desc: "Travel booking platform where users can browse destinations, register accounts, and book and pay for tour guides."
  },
  {
    id: 5,
    title: "Dollar-to-RUB Tracker",
    img: `${dollar}`,
    link: 'https://dollar-to-rub.cyclic.app/',
    tags: [{name:'Node.JS', color:'green'}, {name:'Python', color:'light-blue'}, {name:'MongoDB', color:'light-green'}],
    desc: "Automated currency exchange tracker that scrapes live USD/RUB rates and emails daily updates to registered subscribers."
  },
  {
    id: 6,
    title: "Space — SaaS Landing Page",
    img: `${space}`,
    link: 'https://abdur28.github.io/space-website/',
    git: 'https://github.com/abdur28/space-website',
    tags: [{name:'Node.JS', color:'green'}, {name:'Next.JS', color:'black'}, {name:'MongoDB', color:'light-green'}, {name:'TailwindCSS', color:'light-blue'}],
    desc: "Fully responsive SaaS landing page with modern design, smooth animations, and mobile-first layout."
  },
  {
    id: 7,
    title: "Spaceship Wars",
    img: `${game}`,
    git: 'https://github.com/abdur28/spaceship-wars-game',
    tags: [{name:'Python', color:'light-blue'}, {name:'Pygame', color:'yellow'}],
    desc: "2D space combat game built with Pygame featuring real-time ship controls, enemy AI, and a scoring system.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper top-1/2">
          <Tilt options={{
            max: 45,
            scale: 1,
            speed: 450 
          }}>
            <div className="imageContainer" ref={ref}>
              <img src={item.img} alt="" />
            </div>
          </Tilt>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div className="flex flex-row flex-wrap gap-2 pt-2">
              {item.tags.map((tag) => (
                <p className={`${tag.color}`}>#{tag.name}</p>
              ))}
            </div>
            <div className="flex flex-row pt-4 gap-10">
              {item.link ? (
                <a href={item.link}>
                  <button className="button">Visit</button>
                </a>
              ) : null }
              {item.git ? (
                <a href={item.git}>
                  <button className="Btn">
                    <svg className="svgIcon" viewBox="0 0 496 512" height="1.4em" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                    <span className="text">Github</span>
                  </button>
                </a>
              ) : null }
            </div>  
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="projects" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Projects;
