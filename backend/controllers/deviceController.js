const pool = require("../db/pool");

const getAllDevices = async (req, res) => {
    try {
        const result = await pool.query(
            "SELECT * FROM devices ORDER BY id"
        );

        res.status(200).json(result.rows);
    } catch (error) {
        console.error("Error fetching devices:", error);

        res.status(500).json({
            message: "Internal server error",
        });
    }
};

module.exports = {
    getAllDevices,
};