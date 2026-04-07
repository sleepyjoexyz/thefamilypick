export interface Deal {
  id: string;
  title: string;
  category: 'Baby Gear' | 'Pet Tech';
  originalPrice: number;
  dealPrice: number;
  percentOff: number;
  source: string;
  sourceUrl: string;
  amazonUrl: string;
  timeLeft: string;
  imageAlt: string;
  imageUrl: string;
  coupon: string;
}

export const mockDeals: Deal[] = [
  {
    id: 'BG-001',
    title: 'HelloBaby 4.3 Video Baby Monitor with 30 Hours Battery, Remo',
    category: 'Baby Gear',
    originalPrice: 69.99,
    dealPrice: 36.99,
    percentOff: 47,
    source: 'Amazon',
    sourceUrl: 'https://www.amazon.com/dp/B0CYZNBB14?tag=rogeti02-20',
    amazonUrl: 'https://www.amazon.com/dp/B0CYZNBB14?tag=rogeti02-20',
    timeLeft: 'Limited Time Deal',
    imageAlt: 'HelloBaby 4.3 Video Baby Monitor with 30',
    imageUrl: 'https://m.media-amazon.com/images/I/71SoSkLHu8L._AC_SL1500_.jpg',
    coupon: '',
  },
  {
    id: 'BG-002',
    title: 'ANMEATE Video Baby Monitor with Digital Camera, Digital 2.4G',
    category: 'Baby Gear',
    originalPrice: 49.99,
    dealPrice: 29.99,
    percentOff: 40,
    source: 'Amazon',
    sourceUrl: 'https://www.amazon.com/dp/B07FSLSL1K?tag=rogeti02-20',
    amazonUrl: 'https://www.amazon.com/dp/B07FSLSL1K?tag=rogeti02-20',
    timeLeft: 'Limited Time Deal',
    imageAlt: 'ANMEATE Video Baby Monitor with Digital',
    imageUrl: 'https://m.media-amazon.com/images/I/61hlErxsffL._AC_SL1500_.jpg',
    coupon: '',
  },
  {
    id: 'BG-003',
    title: 'HelloBaby 6 IPS Large Screen, Video Baby Monitor with Upgrad',
    category: 'Baby Gear',
    originalPrice: 75.99,
    dealPrice: 49.99,
    percentOff: 34,
    source: 'Amazon',
    sourceUrl: 'https://www.amazon.com/dp/B0DWLB7VKP?tag=rogeti02-20',
    amazonUrl: 'https://www.amazon.com/dp/B0DWLB7VKP?tag=rogeti02-20',
    timeLeft: 'Limited Time Deal',
    imageAlt: 'HelloBaby 6 IPS Large Screen, Video Baby',
    imageUrl: 'https://m.media-amazon.com/images/I/61HMHmcxYqL._AC_SL1500_.jpg',
    coupon: '',
  },
  {
    id: 'BG-004',
    title: 'Baby Monitor with Camera and Audio- Video Baby Monitor with',
    category: 'Baby Gear',
    originalPrice: 79.99,
    dealPrice: 59.99,
    percentOff: 25,
    source: 'Amazon',
    sourceUrl: 'https://www.amazon.com/dp/B0D477CWP5?tag=rogeti02-20',
    amazonUrl: 'https://www.amazon.com/dp/B0D477CWP5?tag=rogeti02-20',
    timeLeft: 'Limited Time Deal',
    imageAlt: 'Baby Monitor with Camera and Audio- Vide',
    imageUrl: 'https://m.media-amazon.com/images/I/61EXtOZzWTL._AC_SL1500_.jpg',
    coupon: '',
  },
  {
    id: 'BG-005',
    title: 'Evenflo Revolve180 LiteMax NXT Rotating Rear-Facing Lightwei',
    category: 'Baby Gear',
    originalPrice: 379.99,
    dealPrice: 299.99,
    percentOff: 21,
    source: 'Amazon',
    sourceUrl: 'https://www.amazon.com/dp/B0DX7KCCTC?tag=rogeti02-20',
    amazonUrl: 'https://www.amazon.com/dp/B0DX7KCCTC?tag=rogeti02-20',
    timeLeft: 'Limited Time Deal',
    imageAlt: 'Evenflo Revolve180 LiteMax NXT Rotating',
    imageUrl: 'https://m.media-amazon.com/images/I/61HzGc8rigL._AC_SL1500_.jpg',
    coupon: '',
  },
  {
    id: 'PT-001',
    title: 'Tractive Smart Cat GPS Tracker Real-Time Location & Wellne',
    category: 'Pet Tech',
    originalPrice: 49.99,
    dealPrice: 24.5,
    percentOff: 51,
    source: 'Amazon',
    sourceUrl: 'https://www.amazon.com/dp/B0C75D8QZ9?tag=rogeti02-20',
    amazonUrl: 'https://www.amazon.com/dp/B0C75D8QZ9?tag=rogeti02-20',
    timeLeft: 'Limited Time Deal',
    imageAlt: 'Tractive Smart Cat GPS Tracker Real-Time',
    imageUrl: 'https://m.media-amazon.com/images/I/71VvBl+rFkL._AC_SL1500_.jpg',
    coupon: '',
  },
  {
    id: 'PT-002',
    title: 'Tractive Smart Cat GPS Tracker Real-Time Location & Wellne',
    category: 'Pet Tech',
    originalPrice: 49.99,
    dealPrice: 24.5,
    percentOff: 51,
    source: 'Amazon',
    sourceUrl: 'https://www.amazon.com/dp/B0D3DV6CL6?tag=rogeti02-20',
    amazonUrl: 'https://www.amazon.com/dp/B0D3DV6CL6?tag=rogeti02-20',
    timeLeft: 'Limited Time Deal',
    imageAlt: 'Tractive Smart Cat GPS Tracker Real-Time',
    imageUrl: 'https://m.media-amazon.com/images/I/71NITRYP1iL._AC_SL1500_.jpg',
    coupon: '',
  },
  {
    id: 'PT-003',
    title: 'iPettie F4-C Smart Automatic Pet Feeder with 160 Wide-Angle',
    category: 'Pet Tech',
    originalPrice: 99.99,
    dealPrice: 54.99,
    percentOff: 45,
    source: 'Amazon',
    sourceUrl: 'https://www.amazon.com/dp/B0D7VK4R3J?tag=rogeti02-20',
    amazonUrl: 'https://www.amazon.com/dp/B0D7VK4R3J?tag=rogeti02-20',
    timeLeft: 'Limited Time Deal',
    imageAlt: 'iPettie F4-C Smart Automatic Pet Feeder',
    imageUrl: 'https://m.media-amazon.com/images/I/71ZVxIrSPBL._AC_SL1500_.jpg',
    coupon: '',
  }
];;
