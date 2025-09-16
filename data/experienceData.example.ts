/**
 * Experience Data - 工作经验数据 (示例版本)
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
}

export const experienceData: ExperienceItem[] = [
  {
    id: "1",
    company: "Tech Company A",
    position: "Software Developer",
    location: "City, Country",
    duration: "01/2024 - Present",
    description: "Developed and maintained web applications using modern technologies.",
    technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "PostgreSQL"],
    achievements: [
      "Led a team of developers to deliver a customer management system",
      "Improved application performance by 40% through code optimization",
      "Implemented CI/CD pipeline reducing deployment time by 60%",
      "Mentored junior developers and helped them grow their skills"
    ]
  },
  {
    id: "2",
    company: "Startup B",
    position: "Full Stack Developer",
    location: "City, Country",
    duration: "06/2023 - 12/2023",
    description: "Built full-stack applications with focus on user experience.",
    technologies: ["Vue.js", "Express.js", "MongoDB", "Redis", "GraphQL"],
    achievements: [
      "Built a real-time chat application serving 10,000+ users",
      "Developed RESTful APIs that handle 1M+ requests daily",
      "Collaborated with design team to implement responsive UI components",
      "Reduced database query time by 50% through query optimization"
    ]
  },
  {
    id: "3",
    company: "Company C",
    position: "IT Intern",
    location: "City, Country",
    duration: "03/2023 - 08/2023",
    description: "Gained hands-on experience in IT operations and maintenance.",
    technologies: ["Linux", "Docker", "MySQL", "Python", "Shell"],
    achievements: [
      "Maintained server infrastructure and monitoring systems",
      "Developed automated backup solutions",
      "Implemented disaster recovery procedures",
      "Assisted in system optimization and troubleshooting"
    ]
  }
];
