import type { Types } from "mongoose";

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  featured: boolean;
}

export interface ProjectDocument {
  _id: Types.ObjectId;
  title: string;
  description: string;
  technologies: string[];
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}
