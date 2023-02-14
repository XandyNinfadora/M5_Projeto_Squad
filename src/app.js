import express from 'express';

const app = express();

app.use(express.json());


import sugestaoController from './Controllers/sugestaoController.js';
import filialController from './Controllers/filialController.js';


filialController.rotas(app);
sugestaoController.rotas(app);

export default app;