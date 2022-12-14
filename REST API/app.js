const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const routes = require("./routes");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/events", routes.api.events);

app.use((_, res) => {
    res.status(404).json({ message: "Not found" });
});

app.use((err, _, res, __) => {
    const { status = 500, message = "Server error", description } = err;
    res.status(status).json({ message, description });
});

module.exports = app;
