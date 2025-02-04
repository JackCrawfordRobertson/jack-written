"use client";

import StoryTemplate from "./StoryTemplate";

const COPStory = ({ onClose }) => {
  return (
    <StoryTemplate
      onClose={onClose}
      title="COP Presidents and Climate Policies"
      paragraphs={[
        "A look into the leadership of COP Presidents and their impact on climate policies.",
        "Two days into the conference, a controversial statement sparked debates...",
        "Commitments like the Loss and Damage fund remain under scrutiny...",
      ]}
      images={[
        "/images/cop-1.jpg",
        "/images/cop-2.jpg",
        "/images/cop-3.jpg",
      ]}
    />
  );
};

export default COPStory;