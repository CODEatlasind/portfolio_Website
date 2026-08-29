import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use((req, _res, next) => {console.log(`${req.method} ${req.url}`); 
next();
});
const port = Number(process.env.PORT) || 5000; // Accepts port number as string so conversion is needed to number type

app.get("/api/health", (_req, res) => {  // _req is used to indicate that the request parameter is intentionally unused
    res.json({ 
        status: "ok", 
        message: "Backend is running" });
});

app.listen(port, () => {
    console.log(`Backend running on http://localhost:${port}`);
});