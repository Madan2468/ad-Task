"use client";

import { motion } from "framer-motion";
import { Zap, Code, PieChart, Settings } from "lucide-react";
import Image from "next/image";

const features = [
  {
    //title: "Lightning Fast Deployment",
    //description: "Deploy your projects instantly with optimized performance.",
    image: "image.png",
    style: {
      width: "373px",
      height: "617px",
      top: "703px",
      left: "16px",
      gap: "0px",
      opacity: "0",
    },
  },
  {
    // title: "Real-time Collaboration",
    image: "real.png",
    style: {
      width: "373px",
      height: "617px",
      top: "703px",
      left: "16px",
      gap: "0px",
      opacity: "0",
    },
    // description:
      // "Seamlessly work with team members while AI manages conflicts and merges changes intelligently.",
  },
  {
    video : "gear.mp4"
  },
  {
    video : "graphss.mp4"
  },
];

export default function FeatureCards() {
  return (
    <section className="relative py-20 px-6 bg-[#0A0A0A] text-white overflow-hidden">
      {/* Glowing Light Effect */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[800px] h-[800px] bg-blue-600/20 opacity-30 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm uppercase tracking-wider text-gray-400 mb-4"
          >
            Features
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Feature packed for the{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              most productive teams.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Experience lightning-fast setup with intelligent features designed
            to optimize your workflow instantly.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Large Feature Cards */}
          {features.slice(0, 2).map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative bg-gray-900/40 backdrop-blur-xl rounded-2xl p-0 border border-gray-800/50 overflow-hidden "
              style={{
                boxShadow: "0 0 14px rgba(35, 70, 168, 0.6)",
                borderColor : "transparent",
                borderRight : "2px solid rgb(118, 135, 181)"
              }}
            >
              {/* Background Image */}
              {feature.image && (
                <Image
                  src={feature.image}
                  alt={feature.title}
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0 w-full h-full opacity-100"
                />
              )}

              {console.log("feature.image : ",feature.image)}

              {/* Content Overlay */}
              <div className="absolute z-10 flex flex-col items-center text-center mt-[350px] pt-[50px]">
                {feature.icon && (
                  <div className="w-16 h-16 mb-4 flex items-center justify-center">
                    {feature.icon}
                  </div>
                )}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Smaller Feature Cards Stack */}
          <div className="space-y-10">
            {features.slice(2).map((feature, index) => (
              <motion.div
              key={index + 2}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index + 2) * 0.2 }}
              className="h-[250px] relative bg-gray-900/40 backdrop-blur-xl rounded-2xl p-6 border border-gray-800/50 overflow-hidden"
              style={{
                boxShadow: "0 0 14px rgba(35, 70, 168, 0.6)",
                borderColor : "transparent",
                borderRight : "2px solid rgb(118, 135, 181)"
              }}
            >
              {/* Background Video */}
              <video
                src={`/${feature.video}`}
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover h-200"
              />
            
            </motion.div>
            
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes glow {
          0% {
            box-shadow: 0 0 5px rgba(90, 110, 166, 0.5);
          }
          50% {
            box-shadow: 0 0 15px rgba(90, 110, 166, 0.8);
          }
          100% {
            box-shadow: 0 0 5px rgba(90, 110, 166, 0.5);
          }
        }
      `}</style>
    </section>
  );
}
