import mongoose, { Schema } from "mongoose";
import type { ProjectDocument } from "./projects.types.js";

const projectSchema = new Schema<ProjectDocument>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },

    technologies: {
      type: [String],
      required: true,
    },

    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

export const ProjectModel = mongoose.model<ProjectDocument>(
  "Project",
  projectSchema,
);
