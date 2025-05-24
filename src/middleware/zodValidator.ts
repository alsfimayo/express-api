import { type AnyZodObject, ZodError } from "zod";
import type { Request, Response, NextFunction } from "express";
import logger from "~/lib/logger";
export const schemaParseMiddleWare =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body);
      next();
    } catch (error) {
      logger.error(error);
      if (error instanceof ZodError) {
        return res.status(422).json({
          message: "Validation error",
          errors: error.errors
        });
      }

      return res.status(500).json({ message: "Internal server error" });
    }
  };
