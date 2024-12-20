import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Paquetes Turísticos',
      version: '1.0.0',
      description: 'Documentación de la API para gestionar paquetes turísticos',
    },
    servers: [
      {
        url: "http://localhost:9002",
        description: "api",
      },
    ],
  },
  apis: ["./src/rutas/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

const setupSwaggerDocs = (app, port) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get("/api-docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
  console.log(`Documentación de Swagger disponible en http://localhost:${port}/api-docs`);
}

export default setupSwaggerDocs;

