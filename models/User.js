import mongoose, { Schema } from "mongoose";
const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
    },
    password: {
      type: String,
    },
    username: {
      type: String,
      unique: true,
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
