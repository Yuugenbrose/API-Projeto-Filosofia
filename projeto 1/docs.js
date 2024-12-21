const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API Filosofia e Esoterismo',
            version: '1.0.0',
            description: 'API para cadastro de resumos de pensamentos filosóficos e esotéricos',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Servidor Local',
            },
        ],
    },
    apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = (req, res) => {
    res.send(swaggerUi.generateHTML(swaggerDocs));
};