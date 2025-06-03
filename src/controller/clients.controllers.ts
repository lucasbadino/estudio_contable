import { Request, Response } from "express";
import { createClientService, getClientsService, getClientsServiceById } from "../services/clients.services";



export const getClients = async (req: Request, res: Response) => {
    try {
        const clients = await getClientsService();
        res.status(200).json(clients);
    } catch (error) {
        console.error("Error in getClients controller:", error);
        res.status(500).json({ error: "Error fetching clients" });
    }
}

export const getClientById = async (req: Request, res: Response) : Promise<any> => {
    const { id } = req.params;
    try {
        const client = await getClientsServiceById(id);
        if (!client) {
            return res.status(404).json({ error: "Client not found" });
        }
        res.status(200).json(client);
    } catch (error) {
        console.error("Error in getClientById controller:", error);
        res.status(500).json({ error: "Error fetching client" });
    }
}

export const createClient = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        const newClient = await createClientService(body);
        res.status(201).json(newClient);
    } catch (error) {
        console.error("Error in createClient controller:", error);
        res.status(500).json({ error: "Error creating client" });
    }
}
