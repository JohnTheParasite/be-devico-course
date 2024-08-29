import express from "express";
import { setHeaders } from "./middlewares";
import { chatappRouter } from "./routes";

const PORT = 5000;

const app = express();
app.use(express.json());
app.use(setHeaders);
app.use("/chatapp", chatappRouter);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}.`);
});
