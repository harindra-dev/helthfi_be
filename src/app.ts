import 'dotenv/config'
import express, { Application, NextFunction, Request, Response } from 'express';

const app: Application = express();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello")
})

app.listen(process.env.PORT || 8080, () => {
  console.log("Server is running");
})