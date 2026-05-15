const express = require("express");

const path = require("path");

const app = express();

const PORT = 3000;

/* STATIC FILES */

app.use(express.static(__dirname));

/* HOME ROUTE */

app.get("/", (req, res) => {

    res.sendFile(path.join(__dirname, "index.html"));

});

/* START SERVER */

app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});