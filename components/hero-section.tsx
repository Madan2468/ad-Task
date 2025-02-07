"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import LoginOverlay from '@/components/ui/LoginOverlay';  // Updated import path for ui folder
import ChatBot from '@/components/ui/ChatBot';  // Updated import path for ui folder

export function HeroSection() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isChatBotOpen, setIsChatBotOpen] = useState(false);

  const handleTryNowClick = () => {
    setIsLoginOpen(true);
  };

  const handleResourcesClick = () => {
    setIsChatBotOpen(true);
  };

  return (
    <>
      <section className="relative min-h-screen flex flex-col items-center justify-start bg-[#050506] text-white overflow-hidden">
        {/* Updated Navbar */}
        <div className="w-full flex justify-center items-center z-20">
          <div className="w-[738px] h-[63px] my-[33px] flex items-center justify-between bg-[#0A0A0B] p-8 rounded-[16px] border border-[#FFFFFF1A]">
            {/* <div>
              <span className="text-white text-2xl font-medium">adTask.ai</span>
            </div> */}
           <div>
    <span className="text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-t from-gray-400 to-white">
      adTask.ai
    </span>
  </div>


          <div className="flex justify-center items-center gap-12">
            <nav className="flex font-[14px] items-center gap-8">
              <button 
                onClick={handleResourcesClick} 
                className="text-white text-[14px] transition-colors hover:text-gray-300"
              >
                Resources
              </button>
              <a href="#" className="text-white text-[14px] transition-colors">
                Pricing
              </a>
              <a href="#" className="text-white text-[14px] transition-colors">
                Contact Us
              </a>
            </nav>
            <button 
              onClick={handleTryNowClick}
              className="relative bg-gray-800 border-2 border-gray-400 text-white py-2 px-4 rounded-3xl overflow-hidden"
            >
              <span className="absolute bottom-0 left-1/2 w-0 h-0 transform -translate-x-1/2 rounded-full shadow-[0_0_20px_20px_rgba(192,192,192,0.25)]"></span>
              <span className="relative z-10">Try Now for Free</span>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center mt-24 w-full max-w-4xl mx-auto mb-8 px-4">
        <span className="inline-block px-4 py-1 text-[#9BA1A6] text-sm font-medium tracking-wide mb-6">
          AI DEVELOPMENT PARTNER
        </span>

        {/* Stronger Rectangular Light Effect */}
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#3B82F6]/20 blur-[100px] rounded-lg"></div>

        {/* <h1 className="text-[100px] font-bold leading-none mb-8 relative">
          <span className="relative">
            <span className="opacity-20">adTask.ai</span>
            <span className="absolute inset-0 flex items-center justify-center text-[#3B82F6] opacity-30 blur-2xl">
              adTask.ai
            </span>
          </span>
        </h1> */}


<h1 className="text-[100px] font-bold leading-none mb-8 relative group transition-all duration-300">
  <span className="relative">
    {/* Main Text with Gradient */}
    <span className="bg-clip-text text-transparent bg-gradient-to-t from-gray-500 to-white">
      adTask.ai
    </span>
    {/* Outward Glow Effect */}
    <span className="absolute inset-0 flex items-center justify-center text-gray-300 opacity-20 blur-2xl transition-all duration-500 group-hover:opacity-80 group-hover:blur-[20px]">
      adTask.ai
    </span>
  </span>





  



  {/* Equilateral Triangle Background with Triangular Glow */}
  <span className="absolute inset-0 w-full h-full bg-[transparent] z-[-1]">
    <span
      className="absolute left-[30%] bottom-[-110%] transform -translate-x-1/2 scale-7
                before:absolute before:content-[''] before:left-1/2 before:bottom-0 
                before:border-l-[180px] before:border-r-[180px] before:border-b-[300px] 
                before:border-l-transparent before:border-r-transparent before:border-b-[rgba(192,192,192,0.9)] 
                before:[filter:blur(80px)] before:opacity-50"
    ></span>
  </span>
</h1>




        <p className="text-[#9BA1A6] text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          AdTask AI is your intelligent companion that transforms how developers
          code, test, and deploy. Say goodbye to repetitive tasks and hello to
          accelerated productivity.
        </p>

        <button 
          onClick={handleTryNowClick}
          className="relative bg-[#7687B5] border-2 border-[#7687B5] text-white py-2 px-4 rounded-3xl overflow-hidden"
        >
          <span className="absolute inset-0 z-0">
            <img
              src="/sparkle2.gif"
              alt="Sparkle GIF"
              className="absolute inset-0 object-cover w-full h-full z-0"
            />
          </span>
          <span className="relative z-10 p-2">Try Now for Free</span>
        </button>

        {/* Video Section with Animated Glowing Border */}
        <div className="relative mt-16 w-full aspect-video rounded-[20px] overflow-hidden border-2 border-transparent video-glow">
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="hero_photo.png"
              alt="AdTask.ai Demo"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>

      {/* Light Effect */}

      <style jsx global>{`
        @keyframes video-glow {
          0% {
            border-color: rgba(90, 110, 166, 0.5);
            box-shadow: 0 0 5px rgba(90, 110, 166, 0.5);
          }
          50% {
            border-color: rgba(90, 110, 166, 0.8);
            box-shadow: 0 0 15px rgba(90, 110, 166, 0.8);
          }
          100% {
            border-color: rgba(90, 110, 166, 0.5);
            box-shadow: 0 0 5px rgba(90, 110, 166, 0.5);
          }
        }
        .video-glow {
          border-image-source: conic-gradient(
            from 180deg at 50% 50%,
            #333b4f 0deg,
            #566999 360deg
          );
          animation: video-glow 2s infinite ease-in-out;
        }
        .video-bg {
          background: linear-gradient(0deg, #ffffff, #ffffff),
            linear-gradient(180deg, #e2e8f8 0%, #858992 100%);
          width: 468px;
          height: 95.96px;
          position: absolute;
          top: 282px;
          left: 50%;
          transform: translateX(-50%);
          opacity: 0.8;
        }
      `}</style>
    </section>

    {/* Use the single LoginOverlay component */}
    <LoginOverlay 
      isOpen={isLoginOpen} 
      onClose={() => setIsLoginOpen(false)} 
    />
    
    <ChatBot 
      isOpen={isChatBotOpen}
      onClose={() => setIsChatBotOpen(false)}
    />
    </>
  );
}
