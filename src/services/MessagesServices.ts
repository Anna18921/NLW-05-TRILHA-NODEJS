import { getCustomRepository, Repository } from "typeorm";
import { Message } from "../entities/Messages";
import MessagesRepository from "../repositories/MessagesRepository";

interface IMessagesService {
    admin_id?: string;
    user_id: string;
    text: string;
}
export default class MessagesService{
    private messagesRepository: Repository<Message>;

    constructor(){
        this.messagesRepository =  getCustomRepository(MessagesRepository);
    }

    async create({admin_id, user_id, text}: IMessagesService){

        const message = this.messagesRepository.create({admin_id, text, user_id});

       await this.messagesRepository.save(message);

       return message;

    }

    async listByUser(user_id: string){

        const list = this.messagesRepository.find({
            where: {user_id},
            relations: ["user"]
        });

        return list;
    }
}