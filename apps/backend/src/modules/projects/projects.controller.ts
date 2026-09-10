import { type Request, type Response, type NextFunction, json } from "express";
import { getProjects, createProject } from "./projects.service.js";

export const getProjectsController = async (
  _req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const fetchedprojects = await getProjects();
    res.status(200).json({
      message: "Projects fetched successfully",
      projects: fetchedprojects,
    });
  } catch (error) {
    next(error);
  }
};

export const createProjectController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const projectData = req.body;
    const createdProject = await createProject(projectData);
    res.status(201).json({
      message: "Project created successfully",
      project: createdProject,
    });
  } catch (error) {
    next(error);
  }
};
