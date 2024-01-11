import express from "express";
import UserService from "../services/user.service";
const userController = express.Router();
const userService = new UserService();
userController.get("/", userService.getAllUser);
userController.post("/", userService.createStudent);
//xoá user
userController.delete("/:id", userService.deleteStudent);
//sửa user
userController.put("/:id", userService.updateUser);
export default userController;
