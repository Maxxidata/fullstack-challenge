import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import { Request, Response } from "express";
import { Routes } from "./routes";
import { Professional } from "./entity/Professional.entity";
import { ProfessionalType } from "./entity/ProfessionalType.entity";

createConnection().then(async connection => {
  const app = express();
  app.use(express.json());

  Routes.forEach(route => {
    (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
      const result = (new (route.controller as any))[route.action](req, res, next);
      if (result instanceof Promise) {
        result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

      } else if (result !== null && result !== undefined) {
        res.json(result);
      }
    });
  });

  app.listen(3000);

  console.log("Server running on port 3000");
}).catch(error => console.log(error));
