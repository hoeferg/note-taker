const express = require("express")
const routes = require("./routes")
const path = require('path');
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(routes)

// app.use("/", htmlRoutes)

app.listen(PORT, () =>
    console.log(`Example app listening at http://localhost:${PORT}`)
);

