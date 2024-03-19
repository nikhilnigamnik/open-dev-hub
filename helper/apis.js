"use client";

import axios from "axios";

export const getDevProjects = () => axios.get("/api/project");
