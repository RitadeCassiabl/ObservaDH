import { Options } from 'swagger-jsdoc';

const swaggerOptions: Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API ObservaDH',
            version: '0.1.0',
            description: 'Documentação automática gerada via swagger-jsdoc',
        },
        servers: [
            { url: 'http://localhost:3000/api' }
        ],
        components: {
            schemas: {
                RespostaApi: {
                    type: 'object',
                    properties: {
                        sucesso: { type: 'boolean' },
                        mensagem: { type: 'string' },
                        dados: { type: 'object', nullable: true },
                    },
                    required: ['sucesso', 'mensagem']
                },
            }
        }
    },
    apis: ['./src/app/api/**/route.ts', './src/lib/api/controllers/**/*.ts'],
};

export default swaggerOptions;
