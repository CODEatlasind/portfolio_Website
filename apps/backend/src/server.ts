import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {console.log(`${req.method} ${req.url}`); 
next();
});

app.get("/api/health", (_req, res) => {  // _req is used to indicate that the request parameter is intentionally unused
    res.json({ 
        status: "ok", 
        message: "Backend is running" });
});

app.listen(port, () => {
    console.log(`Backend running on http://localhost:${port}`);
});