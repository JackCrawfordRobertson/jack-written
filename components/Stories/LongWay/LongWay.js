"use client";

import StoryTemplate from "../StoryTemplate";

const LongWay = ({ onClose }) => {
  const content = [
    {
      type: "text",
      value: `<p><b>Do you know where this is? Here is a clue: $3.84 trillion, or 12% of world trade, travels through this area yearly.</b></p>`,
    },
    {
      type: "image",
      src: "https://res.cloudinary.com/dfsznxwhz/image/upload/v1738840720/1705398455021_cbjjyt.jpg",
      alt: "Some descriptive alt text",
    },
    {
      type: "text",
      value: `<p>Did you guess the Suez Canal? ⛴️ It's astonishing to think that every day in 2020, 1.74 million barrels of crude oil passed through the canal each day. 1.74 million! With the price of one barrel out of that 1.74 million being $61.63, you can imagine the bottom line is substantial. Hence, these ships are effectively floating stacks of money.</p>`,
    },
    
    {
      type: "text",
      value: `<p>This week, the Iranian-backed Yemeni Houthi militant group hijacked a series of Israeli ships in protest of Israeli attacks on Palestine. Vowing not to stop the disruption of ships travelling through the region towards the Suez Canal until Israeli attacks on Palestine are stopped.</p>`,
    },
    {
      type: "image",
      src: "https://res.cloudinary.com/dfsznxwhz/image/upload/v1738840950/Screenshot-2023-11-20-at-10.51.41-AM-640x400_ecc0st.jpg",
      alt: "Some descriptive alt text",
    },
    {
      type: "text",
      value: `<p>One solution Israeli shipping companies have implemented to avoid these attacks is to redirect their ships 'the long way round' – the Cape of Good Hope in South Africa. So, what does that actually mean for the cargo onboard these ships? Freight shipping is one of the top polluters for our species.</p>`,
    },
    {
      type: "image",
      src: "https://res.cloudinary.com/dfsznxwhz/image/upload/v1738840989/33YB9Q4-highres-e1699306567463-640x400_jjxisf.jpg",
      alt: "Some descriptive alt text",
    },
    {
      type: "text",
      value: `<p>But how much further is the long way round? Check out this tool, which investigates these fundamental environmental, economic, and time-based strains on these supply chains.<a href='https://shipping.jack-robertson.co.uk/'>You can check it out here.</a></p>`,
    },
  ];

  return (
    <StoryTemplate
      onClose={onClose}
      date="12 January 2024"
      title="The Long Way Round"
      content={content}
    />
  );
};

export default LongWay;