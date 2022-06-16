const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Starbucks API",
      version: "1.0.0",
    },
  },
  apis: ["./Routes/*.js"], // files containing annotations as above
};

const openapiSpecification = swaggerJsdoc(options);
module.exports = openapiSpecification;
