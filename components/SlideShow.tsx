import { useState } from "react";

import slides from "@/data/slides";
import Slide from "./Slide";
import SlideButton from "./SlideButton";
import SlideDot from "./SlideDot";

export default function SlideShow() {
  const maxSlideIndex = slides.length - 1;
  const [slideIndex, setSlideIndex] = useState(0);

  const prevSlide = () => {
    if (slideIndex > 0) setSlideIndex((s) => s - 1);
    else setSlideIndex(maxSlideIndex);
  };
  const nextSlide = () => {
    if (slideIndex < maxSlideIndex) setSlideIndex((s) => s + 1);
    else setSlideIndex(0);
  };
  const setSlide = (index: number) => {
    if (index < slides.length) {
      setSlideIndex(index);
    }
  };

  return (
    <section className="slide-show">
      {slides.map((item, index) => (
        <Slide
          key={item.id}
          active={slideIndex === index}
          src={`/images/${item.image}`}
          alt={item.description}
          width={item.width}
          height={item.height}
          blurDataUrl={item.blurDataUrl}
        />
      ))}
      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center justify-center gap-2">
        {slides.map((item, index) => (
          <SlideDot
            key={item.id}
            active={slideIndex === index}
            onClick={() => setSlide(index)}
          />
        ))}
      </div>
      <SlideButton align="left" onClick={prevSlide} />
      <SlideButton align="right" onClick={nextSlide} />
    </section>
  );
}
