import { Router } from "express";
import { getProjects } from "./projects.controller.js";

const router = Router();

router.get("/", getProjects);
router.get("/error", (_req, _res) => {
  throw new Error("Something went wrong");
});
export default router;
