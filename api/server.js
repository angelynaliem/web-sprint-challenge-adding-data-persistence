// build your server here
const express = require("express");
const helmet = require("helmet");

const ProjectsRouter = require("../api/project/router.js");
const ResourcesRouter = require("../api/resource/router.js");
const TasksRouter = require("../api/task/router.js");

const server = express();

server.use(express.json());
server.use("/api/projects", ProjectsRouter);
server.use("/api/resources", ResourcesRouter);
server.use("/api/tasks", TasksRouter);

module.exports = server;
