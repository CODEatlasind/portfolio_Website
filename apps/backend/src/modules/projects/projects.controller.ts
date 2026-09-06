import { type Request, type Response } from "express";
import { getProjects as fetchProjects } from "./projects.service.js";

export const getProjects = async (
_req: Request,
res: Response,
  next: NextFunction,
): Promise<void> => {
try {
  const fetchedprojects = await fetchProjects();
  res.status(200).json({
    message: "Projects fetched successfully",
    projects: fetchedprojects,
  });
} catch (error) {
    next(error);
  }
};
};
