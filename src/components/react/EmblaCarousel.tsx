import type { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';

import { RoomAmenities } from './RoomAmenities';
import './roomsSlider.css';
import { NextButton, PrevButton, usePrevNextButtons } from './usePrevNextButtons';

interface RoomSliderProps {
  image: string;
  title: string;
  description: string;
  price: number;
  aminities: string[];
}

const OPTIONS: EmblaOptionsType = {};

const ROOMS_SLIDER: RoomSliderProps[] = [
  {
    image: './images/slider/room-big1.webp',
    title: 'Minimal Duplex Room',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
    price: 345,
    aminities: ['bed', 'wifi', 'car', 'snow', 'dumbbells', 'cigar', 'cup']
  },
  {
    image: './images/slider/room-big2.webp',
    title: 'Minimal Duplex Room',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
    price: 345,
    aminities: ['bed', 'wifi', 'car', 'snow', 'dumbbells', 'cigar', 'cup']
  },
  {
    image: './images/slider/room-big3.webp',
    title: 'Minimal Duplex Room',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
    price: 345,
    aminities: ['bed', 'wifi', 'car', 'snow', 'dumbbells', 'cigar', 'cup']
  }
];

export const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {ROOMS_SLIDER.map(room => (
            <article className="embla__slide slider" key={room.image}>
              <img className="slider__item-img" src={room.image} alt={room.title} />
              <div className="slider__item-content">
                <RoomAmenities />

                <div className="slider__item-description">
                  <div>
                    <h3 className="slider__item-title">{room.title}</h3>
                    <p className="slider__item-text">{room.description}</p>
                  </div>
                  <span className="slider__item-price">${room.price}/Night</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};
