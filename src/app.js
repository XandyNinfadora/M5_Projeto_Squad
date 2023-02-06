import express from 'express'

const app = express();

app.use(express.json());

import bebidaController from './Controllers/bebidaController.js';
import estoqueController from './Controllers/estoqueController.js';
import hamburguerController from './Controllers/hamburguerController.js';
import pastelController from './Controllers/pastelController.js';


bebidaController.rotas(app);
estoqueController.rotas(app);
hamburguerController.rotas(app);
pastelController.rotas(app);

export default app;