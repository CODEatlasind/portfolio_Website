import { Router } from "express";
import {
  createProjectController,
  getProjectsController,
} from "./projects.controller.js";

const router = Router();
// TODO: routes need refining, for now, we will keep it simple and just have a GET and POST route for projects
router.get("/", getProjectsController);
router.post("/", createProjectController);
router.get("/error", (_req, _res) => {
  throw new Error("Something went wrong");
});
export default router;
