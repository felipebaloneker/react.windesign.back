import express, {Request,Response, NextFunction} from 'express';
import 'reflect-metadata';
import dotenv from 'dotenv';
import { routes } from './routes';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT|| 3000;

import './database';

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// tratando errors

app.use(routes);

app.use((err:Error, request:Request, response:Response, next: NextFunction)=>{
    if(err instanceof Error){
        return response.status(400).json({
            error:err.message
        })
    }
    return response.status(500).json({
        status:'error',
        message:'Internal Server Error'
    }) 
})

app.listen(PORT,()=>{console.log('Server is running')});