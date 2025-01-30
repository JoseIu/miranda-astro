export const NAV_LINKS = [
  { href: '/about-us', text: 'About us' },
  { href: '/rooms', text: 'Rooms' },
  { href: '/offers', text: 'Offers' },
  { href: '/contact', text: 'Contact' }
];

type Rooms = {
  image: string;
  title: string;
  description: string;
  price: number;
};

export const ROOMS_MOCK: Rooms[] = [
  {
    image: 'room.webp',
    title: 'Single Room',
    description:
      'A cozy single room, perfect for solo travelers looking for comfort and convenience at an affordable price.',
    price: 100
  },
  {
    image: 'room2.webp',
    title: 'Double Room',
    description:
      'A spacious double room designed for two, featuring modern amenities and a relaxing atmosphere.',
    price: 150
  },
  {
    image: 'room3.webp',
    title: 'Family Room',
    description:
      'An ideal room for families, offering ample space and all the essentials for a pleasant stay together.',
    price: 200
  },
  {
    image: 'room4.webp',
    title: 'Presidential Room',
    description:
      'Experience ultimate luxury in our Presidential Room, equipped with top-notch features and elegant decor.',
    price: 300
  },
  {
    image: 'room5.webp',
    title: 'Suite Room',
    description:
      'A luxurious suite room with a separate living area, perfect for those seeking extra comfort and style.',
    price: 250
  },
  {
    image: 'room6.webp',
    title: 'Luxury Room',
    description:
      'Indulge in our Luxury Room, boasting premium furnishings and exceptional amenities for a perfect getaway.',
    price: 400
  },
  {
    image: 'room7.webp',
    title: 'Economy Room',
    description:
      'A budget-friendly economy room with all the basic comforts for a pleasant and economical stay.',
    price: 80
  },
  {
    image: 'room8.webp',
    title: 'Standard Room',
    description:
      'Our Standard Room offers a perfect balance of comfort and value, ideal for both business and leisure travelers.',
    price: 120
  },
  {
    image: 'room9.webp',
    title: 'Deluxe Room',
    description:
      'A refined deluxe room featuring stylish decor, modern amenities, and a tranquil ambiance for relaxation.',
    price: 180
  },
  {
    image: 'room10.webp',
    title: 'Executive Room',
    description:
      'An elegant executive room designed with business travelers in mind, offering comfort and functionality.',
    price: 220
  }
];
