export type EmploymentType = 'Full-time' | 'Part-time' | 'Contract' | 'Internship';

export interface JobPost {
  id: string;
  title: string;
  description: string;
  salary: string;
  employmentType: EmploymentType;
  jobLocation: string;
  officeLocation: string;
  createdAt: Date;
} 