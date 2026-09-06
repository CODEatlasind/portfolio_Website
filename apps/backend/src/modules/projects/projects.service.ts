import { type Project } from "./projects.types.js";
const projects: Project[] = [
  {
    id: "portfolio-platform",
    title: "Portfolio Platform",
    description: "A full-stack developer portfolio platform.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    featured: true,
  },
];
export const getProjects = async (): Promise<Project[]> => {
  const projects = await ProjectModel.find().lean();

  return projects.map((project) => ({
    ...project,
    id: String(project._id),
  }));
};
