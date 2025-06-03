import { DataSource } from 'typeorm';
import { Cliente } from '../entities/Cliente';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'Lucassbadino1', // Cambia esto por tu contraseña real
    database: 'estudio',
    synchronize: true, // solo en dev
    logging: false,
    entities: [Cliente], // después se agregan más
});