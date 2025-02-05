"use client";

import React from "react";
import {motion, AnimatePresence} from "framer-motion";
import Image from "next/image";
import {Button} from "@/components/ui/button";

const StoryTemplate = ({onClose, title, paragraphs, images}) => {
    return (
        <AnimatePresence>
            <motion.div
                initial={{y: "100%", opacity: 0}}
                animate={{y: "0%", opacity: 1}}
                exit={{y: "100%", opacity: 0}}
                transition={{duration: 0.5, ease: "easeInOut"}}
                className="fixed inset-0 bg-card text-card-foreground z-50 flex flex-col"
            >
                {/* Header (Sticky) */}
                <div className="sticky top-0 z-10 bg-primary text-primary-foreground p-4 sm:p-6 md:p-8 flex justify-between items-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">{title}</h2>
                    <Button
                        onClick={onClose}
                        variant="destructive"
                        className="rounded-full w-10 h-10 p-0 flex items-center justify-center"
                    >
                        ✕
                    </Button>
                </div>

                {/* Scrollable Content */}
                <div className="flex-grow overflow-auto bg-background text-foreground">
                    {/* This container is full width on small screens, half width on md+, and centred */}
                    <div className="w-full md:w-1/2 mx-auto p-4 sm:p-6 box-border">
                        {paragraphs.map((text, index) => (
                            <div key={index} className="mb-6">
                                {images[index] && (
                                    <Image
                                        src={images[index]}
                                        alt={`Story Image ${index + 1}`}
                                        width={400}
                                        height={300}
                                        className="rounded-lg shadow-md w-full"
                                    />
                                )}
                                <p className="mt-4" dangerouslySetInnerHTML={{__html: text}} />
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default StoryTemplate;
