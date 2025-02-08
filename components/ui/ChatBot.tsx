"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

interface ChatBotProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatBot({ isOpen, onClose }: ChatBotProps) {
  const [message, setMessage] = useState('');
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#050506]">
      {/* Header */}
      <motion.div 
        className="flex items-center h-[72px] bg-black"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 100,
          damping: 20,
          duration: 0.6 
        }}
      >
        <div className="pl-8">
          <motion.span 
            className="text-2xl font-medium text-white"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.2 
            }}
          >
            adTask.ai
          </motion.span>
        </div>
        <nav className="flex items-center justify-center flex-1">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.3 
            }}
          >
            <span className="text-white">Chat Bot</span>
            <motion.div 
              className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#6C8EEF]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ 
                duration: 0.6,
                ease: [0.645, 0.045, 0.355, 1],
                delay: 0.4 
              }}
            ></motion.div>
          </motion.div>
          {['Campaign Automation', 'Email Outreach', 'Social Media Marketing'].map((item, index) => (
            <motion.span 
              key={item}
              className="text-gray-500 ml-16 cursor-pointer"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.4 + (index * 0.1) 
              }}
              whileHover={{ 
                color: '#6C8EEF', 
                scale: 1.05,
                transition: { duration: 0.2, ease: "easeInOut" }
              }}
            >
              {item}
            </motion.span>
          ))}
        </nav>
      </motion.div>

      {/* Main Content Area */}
      <motion.div 
        className="flex flex-col items-center max-w-[800px] mx-auto h-[calc(100vh-72px)] pt-24 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Close Button - moved outside of main content */}
        <motion.button 
          onClick={onClose}
          className="fixed top-8 right-8 text-gray-400 hover:text-gray-300"
          whileHover={{ 
            scale: 1.1, 
            rotate: 90,
            transition: { 
              type: "spring",
              stiffness: 200,
              damping: 15
            }
          }}
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M18 6L6 18M6 6l12 12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.button>

        {/* Greeting */}
        <motion.h1 
          className="text-[56px] font-light text-center mb-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 80,
            damping: 20,
            delay: 0.2 
          }}
        >
          <motion.span 
            className="text-[#6C8EEF]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >Good Evening,</motion.span>
          <motion.span 
            className="text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          > Bhavya</motion.span>
        </motion.h1>
        <motion.p 
          className="text-gray-400 text-sm mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          Describe your business and let AI create a personalized business plan for you
        </motion.p>

        {/* Start with Section */}
        <motion.div 
          className="w-full px-8 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-gray-400 text-sm">Start with</span>
            <span className="text-gray-400">L</span>
          </div>

          {/* Quick Start Options */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            {[
              "I need help with my social media marketing",
              "I want to create a budget plan for",
              "I would like to speak to business experts",
              "I want to start a business in"
            ].map((text, index) => (
              <motion.button 
                key={text}
                className="bg-[#1A1B1E]/20 border border-[#1A1B1E] text-gray-400 p-4 rounded-xl text-left text-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 80,
                  damping: 20,
                  delay: 0.8 + (index * 0.1) 
                }}
                whileHover={{ 
                  scale: 1.02,
                  borderColor: '#6C8EEF',
                  backgroundColor: 'rgba(26, 27, 30, 0.4)',
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }
                }}
              >
                {text}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Chat Input */}
        <motion.div 
          className="w-full px-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 80,
            damping: 20,
            delay: 1.2 
          }}
        >
          <div className="relative">
            <motion.div 
              className="bg-[#1A1B1E] rounded-xl p-4"
              whileHover={{ 
                boxShadow: '0 0 0 1px #6C8EEF',
                transition: { duration: 0.2, ease: "easeInOut" }
              }}
            >
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Eg. I run a textile business in Nagpur and I need to create a budget plan"
                className="w-full bg-transparent text-gray-300 px-3 py-3 text-sm placeholder:text-gray-500 focus:outline-none"
              />
              <div className="flex items-center justify-between mt-3 px-3">
                <motion.button 
                  className="text-gray-500 text-xs flex items-center gap-1"
                  whileHover={{ 
                    scale: 1.05, 
                    color: '#6C8EEF',
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }
                  }}
                >
                  <span>+</span>
                  <span>Difficulty Level</span>
                </motion.button>
                <div className="flex items-center gap-4">
                  <motion.button 
                    className="text-gray-500"
                    whileHover={{ 
                      scale: 1.1, 
                      color: '#6C8EEF',
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                      }
                    }}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.button>
                  <motion.button 
                    className="bg-[#6C8EEF] p-2.5 rounded-xl"
                    whileHover={{ 
                      scale: 1.05,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                      }
                    }}
                    whileTap={{ 
                      scale: 0.95,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                      }
                    }}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="white">
                      <path d="M5 12h14m-7-7l7 7-7 7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
