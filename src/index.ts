import 'reflect-metadata';
import express from 'express';
import { AppDataSource } from './config/data-source';
import routerClients from './rutes/client.routes';

const app = express();
app.use(express.json());
app.use(routerClients);

AppDataSource.initialize()
  .then(() => {
    console.log('📦 DB conectada');

    app.listen(3000, () => {
      console.log('🚀 Servidor corriendo en http://localhost:3000');
    });
  })
  .catch((err) => console.error('❌ Error al conectar DB:', err));