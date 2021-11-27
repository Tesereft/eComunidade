const express = require("express");
const mgs = require("mongoose");

const app = express();
app.use((express.urlencoded()));
app.use(express.json());

app.use(require("./routes/routes_post"));
app.use(require("./routes/routes_get"));

mgs.connect("mongodb+srv://GerardWay:m7CJ1hW0yRXvd8iw@server.udgdk.mongodb.net/eComunidade?retryWrites=true&w=majority")
    .then((res) => {
        app.listen(3333);
        console.log("Running on 3333");
    })
    .catch((e) => {
        console.log("Couldn't connect with database, verify your settings.")
    })
