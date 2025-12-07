import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { BiArrowBack } from "react-icons/bi";
import Link from "next/link";

const Herobanner = () => {
  return (
    <div className="relative w-full">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showArrows={false}
        showIndicators={false}
        interval={5000}
        className="hero-carousel"
      >
        {/* Slide 1 - Air Jordan Feature */}
        <div className="relative min-h-[500px] md:min-h-[600px] bg-gradient-to-br from-red-500 via-pink-500 to-orange-400">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center text-left">
              <div className="text-white space-y-8 z-10">
                <div className="space-y-4">
                  <h1 className="font-black text-6xl md:text-8xl lg:text-9xl italic uppercase tracking-wider leading-none">
                    AIR
                  </h1>
                  <h1 className="font-black text-6xl md:text-8xl lg:text-9xl italic uppercase tracking-wider leading-none">
                    JORDAN
                  </h1>
                  <p className="text-2xl md:text-4xl font-bold italic">5 Retro</p>
                </div>
                <Link href="/product/air-jordan-5-retro">
                  <button className="bg-white text-black px-8 py-3 rounded-full font-bold uppercase text-sm hover:bg-gray-100 transition-all transform hover:scale-105 active:scale-95">
                    Shop Now
                  </button>
                </Link>
              </div>
              <div className="relative hidden lg:block">
                <img 
                  src="/slide-1.png"
                  alt="Air Jordan 5 Retro"
                  className="relative z-10 w-full transform rotate-[-25deg] hover:rotate-[-20deg] transition-transform duration-500 drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative">
          <img
            src="/slide-2.png"
            className="w-full h-[500px] md:h-[600px] object-cover"
            alt="Nike Collection"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
          <Link href="/category/running">
            <div className="absolute bottom-[50px] md:bottom-[100px] left-[20px] md:left-[40px] px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 hover:text-white transition-all transform hover:scale-105">
              Shop Now
            </div>
          </Link>
        </div>

        {/* Slide 3 */}
        <div className="relative">
          <img
            src="/slide-3.png"
            className="w-full h-[500px] md:h-[600px] object-cover"
            alt="Nike Lifestyle"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
          <Link href="/category/lifestyle">
            <div className="absolute bottom-[50px] md:bottom-[100px] left-[20px] md:left-[40px] px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 hover:text-white transition-all transform hover:scale-105">
              Shop Now
            </div>
          </Link>
        </div>
      </Carousel>
      
      {/* Custom Arrow Controls */}
      <style jsx>{`
        .hero-carousel :global(.carousel .control-dots) {
          bottom: 20px;
        }
        .hero-carousel :global(.carousel .control-dots .dot) {
          background: rgba(255, 255, 255, 0.5);
          box-shadow: none;
          width: 12px;
          height: 12px;
        }
        .hero-carousel :global(.carousel .control-dots .dot.selected) {
          background: white;
        }
      `}</style>
    </div>
  );
};

export default Herobanner;