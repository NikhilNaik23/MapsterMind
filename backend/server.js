import dotenv from "dotenv";

import express from "express";
import db from "./config/db.js";
import quizRoutes from "./routes/quiz.route.js";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

app.use("/api/quiz", quizRoutes);

db.connect()
  .then(() => {
    console.log(`DB Connected Successfully`);
  })
  .catch((err) => {
    console.log(`DB Connection Error: ${err}`);
  });

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
