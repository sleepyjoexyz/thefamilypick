export interface Deal {
  id: string;
  title: string;
  category: 'Baby Gear' | 'Pet Tech';
  source: string;
  amazonUrl: string;
  timeLeft?: string;
  imageAlt: string;
  imageUrl?: string;
  coupon?: string;
}

export const mockDeals: Deal[] = [
  {
    id: 'BG-001',
    title: 'ieGeek Baby Monitor with 2K HD Resolution, Pan-Til',
    category: 'Baby Gear',
    source: 'Amazon',
    amazonUrl: 'https://www.amazon.com/dp/B0D47LKJ35?tag=rogeti02-20',
    timeLeft: 'Limited Time Deal',
    imageAlt: 'ieGeek Baby Monitor with',
    coupon: '',
  },
  {
    id: 'BG-002',
    title: 'Jartoo 2K 5.5\" Video Baby Monitor with Camera and',
    category: 'Baby Gear',
    source: 'Amazon',
    amazonUrl: 'https://www.amazon.com/dp/B0DYV9THYM?tag=rogeti02-20',
    timeLeft: 'Limited Time Deal',
    imageAlt: 'Jartoo 2K 5.5\" Video',
    coupon: '',
  },
  {
    id: 'BG-003',
    title: 'BOB Gear Revolution Flex 3.0 Jogging Stroller, Gra',
    category: 'Baby Gear',
    source: 'Amazon',
    amazonUrl: 'https://www.amazon.com/dp/B0829PMJ8D?tag=rogeti02-20',
    timeLeft: 'Limited Time Deal',
    imageAlt: 'BOB Gear Revolution Flex',
    coupon: '',
  },
  {
    id: 'BG-004',
    title: 'HelloBaby Video Baby Monitor with Camera and Audio',
    category: 'Baby Gear',
    source: 'Amazon',
    amazonUrl: 'https://www.amazon.com/dp/B0B11PY5HC?tag=rogeti02-20',
    timeLeft: 'Limited Time Deal',
    imageAlt: 'HelloBaby Video Baby Monitor',
    coupon: '',
  },
  {
    id: 'BG-005',
    title: 'HelloBaby HB30 Video Baby Monitor with Digital Cam',
    category: 'Baby Gear',
    source: 'Amazon',
    amazonUrl: 'https://www.amazon.com/dp/B0B316NPZ6?tag=rogeti02-20',
    timeLeft: 'Limited Time Deal',
    imageAlt: 'HelloBaby HB30 Video Baby',
    coupon: '',
  },
  {
    id: 'PT-001',
    title: 'Veeconn Dog Clippers Grooming Kit Hair Clipper-Low',
    category: 'Pet Tech',
    source: 'Amazon',
    amazonUrl: 'https://www.amazon.com/dp/B09FS5ZVXK?tag=rogeti02-20',
    timeLeft: 'Limited Time Deal',
    imageAlt: 'Veeconn Dog Clippers Grooming',
    coupon: '',
  },
  {
    id: 'PT-002',
    title: 'Tractive Smart Dog GPS Tracker - Live Pet Tracker',
    category: 'Pet Tech',
    source: 'Amazon',
    amazonUrl: 'https://www.amazon.com/dp/B0D6Z74WJY?tag=rogeti02-20',
    timeLeft: 'Limited Time Deal',
    imageAlt: 'Tractive Smart Dog GPS',
    coupon: '',
  },
  {
    id: 'PT-003',
    title: 'Tractive Smart Dog GPS Tracker - Live Pet Tracker',
    category: 'Pet Tech',
    source: 'Amazon',
    amazonUrl: 'https://www.amazon.com/dp/B0D6Z4L6BW?tag=rogeti02-20',
    timeLeft: 'Limited Time Deal',
    imageAlt: 'Tractive Smart Dog GPS',
    coupon: '',
  },
  {
    id: 'PT-004',
    title: 'Tractive Smart Dog GPS Tracker with 6 Month Subscr',
    category: 'Pet Tech',
    source: 'Amazon',
    amazonUrl: 'https://www.amazon.com/dp/B0DZF21KRY?tag=rogeti02-20',
    timeLeft: 'Limited Time Deal',
    imageAlt: 'Tractive Smart Dog GPS',
    coupon: '',
  },
  {
    id: 'PT-005',
    title: 'PETLIBRO Automatic Cat Feeder - 3L Programmable Pe',
    category: 'Pet Tech',
    source: 'Amazon',
    amazonUrl: 'https://www.amazon.com/dp/B0953SDCRG?tag=rogeti02-20',
    timeLeft: 'Limited Time Deal',
    imageAlt: 'PETLIBRO Automatic Cat Feeder',
    coupon: '',
  },
];
