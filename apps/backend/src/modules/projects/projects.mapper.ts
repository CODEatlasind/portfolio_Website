import { type Project, type ProjectDocument } from "./projects.types.js";

export const toProjectResponse = (project: ProjectDocument): Project => {
  return {
    id: project._id.toString(),
    title: project.title,
    description: project.description,
    technologies: project.technologies,
    featured: project.featured,
  };
};
