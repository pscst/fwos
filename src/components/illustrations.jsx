/* eslint-disable @next/next/no-img-element */
import { twMerge } from "tailwind-merge";
import { Marquee } from "./mariquee";


import art1 from '../assets/illustrations/art-1.jpg';
import art2 from '../assets/illustrations/art-2.jpg';
import art3 from '../assets/illustrations/art-3.jpg';
import art4 from '../assets/illustrations/art-4.jpg';
import art5 from '../assets/illustrations/art-5.jpg';
import art6 from '../assets/illustrations/art-6.jpg';

const reviews = [
  {
    img: art1,
  },
  {
    img: art2,
  },
  {
    img: art3,
  },
  {
    img: art4,
  },
  {
    img: art5,
  },
  {
    img: art6,
  },
];


const firstRow = [...reviews];
const secondRow = [reviews[1], reviews[3], reviews[0], reviews[5], reviews[2], reviews[4]]; 
// const thirdRow = [reviews[5], reviews[3], reviews[4]]; 
// const fourthRow = [reviews[2], reviews[1], reviews[3]];


const ReviewCard = ({
  img
}) => {
  return (
    
    <figure
      className={twMerge(
        "relative w-40 h-40 sm:w-36 overflow-hidden rounded-xl",
      )}
    >
      <div className="w-40 sm:w-40 h-40 flex-shrink-0 rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-800 ">
        <img alt="" src={img} />
      </div>
    
    </figure>
  );
};

export function Illustrations() {
  return (
    <div className="relative flex flex-col gap-6 w-full h-full items-center justify-center overflow-hidden">
      {/* First row */}
      <Marquee pauseOnHover className="[--duration:20s] w-full">
        {firstRow.map((review) => (
          <ReviewCard key={review.img} {...review} />
        ))}
      </Marquee>

      {/* Second row */}
      <Marquee reverse pauseOnHover className="[--duration:20s] w-full">
        {secondRow.map((review) => (
          <ReviewCard key={review.img} {...review} />
        ))}
      </Marquee>
    </div>
  );
}

