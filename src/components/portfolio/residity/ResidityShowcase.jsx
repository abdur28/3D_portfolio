import { useRef } from "react";
import "./residity.scss";
import { motion, useInView } from "framer-motion";
import Tilt from 'react-parallax-tilt';

const variants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const featureVariants = {
  initial: { 
    opacity: 0, 
    y: 20 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const ResidityShowcase = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  // Replace with actual screenshots/mockups of Residity
  const residityScreenshots = [
    "/path/to/residity-screenshot1.jpg",
    "/path/to/residity-screenshot2.jpg",
    "/path/to/residity-screenshot3.jpg",
  ];

  const features = [
    {
      title: "Advanced Property Search",
      description: "Implemented geospatial search capabilities with MapBox integration allowing users to find properties based on location, amenities, and price range.",
      icon: "🔍"
    },
    {
      title: "Real-time Messaging",
      description: "Developed a real-time chat system connecting buyers with agents, featuring read receipts, media sharing, and notification integration.",
      icon: "💬"
    },
    {
      title: "Payment Processing",
      description: "Integrated secure payment gateways to facilitate property transactions, agent commissions, and subscription services.",
      icon: "💳"
    },
    {
      title: "Cross-platform Development",
      description: "Created both web and mobile applications using React Native, ensuring consistent user experience across all platforms.",
      icon: "📱"
    },
    {
      title: "Analytics Dashboard",
      description: "Built comprehensive analytics tools to track user engagement, property views, and market trends to inform business decisions.",
      icon: "📊"
    }
  ];

  const achievements = [
    "Grew user base to 1k+ users within first month",
    "Reduced property listing time by 40% through optimized workflows",
    "Featured in [relevant tech or real estate publications]",
    "Secured partnerships with some major real estate agencies"
  ];

  return (
    <motion.div
      className="residity"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView ? "animate" : "initial"}
    >
      <div className="container">
        <div className="content">
          <h1 className="title">Founder & Lead Developer at Residity</h1>
          <h2 className="subtitle">Real Estate Platform</h2>
          
          <p className="description">
            As the CEO and lead developer of Residity, I've architected and built a comprehensive real estate platform 
            that connects property buyers, sellers, and agents through an intuitive and feature-rich ecosystem.
            The platform handles everything from property listings and searches to agent coordination and secure payment processing.
          </p>

          <div className="stats-container">
            <div className="stat">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Users</span>
            </div>
            <div className="stat">
              <span className="stat-number">5K+</span>
              <span className="stat-label">Properties</span>
            </div>
            <div className="stat">
              <span className="stat-number">200+</span>
              <span className="stat-label">Agents</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Agencies</span>
            </div>
          </div>

          <h3 className="section-title">Key Features Developed</h3>
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="feature-card"
                variants={featureVariants}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h4 className="feature-title">{feature.title}</h4>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <h3 className="section-title">Technical Stack</h3>
          <div className="tech-stack">
            <span className="tech-item">React Native</span>
            <span className="tech-item">Node.js</span>
            <span className="tech-item">Firebase</span>
            <span className="tech-item">MongoDB</span>
            <span className="tech-item">Express</span>
            <span className="tech-item">Redux</span>
            <span className="tech-item">Next.js</span>
            <span className="tech-item">TailwindCSS</span>
            <span className="tech-item">Google Maps API</span>
            <span className="tech-item">Payment Integrations</span>
          </div>

          <h3 className="section-title">Business Achievements</h3>
          <ul className="achievements-list">
            {achievements.map((achievement, index) => (
              <motion.li 
                key={index}
                variants={featureVariants}
                className="achievement-item"
              >
                {achievement}
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="gallery">
          <h3 className="section-title">Platform Preview</h3>
          <div className="screenshots">
            {residityScreenshots.map((screenshot, index) => (
              <Tilt key={index} options={{ max: 15, scale: 1, speed: 450 }}>
                <div className="screenshot-container">
                  <img 
                    src={screenshot} 
                    alt={`Residity platform screenshot ${index + 1}`} 
                    className="screenshot"
                  />
                </div>
              </Tilt>
            ))}
          </div>
          
          <div className="cta-container">
            <a href="https://residity.com" target="_blank" rel="noopener noreferrer" className="cta-button">
              Visit Residity
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ResidityShowcase;