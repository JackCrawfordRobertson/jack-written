"use client";

import StoryTemplate from "./StoryTemplate";

const COPStory = ({ onClose }) => {
  return (
    <StoryTemplate
      onClose={onClose}
      title="COP presidents and going 'Back to caves"
      paragraphs={[
        "With a 47-page consensus, the participation of 100,000 attendees, and the mobilisation of $85 billion in funding, expectations were high for the outcomes of the UAE COP28.",

        "The core challenge that lies in aligning with previous Communities of Parties remains the same: capping global warming at 1.5°C, leveraging cutting-edge science, and steering funds towards resilient financial strategies for the climate. However, when we juxtapose these aims with what the UAE Consensus delivered, a noticeable gap is evident, mainly relating to divergent language.",

        "The COP28 event saw extensive mainstream media coverage across the board. But towards the end of the event, a focus on the discussion around “phasing out” or “transitioning away” from fossil fuels dominated news cycles. Yet, beyond its media significance, it's crucial to assess if the language that is widely used in the UAE Commitments signifies tangible advancement or mere stagnation. Jon McGowan, an ESG lawyer from The McGowan Law Firm, highlights the predominantly non-committal nature of the consensus. Phrases like “acknowledges”, “notes”, “expresses concern”, and “urges” lack decisiveness. In contrast, he advocates for more assertive terms such as “commitment” and “declares” in modern climate commitments, underscoring a need for definitive action over ambiguous expressions.",

        "So, how have the linguistic commitments of these documents developed throughout previous COPs? To question this, I have created an interactive word cloud that allows you to identify the patterns and frequency used in each agreement visually. <a href='https://copwordcloud.jack-robertson.co.uk/'>You can check it out here.</a> CO2 What did you expect to be the most common language used? Where the word 'fossil fuels' is my big question...",
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