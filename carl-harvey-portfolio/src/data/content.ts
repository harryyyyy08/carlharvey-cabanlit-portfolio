import { PersonalInfo, Project, Service, NavigationItem } from '@/types';

export const personalInfo: PersonalInfo = {
  name: 'Carl Harvey Cabanlit',
  title: 'Full Stack Developer & System Architect',
  tagline: 'Building custom solutions for businesses and individuals',
  bio: 'I am a passionate full-stack developer with expertise in creating custom web applications, systems, and portfolio websites. With a focus on modern technologies and best practices, I help businesses and individuals bring their digital ideas to life.',
  email: 'carlharvey@example.com',
  location: 'Philippines'
};

export const navigationItems: NavigationItem[] = [
  { id: '1', label: 'Home', href: '#home' },
  { id: '2', label: 'About', href: '#about' },
  { id: '3', label: 'Services', href: '#services' },
  { id: '4', label: 'Projects', href: '#projects' },
  { id: '5', label: 'Contact', href: '#contact' }
];

export const services: Service[] = [
  {
    id: '1',
    title: 'Custom Web Application Development',
    shortDescription: 'Tailored web solutions for your unique business needs',
    detailedDescription: 'Full-stack web applications built with modern technologies, scalable architecture, and user-centric design. From concept to deployment, I create solutions that solve real business problems.',
    isFeatured: true
  },
  {
    id: '2',
    title: 'Portfolio Website Creation',
    shortDescription: 'Professional online presence for individuals and businesses',
    detailedDescription: 'Custom-designed portfolio websites that showcase your work, skills, and achievements. Perfect for professionals, freelancers, and businesses looking to establish a strong online presence.',
    isFeatured: true
  },
  {
    id: '3',
    title: 'System Development & Consultation',
    shortDescription: 'Comprehensive system solutions and technical consultation',
    detailedDescription: 'End-to-end system development, database design, and technical consultation services. Helping businesses optimize their processes through custom software solutions.',
    isFeatured: false
  },
  {
    id: '4',
    title: 'Frontend Development',
    shortDescription: 'Modern, responsive user interfaces with exceptional UX',
    detailedDescription: 'Creating beautiful, responsive, and performant frontend applications using the latest web technologies and best practices in user experience design.',
    isFeatured: false
  }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Inventory Management System',
    shortDescription: 'Complete inventory tracking solution for small businesses',
    detailedDescription: 'A comprehensive inventory management system designed for small businesses to track stock levels, manage suppliers, and generate reports. Features include real-time stock updates, barcode scanning, and automated reorder notifications.',
    clientName: 'Local Retail Business',
    clientType: 'Small Business',
    businessImpact: 'Reduced inventory costs by 30% and improved stock accuracy by 95%',
    liveDemoLink: 'https://demo-inventory.vercel.app',
    githubRepoLink: 'https://github.com/carlharvey/inventory-system',
    screenshotPath: '/assets/images/project_thumbnails/inventory-system.png',
    dateCompleted: '2024-01-15',
    technologies: [
      { name: 'React', type: 'Frontend' },
      { name: 'Node.js', type: 'Backend' },
      { name: 'PostgreSQL', type: 'Database' },
      { name: 'Tailwind CSS', type: 'Frontend' }
    ]
  },
  {
    id: '2',
    title: 'E-Learning Platform',
    shortDescription: 'Online learning management system for educational institutions',
    detailedDescription: 'A full-featured e-learning platform that enables educational institutions to deliver online courses, manage student progress, and facilitate interactive learning experiences.',
    clientName: 'Educational Technology Project',
    clientType: 'Institution',
    businessImpact: 'Served 500+ students with 90% course completion rate',
    screenshotPath: '/assets/images/project_thumbnails/elearning-platform.png',
    dateCompleted: '2023-11-20',
    technologies: [
      { name: 'Next.js', type: 'Frontend' },
      { name: 'MongoDB', type: 'Database' },
      { name: 'Express.js', type: 'Backend' },
      { name: 'TypeScript', type: 'Frontend' }
    ]
  },
  {
    id: '3',
    title: 'Personal Finance Tracker',
    shortDescription: 'Budget and expense tracking application for personal finance management',
    detailedDescription: 'A user-friendly personal finance application that helps individuals track expenses, set budgets, and visualize spending patterns through interactive charts and reports.',
    clientName: 'Individual Client',
    clientType: 'Individual',
    businessImpact: 'Helped users save an average of 15% more through better expense tracking',
    liveDemoLink: 'https://finance-tracker-demo.vercel.app',
    screenshotPath: '/assets/images/project_thumbnails/finance-tracker.png',
    dateCompleted: '2023-09-10',
    technologies: [
      { name: 'Vue.js', type: 'Frontend' },
      { name: 'Firebase', type: 'Backend' },
      { name: 'Chart.js', type: 'Frontend' },
      { name: 'Vuetify', type: 'Frontend' }
    ]
  }
];
