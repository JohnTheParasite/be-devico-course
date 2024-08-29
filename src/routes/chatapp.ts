import express from "express";
import { Request, Response } from "express";
import sqlConnection from "../config/database";

export const chatappRouter = express.Router();

chatappRouter.route("/users").get((req: Request, res: Response) => {
  sqlConnection.query("SELECT * FROM users", (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Internal Server Error");
    }

    res.status(200).send(results);
  });
});

chatappRouter
  .route("/test-data")
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
