import { Router } from "express";
import { createClient, getClientById, getClients } from "../controller/clients.controllers";

const routerClients = Router();

routerClients.get("/", getClients);
routerClients.get("/:id", getClientById)
routerClients.post("/", createClient);

export default routerClients;
