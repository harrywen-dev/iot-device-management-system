const express = require("express");
require("dotenv").config();

const pool = require("./db/pool");
const deviceRoutes = require("./routes/devices");

const app = express();

const PORT = process.env.PORT || 3000;


// Parse JSON request body
app.use(express.json());


// Health check
app.get("/api/health", async (req, res) => {
    try {
        const result = await pool.query("SELECT NOW()");

        res.status(200).json({
            status: "ok",
            database: "connected",
            time: result.rows[0].now,
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            status: "error",
            database: "disconnected",
        });
    }
});


// Device routes
app.use("/api/devices", deviceRoutes);


// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});