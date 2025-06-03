import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
} from 'typeorm';
import { v4 } from 'uuid'; // Importa v4 de uuid para generar UUIDs

@Entity()
export class Cliente {
    @PrimaryGeneratedColumn(
        "uuid" // Cambiado a "uuid" para usar UUIDs como identificadores únicos
    )
    id: string = v4(); // Inicializa el ID con un UUID generado automáticamente

    @Column()
    nombre: string;

    @Column()
    apellido: string;

    @Column({ unique: true })
    email: string;

    @Column({ nullable: true })
    telefono: string;

    @Column({ nullable: true })
    direccion: string;

    @Column({ unique: true })
    cuit_cuil: string;

    @CreateDateColumn()
    fecha_alta: Date;
}