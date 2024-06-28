import React from "react";
import '../App.css'
import { TECarousel, TECarouselItem } from "tw-elements-react";

export function SlideBar(){
  return (
    <div className="slideBar ">
 
      <TECarousel showControls showIndicators ride="carousel">
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <TECarouselItem
            itemID={1}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="/cr1.jpg"
              className="block w-full"
              alt="..."
            />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white font-serif font-semibold md:block shadow-glow">
              <h5 className="text-xl">Experience the freshness every page turn</h5>
              <p>
              Indulge in the creamy richness of our freshly churned dairy delight, promising a taste of pure
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="/cr2.jpg"
              className="block w-full"
              alt="..."
            />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white font-serif font-semibold md:block shadow-glow">
              <h5 className="text-xl">Nature's bounty, delivered fresh to you</h5>
              <p>
              Experience farm-fresh goodness with our vibrant selection of handpicked vegetables, bursting with flavor and nutrients
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={3}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="/cr3.jpg"
              className="block w-full"
              alt="..."
            />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white font-serif font-semibold md:block shadow-glow">
              <h5 className="text-xl">Spice it up, the flavorful way</h5>
              <p>
              Spice up your life with our aromatic blends, crafted to add a burst of flavor and warmth to every dish
              </p>
            </div>
          </TECarouselItem>
        </div>
      </TECarousel>
     
    </div>
  );
}