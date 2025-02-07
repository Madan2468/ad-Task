"use client";

import { useState } from 'react';

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
      <div className="flex items-center h-[72px] bg-black">
        {/* Logo */}
        <div className="pl-8">
          <span className="text-2xl font-medium text-white">
            adTask.ai
          </span>
        </div>

        {/* Center Navigation */}
        <nav className="flex items-center justify-center flex-1">
          <div className="relative">
            <span className="text-white">Chat Bot</span>
            <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#6C8EEF]"></div>
          </div>
          <span className="text-gray-500 ml-16">Campaign Automation</span>
          <span className="text-gray-500 ml-16">Email Outreach</span>
          <span className="text-gray-500 ml-16">Social Media Marketing</span>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col items-center max-w-[800px] mx-auto h-[calc(100vh-72px)] pt-24 relative">
        {/* Close Button - moved outside of main content */}
        <button 
          onClick={onClose}
          className="fixed top-8 right-8 text-gray-400 hover:text-gray-300 transition-colors"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M18 6L6 18M6 6l12 12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Greeting */}
        <h1 className="text-[56px] font-light text-center mb-2">
          <span className="text-[#6C8EEF]">Good Evening,</span>
          <span className="text-white"> Bhavya</span>
        </h1>
        <p className="text-gray-400 text-sm mb-16">
          Describe your business and let AI create a personalized business plan for you
        </p>

        {/* Start with Section */}
        <div className="w-full px-8 mb-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-gray-400 text-sm">Start with</span>
            <span className="text-gray-400">L</span>
          </div>

          {/* Quick Start Options */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            <button className="bg-[#1A1B1E]/20 border border-[#1A1B1E] text-gray-400 p-4 rounded-xl text-left text-sm">
              "I need help with my social media marketing"
            </button>
            <button className="bg-[#1A1B1E]/20 border border-[#1A1B1E] text-gray-400 p-4 rounded-xl text-left text-sm">
              "I want to create a budget plan for"
            </button>
            <button className="bg-[#1A1B1E]/20 border border-[#1A1B1E] text-gray-400 p-4 rounded-xl text-left text-sm">
              "I would like to speak to business experts"
            </button>
            <button className="bg-[#1A1B1E]/20 border border-[#1A1B1E] text-gray-400 p-4 rounded-xl text-left text-sm">
              "I want to start a business in"
            </button>
          </div>
        </div>

        {/* Chat Input */}
        <div className="w-full px-8">
          <div className="relative">
            <div className="bg-[#1A1B1E] rounded-xl p-4">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Eg. I run a textile business in Nagpur and I need to create a budget plan"
                className="w-full bg-transparent text-gray-300 px-3 py-3 text-sm placeholder:text-gray-500 focus:outline-none"
              />
              <div className="flex items-center justify-between mt-3 px-3">
                <button className="text-gray-500 text-xs flex items-center gap-1">
                  <span>+</span>
                  <span>Difficulty Level</span>
                </button>
                <div className="flex items-center gap-4">
                  <button className="text-gray-500">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button className="bg-[#6C8EEF] p-2.5 rounded-xl">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="white">
                      <path d="M5 12h14m-7-7l7 7-7 7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
