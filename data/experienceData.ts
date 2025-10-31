/**
 * Experience Data - 工作经验数据
 * 
 * 包含所有工作经验的详细信息
 */

export interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  location: string;
  duration: string;
  description: string;
  technologies: string[];
  achievements: string[];
  url?: string;
}

export const experienceData: ExperienceItem[] = [
  {
    id: "1",
    company: "UNSW Business School SDG Committee",
    position: "Software Engineer (Casual Professional)",
    location: "Sydney, Australia",
    duration: "Apr 2025 – Oct 2025",
    description: "Held full-stack responsibility for designing and developing three core systems for the UN SDG knowledge platform: Authentication, Search, and Notifications.",
    url: "https://sdg.unswzoo.com",
    technologies: ["Django (DRF)", "React", "TypeScript", "SimpleJWT", "SMTP", "Redis", "Celery", "D3.js"],
    achievements: [
      "Full-Stack Authentication System: Built a Django (DRF) and SimpleJWT backend API (Access 60min / Refresh 7day). Developed React (TypeScript) forms with an 'authenticated-Fetch' service for automatic 401 token refresh and retry. Integrated SMTP and Redis for email verification (5 min expiration).",
      "Homepage Search System: Utilized DRF Filters and 'SearchFilter' for a high-performance search API. Implemented the React homepage search bar, integrating keyword suggestions, hot-words, and a D3.js word cloud.",
      "Asynchronous Notification System: Used Celery (with Redis as Broker) to build an asynchronous notification service. Triggered SMTP email tasks on events like team invites or status changes."
    ]
  },
  {
    id: "2",
    company: "Acronyx Technologies (Accord AI Wallpaper Generator)",
    position: "Independent Developer & Project Lead",
    location: "Sydney, Australia",
    duration: "May 2025 – Present",
    description: "Independently designed, developed, and deployed an AI wallpaper generation application. The app integrates Google Vision and Stability AI (ControlNet) to provide users with personalized HD wallpapers based on image analysis.",
    url: "https://accordwp.com",
    technologies: ["Node.js", "Express", "React", "TypeScript", "Firebase", "Google Vision API", "Stability AI", "ControlNet", "Redis", "Multer", "Docker", "JWT"],
    achievements: [
      "Full-Stack Development & AI Integration: Led Node.js (Express) backend development, integrating Google Vision and Stability AI (ControlNet) APIs to build an automated pipeline from end to end. Built the frontend with React (TypeScript), integrating Firebase (Auth/Firestore/Storage) for a complete user system.",
      "System Design & Resource Management: Implemented resource management policies using Redis for daily quotas (3/day), Multer for file size limits (10MB) and end-to-end timeout controls (180s for Stability API). Deployed using Docker and secured with JWT."
    ]
  },
  {
    id: "3",
    company: "Jiezhen Technology",
    position: "IT Operations and Maintenance Intern",
    location: "Jiangsu, China",
    duration: "03/2024 - 08/2024",
    description: "Assisted in maintaining and optimizing server infrastructure for Jiezhen Technology.",
    technologies: ["Linux", "Docker", "MySQL", "Python", "Shell"],
    achievements: [
      "Maintained server infrastructure ensuring 99.5% uptime during internship period",
      "Developed automated monitoring scripts using Python that reduced manual checks by 70%",
      "Implemented backup procedures that reduced data recovery time from hours to minutes",
      "Assisted in system optimization tasks that improved server response time by 20%",
      "Documented troubleshooting procedures for common server issues"
    ]
  }
];
