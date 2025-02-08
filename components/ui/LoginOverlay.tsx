import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface LoginOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginOverlay = ({ isOpen, onClose }: LoginOverlayProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 40, 
      opacity: 0,
      scale: 0.9
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.02,
      transition: {
        duration: 0.2,
        type: "spring",
        stiffness: 400
      }
    },
    tap: { 
      scale: 0.98 
    }
  };

  const overlayVariants = {
    hidden: { 
      opacity: 0,
      backdropFilter: "blur(0px)"
    },
    visible: { 
      opacity: 1,
      backdropFilter: "blur(4px)",
      transition: {
        duration: 0.3
      }
    },
    exit: {
      opacity: 0,
      backdropFilter: "blur(0px)",
      transition: {
        duration: 0.2
      }
    }
  };

  const modalVariants = {
    hidden: { 
      scale: 0.95, 
      opacity: 0,
      y: 20
    },
    visible: { 
      scale: 1, 
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    exit: { 
      scale: 0.95, 
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.2
      }
    }
  };

  const inputVariants = {
    focus: { 
      scale: 1.01,
      borderColor: "rgba(255, 255, 255, 0.1)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto backdrop-blur-sm"
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-[#1A1D24] rounded-[20px] overflow-hidden w-full max-w-[1000px] my-4 md:my-8"
          >
            <div className="flex flex-col lg:flex-row relative">
              {/* Left Section */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="w-full lg:w-1/2 p-6 md:p-8 lg:p-12"
              >
                <motion.h2 
                  variants={itemVariants}
                  className="text-2xl md:text-[28px] font-medium text-white mb-2"
                >
                  Welcome back!
                </motion.h2>
                <motion.p variants={itemVariants} className="text-[#9BA1A6] text-[14px] mb-6 md:mb-8">
                  Log in to access your AI marketing assistant
                </motion.p>

                {/* Google Login Button */}
                <motion.button 
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="w-full bg-black text-white rounded-lg py-3 px-4 flex items-center justify-center gap-2 mb-6 border border-[#ffffff1a]"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.64 9.20455C17.64 8.56636 17.5827 7.95273 17.4764 7.36364H9V10.845H13.8436C13.635 11.97 13.0009 12.9232 12.0477 13.5614V15.8195H14.9564C16.6582 14.2527 17.64 11.9455 17.64 9.20455Z" fill="#4285F4"/>
                    <path d="M9 18C11.43 18 13.4673 17.1941 14.9564 15.8195L12.0477 13.5614C11.2418 14.1014 10.2109 14.4205 9 14.4205C6.65591 14.4205 4.67182 12.8373 3.96409 10.71H0.957275V13.0418C2.43818 15.9832 5.48182 18 9 18Z" fill="#34A853"/>
                    <path d="M3.96409 10.71C3.78409 10.17 3.68182 9.59318 3.68182 9C3.68182 8.40682 3.78409 7.83 3.96409 7.29V4.95818H0.957273C0.347727 6.17318 0 7.54773 0 9C0 10.4523 0.347727 11.8268 0.957273 13.0418L3.96409 10.71Z" fill="#FBBC05"/>
                    <path d="M9 3.57955C10.3214 3.57955 11.5077 4.03364 12.4405 4.92545L15.0218 2.34409C13.4632 0.891818 11.4259 0 9 0C5.48182 0 2.43818 2.01682 0.957275 4.95818L3.96409 7.29C4.67182 5.16273 6.65591 3.57955 9 3.57955Z" fill="#EA4335"/>
                  </svg>
                  <span className="text-[14px]">Login with Google</span>
                </motion.button>

                {/* OR Divider */}
                <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
                  <div className="flex-1 h-px bg-[#ffffff1a]"></div>
                  <span className="text-[#9BA1A6] text-[14px]">OR</span>
                  <div className="flex-1 h-px bg-[#ffffff1a]"></div>
                </motion.div>

                {/* Login Form */}
                <motion.div variants={itemVariants} className="space-y-4">
                  <motion.div
                    whileFocus="focus"
                    variants={inputVariants}
                    className="relative"
                  >
                    <input 
                      type="email" 
                      placeholder="Your Email"
                      className="w-full bg-[#111827] text-white rounded-lg py-3 px-4 text-[14px] placeholder-[#9BA1A6] border border-transparent outline-none transition-all duration-200"
                    />
                  </motion.div>
                  <motion.div
                    whileFocus="focus"
                    variants={inputVariants}
                    className="relative"
                  >
                    <input 
                      type="password" 
                      placeholder="Your Password"
                      className="w-full bg-[#111827] text-white rounded-lg py-3 px-4 text-[14px] placeholder-[#9BA1A6] border border-transparent outline-none"
                    />
                  </motion.div>
                  <motion.button 
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="w-full bg-[#2563EB] text-white rounded-lg py-3 text-[14px] font-medium"
                  >
                    Log In
                  </motion.button>
                </motion.div>

                {/* Links */}
                <motion.div variants={itemVariants} className="mt-6 text-center">
                  <a href="#" className="text-[#9BA1A6] text-[14px] hover:text-white transition-colors">Forgot Password?</a>
                  <div className="mt-2 text-[14px]">
                    <span className="text-[#9BA1A6]">Don't have an account? </span>
                    <a href="#" className="text-[#2563EB] hover:underline">Sign up for free</a>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Section - Hidden on mobile/tablet */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="hidden lg:block w-full lg:w-1/2 bg-[#1E2A47] p-8 lg:p-12"
              >
                {/* Logo */}
                <motion.div variants={itemVariants} className="flex justify-end">
                  <span className="text-white text-xl">adTask.ai</span>
                </motion.div>

                {/* Feature Card with hover animation */}
                <motion.div 
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { 
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }
                  }}
                  className="flex-grow flex items-center justify-center"
                >
                  <div className="bg-[#111827] rounded-[20px] p-6 w-full max-w-[380px]">
                    <div className="relative w-full aspect-square mb-6">
                      <Image 
                        src="/loginn.jpg" 
                        alt="Smart Automation" 
                        fill
                        className="object-contain"
                        priority
                      />
                      <div className="absolute top-4 right-4">
                        <span className="text-[10px] text-[#9BA1A6] bg-[#1A1D24] px-2 py-0.5 rounded">GEN AI Powered</span>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-[14px] text-white mb-1">Smart Automation</p>
                      <h3 className="text-[24px] font-medium text-white leading-tight">
                        Save 20+ Hours Every Week<br />with Automation
                      </h3>
                    </div>
                  </div>
                </motion.div>

                {/* Bottom Text and Dots */}
                <motion.div variants={itemVariants} className="text-center mt-auto">
                  <p className="text-[14px] text-[#9BA1A6] mb-6">
                    Our AI handles your marketing tasks while you<br />focus on growing your business.
                  </p>
                  <div className="flex justify-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#9BA1A6]"></div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Close Button with enhanced animation */}
            <motion.button 
              onClick={onClose} 
              className="absolute top-4 right-4 p-2 text-[#9BA1A6] hover:text-white transition-colors"
              whileHover={{ 
                rotate: 180,
                scale: 1.1,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.9 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoginOverlay; 