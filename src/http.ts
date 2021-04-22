import express from 'express';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import path from 'path';

import "./database";
import { routes } from './routes';


const app  = express();

const pathFolderPublic = path.join(__dirname, "..", "public");

app.use(express.static(pathFolderPublic));
app.set("views", pathFolderPublic );
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");


app.get("/pages/client", (request, response)=>{
    return response.render("html/client.html");
})


const http = createServer(app); /*create http protocol*/

const io = new Server(http); /*create websocket protocol*/

app.use(express.json());

app.use(routes);

export {http, io};