const { Router } = require("express");

const userRouters = Router();

userRouters.get("/", (req, res) => {
    res.send({ data: "Data" });
});

userRouters.post("/", (req, res) => {
    res.send({ data: "Data" });
});

userRouters.put("/", (req, res) => {
    res.send({ data: "Data" });
});

userRouters.delete("/", (req, res) => {
    res.send({ data: "Data" });
});

module.exports = userRouters;