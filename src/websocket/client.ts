import { io } from "../http";
import ConnectionsService from "../services/ConnectionsService";
import UsersService from "../services/UsersService";
import MessagesService from "../services/MessagesService";

interface IParams  {
    email: string;
    text: string;
}
io.on("connect", (socket)=>{
    const connectionsService  = new ConnectionsService();
    const usersServices  = new UsersService();
    const messagesServices  = new MessagesService();
    

    socket.on("client_first_access", async (params)=>{
        const socket_id = socket.id;
        
        const {email, text} = params as IParams;
        let user_id = null;

        const userExits = await usersServices.findByEmail(email);

        if (!userExits){
            const user = await usersServices.create(email);
            await connectionsService.create({
                socket_id, 
                user_id: user.id, 
     
            });
            user_id = user.id;
        }else {
            user_id = userExits.id;
            const connection = await connectionsService.findByUserId(user_id);

            if (!connection){
                await connectionsService.create({
                    socket_id, 
                    user_id: user_id, 
        
                }); 
            }else{
                connection.socket_id = socket.id;

                await connectionsService.create(connection);
            }
            
        }

        await messagesServices.create({
            user_id,
            text
        });
        
        const allMessages = await messagesServices.listByUser(user_id);

        socket.emit("client_list_all_messages", allMessages)

        const allUsers = await connectionsService.listFindAllwithoutAdmin();

        io.emit("admin_list_all_users", allUsers);
       
    });   

    socket.on("client_send_to_admin", async params =>{
        const {text, socket_admin_id} = params;

        const socket_id = socket.id;

        const {user_id} = await connectionsService.findBySocketID(socket_id);

        const message = await messagesServices.create({text, user_id});

        io.to(socket_admin_id).emit("admin_receive_message", {
            message, 
            socket_id
        })
    });
});