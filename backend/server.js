import express from "express";
import cors from "cors";
import Router from "./routes/route.js";

const app = express();

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(Router);
app.listen(8080, () => console.log("Server Running, click to access 8080"));
