const htmlRoutes = require("./routes/htmlRoutes")
const apiRoutes = require("./routes/apiRoutes")
const express = require("express")
const path = require('path');
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use("/api", apiRoutes)

app.use("/", htmlRoutes)

app.listen(PORT, () =>
    console.log(`Example app listening at http://localhost:${PORT}`)
);

