"use client";

import StoryTemplate from "./StoryTemplate";

const COPStory = ({ onClose }) => {
  return (
    <StoryTemplate
      onClose={onClose}
      title="COP Presidents and Climate Policies"
      paragraphs={[
        "This year, the COP28 community has the remarkable pleasure of President Sultan Al Jaber heading up the conference of parties in the UAE, or as Dr Hamza Hamouchene more aptly puts it, conference of polluters. Born in 1973, the UK/US-educated president brings COP to the Middle East for the second time as governments look to create policy for the next 30 years to mitigate climate change.",

        "So how did it go? Well, two days into the conference, in an interview addressing his leadership as the head of The Abu Dhabi National Oil Company (ADNOC). The president claimed in what is now a famous interview that there was “no science” that supports a correlation between the fazing out of fossil fuels and limiting climate change to 1.5 degrees. Whether it's to do with the Dh2.75 billion ADNOC makes in yearly profits, the new investments the UAE has put into the industry, or the potential new oil deals the president was planning to negotiate at the event -as outlined in a leaked internal document preceding the event- The fact is, whether we use the language of phase out or phase down the COP president is looking for the global north to “lead by example”.",

        "How’s that going? One such “example” commitment, which potentially shows the global north's misdirection of leadership, is the Loss and Damage commitment at COP27. Outlined was a $100 billion fund built to fill the gaps already forming in climate change funding. Prominent voices such as Joe Thwaites, a senior representative for International Climate Finance, commented on the “historic achievement” of the Loss and Damage fund. <br></br> However, falling $17 billion short of the fund target exposes the position of wealthy and high-emitting countries towards funds of this sort.To lead back to the COP mission, which is to “increase ambition and strengthen efforts to achieve shared climate goals”, how do you see the scale of Climate Change? The argument that is commonly made is that we are just experiencing standard environmental warming after an ice age. But from 1850 to 2015, we have emitted around 1,510 gigatons of carbon dioxide, but what does that number mean and what is its impact? Check out this fun visual tool that unlocks the scale healed within a gigaton. <a href='https://extraordinaryfacility.com/co2/'>Extraordinary Facility: Seeing CO2</a>",
      ]}
      images={[
        "https://res.cloudinary.com/dfsznxwhz/image/upload/v1738690815/COP28_UAE_abpnvu.jpg",
        "https://res.cloudinary.com/dfsznxwhz/image/upload/v1738690822/Cop_President_gs65gl.png",
        "https://res.cloudinary.com/dfsznxwhz/image/upload/v1738690830/Seeing_CO_rlugxk.gif",
      ]}
    />
  );
};

export default COPStory;