import mongoose, { Schema } from "mongoose";
const ProjectSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    tags: [
      {
        type: String,
        required: true,
      },
    ],
    status: {
      type: Boolean,
      default: true,
    },
    userId: {
      type: String,
      required: true,
    },
    user: {
      type: Object,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

export const Project =
  mongoose.models.projects || mongoose.model("projects", ProjectSchema);
