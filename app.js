import mongoose from "mongoose";
const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING  ||'mongodb://127.0.0.1:27017/kaun-banega';
mongoose.connect(DB_CONNECTION_STRING);
import express from 'express';
import session from 'express-session';
import cors from 'cors'
import UserController from "./users/controller.js";
import BankController from "./bank/controller.js";
import ArticleController from "./articles/controller.js";

const app = express()
app.use(
    session({
        secret: "any string",
        resave: false,
        saveUninitialized: true,
    })
);
app.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000",
    })
);

app.use(express.json());
UserController(app)
BankController(app)
ArticleController(app)
app.listen(process.env.PORT || 4000);