import React from 'react';
import { StarsCanvas } from "../models/canvas";
import "./home.scss";
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <section className='w-full h-screen relative overflow-hidden'>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-row justify-center items-center pb-20"> 
          <h1 className="text-white font-black md:text-[50px] sm:text-[50px] xs:text-[40px] text-[40px]">
            WELCOME.
          </h1>
        </div>
        

        <div className="flex flex-row gap-5 md:gap-20 justify-center items-center">
          <div>
            <Link to='/world'>
              <button className="world-button">
                <span className="whitespace-nowrap">My World</span>
                <div className="star-1">
                  <svg
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 784.11 815.53"
                    style={{
                      shapeRendering: 'geometricPrecision',
                      textRendering: 'geometricPrecision',
                      imageRendering: 'optimizeQuality',
                      fillRule: 'evenodd',
                      clipRule: 'evenodd'
                    }}
                    version="1.1"
                    xmlSpace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs></defs>
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                      <path
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                        className="fil0"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="star-2">
                  <svg
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 784.11 815.53"
                    style={{
                      shapeRendering: 'geometricPrecision',
                      textRendering: 'geometricPrecision',
                      imageRendering: 'optimizeQuality',
                      fillRule: 'evenodd',
                      clipRule: 'evenodd'
                    }}
                    version="1.1"
                    xmlSpace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs></defs>
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                      <path
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                        className="fil0"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="star-3">
                  <svg
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 784.11 815.53"
                    style={{
                      shapeRendering: 'geometricPrecision',
                      textRendering: 'geometricPrecision',
                      imageRendering: 'optimizeQuality',
                      fillRule: 'evenodd',
                      clipRule: 'evenodd'
                    }}
                    version="1.1"
                    xmlSpace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs></defs>
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                      <path
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                        className="fil0"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="star-4">
                  <svg
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 784.11 815.53"
                    style={{
                      shapeRendering: 'geometricPrecision',
                      textRendering: 'geometricPrecision',
                      imageRendering: 'optimizeQuality',
                      fillRule: 'evenodd',
                      clipRule: 'evenodd'
                    }}
                    version="1.1"
                    xmlSpace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs></defs>
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                      <path
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                        className="fil0"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="star-5">
                  <svg
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 784.11 815.53"
                    style={{
                      shapeRendering: 'geometricPrecision',
                      textRendering: 'geometricPrecision',
                      imageRendering: 'optimizeQuality',
                      fillRule: 'evenodd',
                      clipRule: 'evenodd'
                    }}
                    version="1.1"
                    xmlSpace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs></defs>
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                      <path
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                        className="fil0"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="star-6">
                  <svg
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 784.11 815.53"
                    style={{
                      shapeRendering: 'geometricPrecision',
                      textRendering: 'geometricPrecision',
                      imageRendering: 'optimizeQuality',
                      fillRule: 'evenodd',
                      clipRule: 'evenodd'
                    }}
                    version="1.1"
                    xmlSpace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs></defs>
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                      <path
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                        className="fil0"
                      ></path>
                    </g>
                  </svg>
                </div>
              </button>
            </Link>
          </div>

          <div className="portfolio-button">
            <Link to='/portfolio' >
              <button className="learn-more ">
                <span aria-hidden="true" className="circle">
                <span className="icon arrow"></span>
                </span>
                <span className="button-text">My Portfolio</span>
              </button>
            </Link>
          </div>  

        </div>
      </div>

      <StarsCanvas/> 

    </section>
  );
};

export default Home;
