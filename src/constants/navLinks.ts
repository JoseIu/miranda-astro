import type { Feature } from '@/interfaces/featureCar.interface';
import { v4 as uuid } from 'uuid';

export const NAV_LINKS = [
  { href: '/about-us', text: 'About us' },
  { href: '/rooms', text: 'Rooms' },
  { href: '/offers', text: 'Offers' },
  { href: '/contact', text: 'Contact' }
];

type Rooms = {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
};

export const ROOMS_MOCK: Rooms[] = [
  {
    id: uuid(),
    image: 'room.webp',
    title: 'Single Room',
    description:
      'A cozy single room, perfect for solo travelers looking for comfort and convenience at an affordable price.',
    price: 100
  },
  {
    id: uuid(),
    image: 'room2.webp',
    title: 'Double Room',
    description:
      'A spacious double room designed for two, featuring modern amenities and a relaxing atmosphere.',
    price: 150
  },
  {
    id: uuid(),
    image: 'room3.webp',
    title: 'Family Room',
    description:
      'An ideal room for families, offering ample space and all the essentials for a pleasant stay together.',
    price: 200
  },
  {
    id: uuid(),
    image: 'room4.webp',
    title: 'Presidential Room',
    description:
      'Experience ultimate luxury in our Presidential Room, equipped with top-notch features and elegant decor.',
    price: 300
  },
  {
    id: uuid(),
    image: 'room5.webp',
    title: 'Suite Room',
    description:
      'A luxurious suite room with a separate living area, perfect for those seeking extra comfort and style.',
    price: 250
  },
  {
    id: uuid(),
    image: 'room6.webp',
    title: 'Luxury Room',
    description:
      'Indulge in our Luxury Room, boasting premium furnishings and exceptional amenities for a perfect getaway.',
    price: 400
  },
  {
    id: uuid(),
    image: 'room7.webp',
    title: 'Economy Room',
    description:
      'A budget-friendly economy room with all the basic comforts for a pleasant and economical stay.',
    price: 80
  },
  {
    id: uuid(),
    image: 'room8.webp',
    title: 'Standard Room',
    description:
      'Our Standard Room offers a perfect balance of comfort and value, ideal for both business and leisure travelers.',
    price: 120
  },
  {
    id: uuid(),
    image: 'room9.webp',
    title: 'Deluxe Room',
    description:
      'A refined deluxe room featuring stylish decor, modern amenities, and a tranquil ambiance for relaxation.',
    price: 180
  },
  {
    id: uuid(),
    image: 'room10.webp',
    title: 'Executive Room',
    description:
      'An elegant executive room designed with business travelers in mind, offering comfort and functionality.',
    price: 220
  }
];

export const CORE_FEATURES: Feature[] = [
  {
    title: 'Have High Rating',
    image: {
      src: ' /images/features/starts.svg',
      alt: 'High Rating'
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
  },
  {
    title: 'Quiet Hours',
    image: {
      src: '/images/features/clock.svg',
      alt: 'Quiet Hours'
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna..'
  },
  {
    title: 'Best Locations',
    image: {
      src: '/images/features/location.svg',
      alt: 'best location icon'
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
  },
  {
    title: 'Free Cancellation',
    image: {
      src: '/images/features/clock-cross.svg',
      alt: 'free cancellation icon'
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
  },
  {
    title: 'Payment Options',
    image: {
      src: '/images/features/credit.svg',
      alt: 'payment options icon'
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
  },
  {
    title: 'Special Offers',
    image: {
      src: '/images/features/offer.svg',
      alt: 'special offers icon'
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
  }
];

export const CONTACT_FEATURES: Feature[] = [
  {
    title: 'Hotel Address',
    icon: {
      name: 'location'
    },
    description: '19/A, Cirikon City hall Tower New York, NYC'
  },
  {
    title: 'Phone Number',
    icon: {
      name: 'phone'
    },
    description: '+ 97656 8675 7864 7 + 876 766 8675 765 6'
  },
  {
    title: 'Email',
    icon: {
      name: 'email'
    },
    description: 'info@webmail.com jobs.webmail@mail.com'
  }
];
