import express, { urlencoded } from "express";
import router from "./routers";
import cors from "cors";
const app = express();
const PORT = 2000;
app.use(express.static("public"));
app.use(urlencoded);
app.use(cors());
app.use("/api/v1/student", router);
app.listen(PORT, () => {
  console.log(`mở server,http://localhost:${PORT}`);
});
