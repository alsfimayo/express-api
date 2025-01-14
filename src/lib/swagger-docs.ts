import type { Express, Request, Response } from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import logger from "~/lib/logger";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Tirmint API Documentation",
      version: "1.0.0",
      description: "API documentation for Tirmint backend services",
    },
    components: {
      securitySchemes: {
        BearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        BearerAuth: [],
      },
    ],
  },
  apis: ["./src/v1/routes/**/*.ts", "./src/lib/schemas/*.ts"],
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app: Express) {
  const URL = process.env.APP_URL;
  app.use("/api/v1", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.use("/api/v1/docs.json", (_req: Request, res: Response) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });

  logger.info(`API Documentation available at ${URL}/api/v1`);
}

export default swaggerDocs;
