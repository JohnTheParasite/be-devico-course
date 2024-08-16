import express from "express";
import { Request, Response } from "express";

export const usersRouter = express.Router();

usersRouter
  .route("/")
  .get((req: Request, res: Response) => {
    res.status(200).json([
      { name: "John Doe", age: 25 },
      { name: "Jane Doe", age: 24 },
    ]);
  })
  .post((req: Request, res: Response) => {
    res.status(201).json(req.body);
  })
  .delete((req: Request, res: Response) => {
    res.send("Delete request received");
  });

usersRouter.route("/more").get((req: Request, res: Response) => {
  res.status(200).json([
    { name: "John Doe", age: 25 },
    { name: "Jane Doe", age: 24 },
    { name: "James Doe", age: 26 },
  ]);
});
