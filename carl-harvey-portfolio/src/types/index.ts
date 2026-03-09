export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  clientName: string;
  clientType: 'Individual' | 'Small Business' | 'Institution';
  businessImpact: string;
  liveDemoLink?: string;
  githubRepoLink?: string;
  screenshotPath: string;
  videoEmbedCode?: string;
  dateCompleted: string;
  technologies: ProjectTechnology[];
}

export interface ProjectTechnology {
  name: string;
  type: 'Frontend' | 'Backend' | 'Database' | 'Deployment';
}

export interface Service {
  id: string;
  title: string;
  iconClass?: string;
  shortDescription: string;
  detailedDescription: string;
  isFeatured: boolean;
}

export interface ContactInquiry {
  id: string;
  senderName: string;
  senderEmail: string;
  subject?: string;
  messageBody: string;
  receivedAt: string;
  status: 'New' | 'Reviewed' | 'Replied';
}

export interface MeetingBooking {
  id: string;
  requesterName: string;
  requesterEmail: string;
  requestedTimeSlot: string;
  preferredContactMethod?: string;
  purpose: string;
  bookedAt: string;
  confirmationStatus: 'Pending' | 'Confirmed' | 'Cancelled';
}

export interface ResumeAsset {
  id: string;
  assetType: 'ResumePDF' | 'PortfolioPDF' | 'OtherDocument';
  fileName: string;
  storagePath: string;
  version?: string;
  isCurrent: boolean;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  profileImagePath?: string;
  email: string;
  phone?: string;
  location?: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  isExternal?: boolean;
}
