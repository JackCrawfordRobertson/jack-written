"use client";

import StoryTemplate from "../StoryTemplate";

const MyStory = ({ onClose }) => {
  const content = [
    {
      type: "text",
      value: `<p><b>In times of conflict, why do we cling to self-destructive behaviours? </b><br></br>War, is an inherently complex and devastating phenomenon. It casts a long, dark shadow over our moral landscape, challenging our principles and ethics, regardless of our direct involvement. This holds especially true in the enduring and contentious conflict between Israel and Gaza, a situation that exemplifies the complexities and devastating impacts of war.</p>`,
    },
    {
      type: "image",
      src: "https://res.cloudinary.com/dfsznxwhz/image/upload/v1738786934/4b50669c-e517-4e66-a63b-62074ae4da0c_cropped_adppws.jpg",
      alt: "Some descriptive alt text",
    },
    {
      type: "text",
      value: `<p>This week, I aim to explore a lesser-discussed but equally critical aspect of the Israel-Gaza war: its environmental repercussions. The focus of my inquiry is the carbon footprint of war, specifically examining the CO2 emissions from two key stages: the destruction of a home and its subsequent reconstruction. The process of tearing down and rebuilding structures is not only a physical and emotional ordeal but also an environmental one.</p>`,
    },
    {
      type: "image",
      src: "https://res.cloudinary.com/dfsznxwhz/image/upload/v1738787060/86a2c9298e3f5060a1e18504b8e0f3aad6c0332c_da9u9k.jpg",
      alt: "Some descriptive alt text",
    },
    {
      type: "text",
      value: `<p>By quantifying these emissions, we can gain insight into the broader ecological implications of conflict. How does the act of reconstruction compare to the act of destruction in terms of environmental impact? This question lies at the heart of our understanding of the true cost of war. <a href='https://munitions.jack-robertson.co.uk/'>By clicking here to view data.</a></p>`,
    },
  ];

  return (
    <StoryTemplate
      onClose={onClose}
      date="16 January 2024"
      title="The Emissions of a Genocide"
      content={content}
    />
  );
};

export default MyStory;