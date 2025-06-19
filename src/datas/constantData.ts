import { Heart, Home, Mail, MapPin, Phone, Plane, Shield, Users } from "lucide-react";

export  const projects = [
    {
      title: 'KiraServices',
      description: 'Revolutionary healthcare platform targeting Rwandan hospitals to solve prolonged waiting times. Features appointment scheduling, queue management, and real-time notifications.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Socket.io'],
      icon: Heart,
      color: 'from-red-500 to-pink-600',
      github: 'https://github.com/Gasorekibo/KiraServices_App.git',
      demo: 'https://kiraservices.vercel.app',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'MamaCare',
      description: 'Maternal healthcare system for DRC, connecting community health workers with pregnant women through secure messaging and health monitoring.',
      tech: ['Next.js', 'Express.js', 'MongoDB', 'PWA'],
      icon: Users,
      color: 'from-green-500 to-teal-600',
      github: 'https://github.com/Gasorekibo/mama_care.git',
      demo: 'https://mamacare.app',
      image: 'https://images.pexels.com/photos/3952238/pexels-photo-3952238.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Mugombwa Refugee Hub',
      description: 'Comprehensive platform for Congolese refugees in Mugombwa camp to access NGO services through a unified application interface.',
      tech: ['React', 'Django', 'PostgreSQL', 'Docker'],
      icon: Shield,
      color: 'from-blue-500 to-indigo-600',
      github: 'https://github.com/Gasorekibo/mugombwa.git',
      demo: 'https://mugombwa-hub.org',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Capitalist Supply & Logistics',
      description: 'E-commerce platform connecting Chinese suppliers with Rwandan consumers, featuring seamless shipping services and order tracking.',
      tech: ['Next.js', 'NestJS', 'MongoDB', 'Stripe'],
      icon: Plane,
      color: 'from-yellow-500 to-orange-600',
      github: 'https://github.com/gasore/capitalist-supply',
      demo: 'https://capitalist-supply.com',
      image: 'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Jstay',
      description: 'Hotel and apartment booking platform specifically designed for diaspora people visiting Rwanda, with cultural insights and local recommendations.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Mapbox'],
      icon: Home,
      color: 'from-purple-500 to-pink-600',
      github: 'https://github.com/gasore/jstay',
      demo: 'https://jstay.rw',
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

export const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'JavaScript (ES6+)', level: 90 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 90 },
        { name: 'NestJS', level: 75 },
        { name: 'Django', level: 70 },
        { name: 'RESTful APIs', level: 90 }
      ]
    },
    {
      title: 'Database & Tools',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'Git & GitHub', level: 90 },
        { name: 'Docker', level: 70 },
        { name: 'AWS', level: 65 }
      ]
    }
  ];

export const testimonials = [
    {
      name: 'Dr. Sarah Uwimana',
      position: 'Chief Medical Officer, Kigali Health Center',
      content: 'Gasore transformed our hospital operations with KiraServices. Patient waiting times reduced by 70%, and our staff efficiency increased dramatically. His understanding of healthcare challenges is remarkable.',
      rating: 5,
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=300',
      project: 'KiraServices'
    },
    {
      name: 'Marie Nyirakabano',
      position: 'Community Health Coordinator, DRC',
      content: 'MamaCare has been a lifeline for pregnant women in our region. The platform bridged the gap between healthcare workers and mothers, especially during challenging times. Gasore\'s work saves lives.',
      rating: 5,
      image: 'https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg?auto=compress&cs=tinysrgb&w=300',
      project: 'MamaCare'
    },
    {
      name: 'James Murenzi',
      position: 'Camp Coordinator, Mugombwa Refugee Camp',
      content: 'The refugee hub platform revolutionized how we deliver services. Refugees can now access multiple NGO services through one application. Gasore understood our unique challenges perfectly.',
      rating: 5,
      image: 'https://images.pexels.com/photos/8422052/pexels-photo-8422052.jpeg?auto=compress&cs=tinysrgb&w=300',
      project: 'Refugee Hub'
    },
    {
      name: 'Liu Wei',
      position: 'Supply Chain Manager, Beijing',
      content: 'Working with Gasore on the logistics platform was exceptional. He understood both Chinese and African market dynamics, creating a seamless connection between suppliers and consumers.',
      rating: 5,
      image: 'https://images.pexels.com/photos/8129903/pexels-photo-8129903.jpeg?auto=compress&cs=tinysrgb&w=300',
      project: 'Capitalist Supply'
    },
    {
      name: 'David Nkurunziza',
      position: 'Rwanda Diaspora Association',
      content: 'Jstay made our homecoming visits so much easier. The platform understands diaspora needs and provides authentic local experiences. Gasore built something truly special for our community.',
      rating: 5,
      image: 'https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=300',
      project: 'Jstay'
    }
  ];
export const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];
export   const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mugwanezagasore073@gmail.com',
      link: 'mailto:gasore.mugwaneza@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+250 787 929 698',
      link: 'tel:+250787929698'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kigali, Rwanda',
      link: '#'
    }
  ];