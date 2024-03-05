import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <p className=' text-center'>
        Hi, I'm
        <span className='name'><b> Abdurrahman</b></span>
        <span className="animate-wave">👋</span>
        <br />
        Swipe left to explore 
        {/* <img src={arrow} alt='arrow' className='ml-10 w-4 h-5 object-contain' /> */}
      </p>
    );

  if (currentStage === 2) {
    return (
      <div>
        <p className=' text-center '>
          I'm a full-stack developer.
        </p>
        
        <Link to='/portfolio' className=' '>
          <button className="link-button">
              My Portfolio
          </button>    
        </Link>
      </div>
    );
  }

  // if (currentStage === 3) {
  //   return (
  //     <div>
  //     <p className='comics-neue-font text-center text-black'>
  //       I'm a full-stack developer
  //     </p>
      
  //     {/* <Link to='/portfolio' className='comics-neue-font'>
  //       <button className="link-button">
  //           My Portfolio
  //       </button>    
  //     </Link> */}
  //   </div>
  //   );
  // }

  if (currentStage === 3) {
    return (
      <div>
      <p className=' text-center '>
        What are you waiting for?
      </p>
      
      <Link to='/contact' className=''>
        <button className="link-button">
            Contact Me
        </button>    
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;
