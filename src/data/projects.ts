import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'swahili-haven',
    title: 'Swahili Haven Luxury Resort',
    client: 'Swahili Haven Group',
    category: 'E-Commerce',
    location: 'Malindi, Kenya',
    description: 'Bespoke direct-booking platform & immersive digital experience for a luxury beachfront resort in Watamu/Malindi.',
    fullStory: 'Swahili Haven required a modern web experience to capture direct bookings and bypass high OTA commission rates. We built a high-speed web application using React and Tailwind, integrated with seamless mobile money (M-Pesa) and international card gateways.',
    tags: ['React', 'Direct Booking', 'M-Pesa API', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    year: '2025',
    link: 'https://swahilihaven.co.ke',
    metrics: [
      { label: 'Direct Bookings', value: '+140%' },
      { label: 'Page Load Speed', value: '0.8s' },
      { label: 'Mobile Conversion', value: '4.2%' }
    ]
  },
  {
    id: 'kilifi-agro',
    title: 'Kilifi Organic Exporters',
    client: 'Kilifi Agro Co.',
    category: 'Corporate',
    location: 'Kilifi / Nairobi',
    description: 'International trade portal & trace-origin platform for coastal organic produce exporters.',
    fullStory: 'A clean, high-contrast B2B portal engineered to display real-time inventory, organic certifications, and shipment tracking for European and Middle Eastern buyers.',
    tags: ['Next.js', 'B2B Portal', 'Tailwind', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80',
    year: '2025',
    link: 'https://kilifiagro.com',
    metrics: [
      { label: 'Inquiries/Month', value: '85+' },
      { label: 'Global Traffic', value: '62%' }
    ]
  },
  {
    id: 'oceanic-marine',
    title: 'Watamu Deep Sea Charters',
    client: 'Captain Ali Charters',
    category: 'SaaS',
    location: 'Watamu, Kenya',
    description: 'Live trip schedule calendar and online deposit booking engine for deep sea fishing excursions.',
    fullStory: 'Engineered an ultra-sleek dark interface for anglers around the world to check live weather conditions, seasonal catches, and instantly reserve custom boat charters.',
    tags: ['React', 'Custom Engine', 'Firebase', 'Live Weather'],
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    year: '2024',
    link: 'https://watamucharters.com',
    metrics: [
      { label: 'Booking Speed', value: '3 clicks' },
      { label: 'SEO Rank', value: '#1 Watamu Fishing' }
    ]
  },
  {
    id: 'malindi-crafts',
    title: 'Swahili Carvings Artisans',
    client: 'Malindi Artisans Collective',
    category: 'E-Commerce',
    location: 'Malindi, Kenya',
    description: 'Global e-commerce gallery celebrating handcrafted coastal woodcrafts and brass art.',
    fullStory: 'Empowering local coastal craftsmen with a minimalist, gallery-grade storefront to ship authentic Swahili carvings directly to international art collectors.',
    tags: ['Stripe & M-Pesa', 'Global Shipping', 'Gallery UI'],
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
    year: '2024',
    link: 'https://swahilicrafts.art',
    metrics: [
      { label: 'Countries Shipped', value: '18' },
      { label: 'Artist Revenue Increase', value: '210%' }
    ]
  }
];
