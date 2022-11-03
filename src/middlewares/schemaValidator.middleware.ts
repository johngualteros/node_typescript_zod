import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodError } from "zod";
export const schemaValidator =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        return res.status(400).send(err.issues.map((issue) => issue.message));
      }
      return res.status(500).send("Internal server error");
    }
  };
