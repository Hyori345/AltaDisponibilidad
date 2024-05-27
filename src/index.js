require("dotenv").config();

const PORT = process.env.PORT
const express = require("express");
const app = express();
const productRoute = require("./Routes/product");
const userRoute = require("./Routes/user");

//midleware
app.use(express.json());
app.use("/api", userRoute);

app.get("/",(req, res) => {
    res.send("hola mundo")
});

require("./database");

app.listen(PORT, () => {
    console.log("server on port", PORT)
});

