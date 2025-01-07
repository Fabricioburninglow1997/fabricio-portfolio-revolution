export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tools?: string[];
  collaborators?: Array<{
    name: string;
    role: string;
    link?: string;
  }>;
  isTeamProject?: boolean;
  detailedDescription?: string;
}