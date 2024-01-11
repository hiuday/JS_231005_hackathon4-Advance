import { Express } from "express";
import userController from "../controllers/user.controller";

const Router = (server: Express) => {
  server.use("/api/v1/users", userController);
};
export default Router;
