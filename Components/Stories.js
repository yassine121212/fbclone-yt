import React from "react";
import StoryCard from "./StoryCard";
const stories = [
  {
    name: "Abhishekh Maharjan",
    src: "https://links.papareact.com/zof",
    profile: "https://links.papareact.com/zvy",
  },
  {
    name: "Abhishekh Maharjan",
    src: "https://links.papareact.com/zof",
    profile: "https://links.papareact.com/zvy",
  },
  {
    name: "Abhishekh Maharjan",
    src: "https://links.papareact.com/zof",
    profile: "https://links.papareact.com/zvy",
  },
  {
    name: "Abhishekh Maharjan",
    src: "https://links.papareact.com/zof",
    profile: "https://links.papareact.com/zvy",
  },
  {
    name: "Abhishekh Maharjan",
    src: "https://links.papareact.com/zof",
    profile: "https://links.papareact.com/zvy",
  },
];

function Stories() {
  return (
    <div className='flex justify-center space-x-3 mx-auto'>
      {" "}
      {stories.map((story) => (
        // eslint-disable-next-line react/jsx-key
        <StoryCard
          key={story.src}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
}

export default Stories;
