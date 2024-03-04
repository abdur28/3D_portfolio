import { useRef } from "react";
import "./projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { game, jjphoto, dollar, blog, webApp } from "../../../assets/images";
import Tilt from 'react-parallax-tilt';
import { a } from "@react-spring/three";

const items = [
  {
    id: 1,
    title: "Photography Website",
    img: `${jjphoto}`,
    link: 'https://puce-distinct-pangolin.cyclic.app/',
    desc: "A photography portfolio website with showcases the artist's work, providing a visually stunning platform to exhibit their photography skills and creative vision. Visitors can browse through various galleries and contact the photographer for inquiries or bookings. It also includes an admin route for the photographer to manage and update their portfolio content.",
    tags: [{name:'Node.JS', color:'green'}, {name:'AWS', color:'orange'}, {name:'MongoDB', color:'light-green'}, {name:'Redis', color:'red'}, {name:'TailwindCSS', color:'light-blue'}]
  },
  {
    id: 2,
    title: "3D Web App",
    img: `${webApp}`,
    link: '/',
    tags: [{name:'React.JS', color:'sky-blue'}, {name:'WebGL', color:'red'}, {name:'Three.JS', color:'gray'}, {name:'TailwindCSS', color:'light-blue'}],
    desc: "A 3D web app built with three.js offers immersive experiences with interactive 3D graphics and animations. Users can explore virtual environments and interact with objects in real-time directly from their web browsers.",
  },
  {
    id: 3,
    title: "Blog Website",
    img: `${blog}`,
    git: 'https://github.com/abdur28/blog_with_users',
    tags: [{name:'Python', color:'light-blue'}, {name:'Flask', color:'gray'}, {name:'MySQL', color:'blue'}, {name:'BootstrapCSS', color:'purple'}],
    desc: "A blog web platform that allows users to register and login, enabling them to access personalized features such as commenting, bookmarking posts, and receiving tailored recommendations based on their interests.",
  },
  {
    id: 4,
    title: "Newsletter ",
    img: `${dollar}`,
    link: 'https://dollar-to-rub.cyclic.app/',
    git: 'https://github.com/abdur28/dollar_to_rub',
    tags: [{name:'Node.JS', color:'green'}, {name:'Python', color:'light-blue'}, {name:'MongoDB', color:'light-green'}],
    desc: "A web application that sends daily currency rate exchange to registered users. Users receive timely updates on currency fluctuations via email or notifications."
  },
  {
    id: 5,
    title: "Games",
    img: `${game}`,
    git: 'https://github.com/abdur28/spaceship-wars-game',
    tags: [{name:'Python', color:'light-blue'}, {name:'Pygame', color:'yellow'}],
    desc: "A gaming platform that provides a diverse selection of games for players of all ages and interests. It offers a seamless gaming experience with features such as multiplayer options and leaderboards.",
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
        <div className="wrapper">
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
            <div className="flex flex-row gap-2 pt-2">
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
                  <button class="Btn">
                    <svg class="svgIcon" viewBox="0 0 496 512" height="1.4em" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                    <span class="text">Github</span>
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
