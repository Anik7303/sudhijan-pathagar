import { useState } from "react";

import Slide from "./Slide";
import SlideButton from "./SlideButton";
import SlideDot from "./SlideDot";

const slides = [
  {
    id: "8Qpzjlqr1zlnCzPolKiT",
    image: "8Qpzjlqr1zlnCzPolKiT.jpg",
    description: "",
    width: 1281,
    height: 1868,
  },
  {
    id: "oclBTgsO1TvihYzBlGCN",
    image: "oclBTgsO1TvihYzBlGCN.jpeg",
    description: "",
    width: 1224,
    height: 1224,
  },
  {
    id: "ScNuhvucQaNPTt9fC5Js",
    image: "ScNuhvucQaNPTt9fC5Js.jpg",
    description: "",
    width: 642,
    height: 960,
  },
  {
    id: "Sv1vzEGYJn9yH8tjMX6J",
    image: "Sv1vzEGYJn9yH8tjMX6J.jpeg",
    description: "",
    width: 963,
    height: 1280,
  },
  {
    id: "z8YRrgwfcVnt5NNHPtfR",
    image: "z8YRrgwfcVnt5NNHPtfR.jpeg",
    description: "",
    width: 963,
    height: 1280,
  },
];

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
