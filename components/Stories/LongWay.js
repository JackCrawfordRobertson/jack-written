"use client";

import StoryTemplate from "./StoryTemplate";

const COPStory = ({ onClose }) => {
  return (
    <StoryTemplate
      onClose={onClose}
      title="The Long Way Round"
      paragraphs={[
        "Do you know where this is? Here is a clue: $3.84 trillion, or 12% of world trade, travels through this area yearly.<br></br> Did you guess the Suez Canal? ⛴️ It's astonishing to think that every day in 2020, 1.74 million barrels of crude oil passed through the canal each day. 1.74 million! With the price of one barrel out of that 1.74 million being $61.63, you can imagine the bottom line is substantial. Hence, these ships are effectively floating stacks of money.",

        "This week, the Iranian-backed Yemeni Houthi militant group hijacked a series of Israeli ships in protest of Israeli attacks on Palestine. Vowing not to stop the disruption of ships travelling through the region towards the Suez Canal until Israeli attacks on Palestine are stopped.",

        "One solution Israeli shipping companies have implemented to avoid these attacks is to redirect their ships 'the long way round' – the Cape of Good Hope in South Africa. So, what does that actually mean for the cargo onboard these ships? Freight shipping is one of the top polluters for our species.",

        "But how much further is the long way round? Check out this tool, which investigates these fundamental environmental, economic, and time-based strains on these supply chains.<a href='https://shipping.jack-robertson.co.uk/'>You can check it out here.</a> ",
      ]}
      images={[
        "https://res.cloudinary.com/dfsznxwhz/image/upload/v1738786422/1440x810_cmsv2_22c56d65-48a2-58b6-bd28-99660c330510-7998888_gpxnsa.jpg",
        "https://res.cloudinary.com/dfsznxwhz/image/upload/v1738786407/skynews-cop28-dubai_6378916_c4ccxf.jpg",
        "https://res.cloudinary.com/dfsznxwhz/image/upload/v1738786414/image1440x560cropped_jhny9i.jpg",
      ]}
    />
  );
};

export default COPStory;