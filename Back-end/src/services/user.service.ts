import { Request, Response, query } from "express";
import * as fs from "fs";
import * as path from "path";
class UserService {
  constructor() {}
  async getAllUser(req: Request, res: Response) {
    const studentFile: string = fs
      .readFileSync(path.join("../models/students.json"), "utf-8")
      .toString();
    const studentList: string = JSON.parse(studentFile);
    res.status(200).json(studentList);
  }
  createStudent(req: Request, res: Response) {
    const newUser: number = +req.body.id;
    const fileUser: string = fs.readFileSync("../models/students.json", "utf8");
    const listUser: any = JSON.parse(fileUser);
    listUser.push(newUser);
    fs.writeFileSync("../models/students.json", JSON.stringify(listUser));
    res.json({
      status: 201,
      message: "Ok",
      data: listUser,
    });
  }
  deleteStudent(req: Request, res: Response) {
    const id: number = +req.params.id;

    const fileUser: string = fs.readFileSync("../models/students.json", "utf8");
    const listUser: any = JSON.parse(fileUser);
    const newListUser = listUser.filter((item: any) => item.id != id);
    fs.writeFileSync("../models/users.json", JSON.stringify(newListUser));

    res.json(newListUser);
  }
  updateUser(req: Request, res: Response) {
    const id: number = +req.params.id;
    const fileUsers: string = fs.readFileSync("../models/students.json", "utf8");
    const listUser: any = JSON.parse(fileUsers);
    listUser.map((item: any, index: number) => {
      if (item.id == id) {
        const newUser = { ...item, ...req.body };
        console.log(1111, newUser);
        listUser.splice(index, 1, newUser);
        return;
      }
    });
    fs.writeFileSync("../models/students.json", JSON.stringify(listUser));
    res.status(200).json(listUser);
  }
}
export default UserService;
