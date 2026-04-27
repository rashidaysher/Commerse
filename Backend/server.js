import dns from "node:dns/promises";
dns.setServers(["1.1.1.1", "1.0.0.1"]);

import express from "express";
import dotenv from "dotenv";
import productRoutes from "./Routes/product.route.js"
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/products", productRoutes);

app.listen(5000, () => {
    connectDB();
    console.log("server started at http://localhost:5000 ");
});



