"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const StoryTemplate = ({ onClose, title, date, content = [] }) => {
  return (
  
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="fixed inset-0 bg-card text-card-foreground z-50 flex flex-col"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-primary text-primary-foreground px-4 sm:px-6 md:px-8 py-4 md:py-5 flex justify-between items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">{title}</h2>
            {date && (
              <div className="font-bold text-white text-lg mt-1">{date}</div>
            )}
          </div>
          <Button
            onClick={onClose}
            variant="destructive"
            className="rounded-full w-10 h-10 p-0 flex items-center justify-center">
            ✕
          </Button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-grow overflow-auto bg-background text-foreground">
          <div className="w-full md:w-1/2 mx-auto p-4 sm:p-6 box-border">
            {content.map((block, index) => {
              switch (block.type) {
                case "text":
                  return (
                    <div key={index} className="mb-6">
                      <p
                        className="text-lg"
                        dangerouslySetInnerHTML={{ __html: block.value }}
                      />
                    </div>
                  );
                case "image":
                  return (
                    <div key={index} className="mb-6">
                      <Image
                        src={block.src}
                        alt={block.alt || `Story Image ${index + 1}`}
                        width={400}
                        height={300}
                        className="rounded-lg shadow-md w-full"
                      />
                    </div>
                  );
                case "chart":
                  return (
                    <div key={index} className="mb-6">
                      {block.component}
                    </div>
                  );
                default:
                  return null;
              }
            })}

            {/* Append the Footer as the last element of the content */}
            <div className="mt-8">
              <Footer />
            </div>
          </div>
        </div>
      </motion.div>

  );
};

export default StoryTemplate;