import { Request, Response } from "express";
import { Cliente } from "../entities/Cliente";
import { AppDataSource } from "../config/data-source";
const clientRepository = AppDataSource.getRepository(Cliente);

export const getClientsService = async () => {
    try {
        const clients = await clientRepository.find();
        return clients;
    } catch (error) {
        console.error("Error fetching clients:", error);
        return { error: "Error fetching clients" };
    }
}

export const getClientsServiceById = async (id: string) => {
    try {
        const client = await clientRepository.findOneBy({ id });
        return client;
    } catch (error) {
        console.error("Error fetching client by ID:", error);
        return { error: "Error fetching client" };
    }
}

export const createClientService = async (clientData: Partial<Cliente>) => {
    try {
        const newClient = clientRepository.create(clientData);
        await clientRepository.save(newClient);
        return newClient;
    } catch (error) {
        console.error("Error creating client:", error);
        return { error: "Error creating client" };
    }
}