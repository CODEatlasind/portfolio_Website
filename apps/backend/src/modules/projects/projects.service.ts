import { type Project } from "./projects.types.js";
import { ProjectModel } from "./projects.model.js";

export const getProjects = async (): Promise<Project[]> => {
  const projects = await ProjectModel.find().lean();

  return projects.map((project) => ({
    ...project,
    id: String(project._id),
  }));
};

export const createProject = async (project: Project): Promise<Project> => {
  // TODO: Add a duplicay check for the project title later
  const newProject = await ProjectModel.create(project);
  return {
    ...newProject.toObject(),
    id: String(newProject._id),
  };
};