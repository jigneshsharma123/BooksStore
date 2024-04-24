import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();

app.use(cors({
    origin : ["https://books-store-frontend-blush.vercel.app"],
    methods : ["POST", "GET"],
    credentials : true,
}));
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = "mongodb+srv://jigneshsharma9868:2K2sJC3pSWgHNor8@bookstore.vefqnsi.mongodb.net/?retryWrites=true&w=majority&appName=BookStore";

// connect to mongoDB
try {
    mongoose.connect(URI, {
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
