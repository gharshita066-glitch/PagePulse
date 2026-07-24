const express = require("express");
const cors = require("cors");

const auditRoutes = require("./routes/audit");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("🚀 Page Pulse Backend is Running!");
});

app.use("/audit", auditRoutes);

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}

module.exports = app;



