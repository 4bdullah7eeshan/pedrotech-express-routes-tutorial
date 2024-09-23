const { Router } = require("express");

const commentRouters = Router();

commentRouters.get("/", (req, res) => {
    res.send({ data: "Data" });
});

commentRouters.post("/", (req, res) => {
    res.send({ data: "Data" });
});

commentRouters.put("/", (req, res) => {
    res.send({ data: "Data" });
});

commentRouters.delete("/", (req, res) => {
    res.send({ data: "Data" });
});


module.exports = commentRouters;