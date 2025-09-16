/**
 * Education Data - 教育经历数据 (示例版本)
 * 
 * 包含所有教育经历的详细信息
 */

export interface EducationItem {
  id: string;
  school: string;
  major: string;
  duration: string;
}

export const educationData: EducationItem[] = [
  {
    id: "1",
    school: "University of Technology",
    major: "Master of Information Technology",
    duration: "2023 - 2025"
  },
  {
    id: "2",
    school: "State University",
    major: "Bachelor of Computer Science",
    duration: "2019 - 2023"
  }
];
