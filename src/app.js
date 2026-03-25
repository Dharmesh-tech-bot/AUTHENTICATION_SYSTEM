import express from 'express'
import morgan from 'morgan'

const app = express();

app.use(express.json()); //middleware
app.use(morgan("dev")); //dev mode for methods,status code,api hit etc.


export default app;  
