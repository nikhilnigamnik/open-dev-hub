import mongoose, { Schema } from "mongoose";
const UserSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    username: {
      type: String,
    },
    title: {
      type: String,
    },
    status: {
      type: Boolean,
      default: true,
    },
    project: [
      {
        type: Schema.Types.ObjectId,
        ref: "projects",
      },
    ],
    skills: [
      {
        type: String,
      },
    ],
    social: {
      twitter: {
        type: String,
      },
      github: {
        type: String,
      },
      linkedin: {
        type: String,
      },
      website: {
        type: String,
      },
    },
  },

  {
    timestamps: true,
  }
);

export const User =
  mongoose.models.users || mongoose.model("users", UserSchema);
