"use client";

import React from "react";
import {Button} from "@/components/ui/button";
import {FaGithub, FaLinkedin, FaShareAlt} from "react-icons/fa";
import {useToast} from "@/hooks/use-toast"; // Adjust the import path as needed

function Footer() {
    const {toast} = useToast();
    const email = "jack@ya-ya.co.uk";

    // Function to copy email and show notification using the shadcn toast
    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email);
        toast({
            title: "Email copied to clipboard!",
            description: email,
        });
    };

    // Function to share the story using the Web Share API if available
    const shareStory = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: "Check out this story",
                    url: window.location.href,
                });
            } catch (error) {
                toast({
                    title: "Sharing cancelled",
                    description: "Share was cancelled.",
                });
            }
        } else {
            toast({
                title: "Share not supported",
                description: "Sharing is not supported on this device.",
            });
        }
    };

    return (
        <footer className="max-w-4xl mx-auto p-5 bg-primary text-white text-center rounded-2xl my-4">
            <div className="flex flex-col items-center p-8 rounded-md">
                {/* Carbon Information */}
                <div className="flex flex-col sm:flex-row justify-between items-center w-full mb-2 gap-2">
                    <a
                        href="https://www.websitecarbon.com/website/jack-robertson-co-uk/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-white hover:text-white"
                    >
                        0.10g of CO2/view
                    </a>
                    <a
                        href="https://www.websitecarbon.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-white hover:text-white"
                    >
                        Website Carbon
                    </a>
                </div>
                <div className="mb-4">
                    <p className="font-bold">Cleaner than 91% of pages tested</p>
                </div>

                {/* Icons and Contact/Share Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                    <div className="flex items-center gap-5">
                        <a
                            href="https://github.com/JackCrawfordRobertson"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <FaGithub className="w-8 h-8 text-white" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/jackcrobertson"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin className="w-8 h-8 text-white" />
                        </a>
                        <button onClick={shareStory} aria-label="Share" className="flex items-center justify-center">
                            <FaShareAlt className="w-5 h-5 text-white" />
                        </button>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button
                            onClick={handleCopyEmail}
                            className="w-40 bg-white text-[hsl(var(--primary))] py-2 px-4 rounded-md border border-[hsl(var(--primary))] hover:bg-gray-50"
                        >
                            Contact
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
