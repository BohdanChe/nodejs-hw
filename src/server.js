import express from 'express';
import cors from 'cors';    
import 'dotenv/config';
import pino from 'pino-http';
import {connectMongoDB} from './db/connectMongoDB.js'; 
import { notFoundHandler } from './middleware/notFoundHandler.js';  
import { errorHandler } from './middleware/errorHandler.js';
import notesRoutes from './routes/notesRoutes.js';


const app = express();
const PORT = process.env.PORT ?? 3000;


app.use(express.json());
app.use(cors()); 
app.use(
  pino({
    level: 'info',
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
        translateTime: 'HH:MM:ss',
        ignore: 'pid,hostname',
        messageFormat: '{req.method} {req.url} {res.statusCode} - {responseTime}ms',
        hideObject: true,
      },
    },
  }),
);


app.use(notesRoutes);



app.use(notFoundHandler);
app.use(errorHandler);

await connectMongoDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});