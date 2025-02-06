"use client";

import StoryTemplate from "./StoryTemplate";
import ChartOne from "./SocialWar/ChartOne"; // or wherever you store it

const MyStory = ({ onClose }) => {
  const content = [
    {
      type: "text",
      value: `<p>This is an opening paragraph for my story.</p>`,
    },
    {
      type: "image",
      src: "https://res.cloudinary.com/dfsznxwhz/image/upload/v1738786414/image1440x560cropped_jhny9i.jpg",
      alt: "Some descriptive alt text",
    },
    {
      type: "text",
      value: `<p>This is an opening paragraph for my story.</p>`,
    },
    {
      type: "chart",
      component: <ChartOne />,
    },
    {
      type: "text",
      value: `<p>And here is another paragraph after the chart.</p>`,
    },
  ];

  return (
    <StoryTemplate
      onClose={onClose}
      date="12 January 2025"
      title="A Fantastic Interactive Story"
      content={content}
    />
  );
};

export default MyStory;