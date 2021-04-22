import { Request, Response } from "express";
import MessagesService from "../services/MessagesService";

export default class MessagesController{
    async create(request: Request, response: Response){

        const {user_id, admin_id, text} = request.body;

        const messagesService = new MessagesService();

        const message = await messagesService.create({user_id, admin_id, text});

        return response.json({
            message
        })
    }

    async showByUser(request: Request, response: Response){
        const {id} = request.params;

        const messageSevice = new MessagesService();

        const list  = await messageSevice.listByUser(id);

        return response.json({
            list
        })

    }
}