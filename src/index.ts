import 'reflect-metadata';
import express from 'express';
import { AppDataSource } from './config/data-source';

const app = express();
app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    console.log('📦 DB conectada');

    app.listen(3000, () => {
      console.log('🚀 Servidor corriendo en http://localhost:3000');
    });
  })
  .catch((err) => console.error('❌ Error al conectar DB:', err));