import express, {Request,  Response} from "express";
import dotenv from "dotenv";
import { request } from "http";

dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.get('/', (request: Request, response: Response) => {
    response.status(200).send('Hello miau!');
})

app.listen(PORT, () => {
    console.log(`Console running on ${PORT}`);
    console.log(`Open http://localhost:${PORT}/`);
})