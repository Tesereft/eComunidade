const express = require("express");
const app = express();
const User = require("../schemas/userSchema");
const Item = require("../schemas/itemSchema");
const authMiddleware = require("../middleware/auth")

app.get("/donatedList", authMiddleware, (request,  response) => {
    Item.find({id_produtor: null}).then((res) => {
        response.send(res);
    }).catch((e) => {
        console.log(e)
        response.status(500).send(e);
    })
})

app.get("/myDonatedList", authMiddleware, (request, response) => {
    Item.find({id_produtor: request.userId}).then((res) => {
        response.send(res)
    }).catch((e) => {
        console.log(e)
        response.status(500).send(e);
    })
})

module.exports=app;