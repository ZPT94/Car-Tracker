import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/mongoose.config.js';
import railcarRoutes from './routes/railcar.routes.js';
const app = express();
app.use(express.json(), cors({origin: 'http://localhost:5173'}));
app.use("/api", railcarRoutes);
dotenv.config();
const PORT = process.env.PORT;
dbConnect();
app.listen(PORT, () =>
    console.log(`Listening on port: ${PORT}`)
);

