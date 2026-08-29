import { type Request, type Response } from "express";
import { getProjects as fetchProjects } from "./projects.service.js";

export const getProjects = async (_req: Request, res: Response) => {
  const projects = await fetchProjects();
  res.json({
    message: "Projects endpoint",
    projects: projects,
  });
};
