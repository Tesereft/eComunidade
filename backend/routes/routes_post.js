const express = require("express");
const app = express();
const User = require("../schemas/userSchema");
const Item = require("../schemas/itemSchema");
const bcrypt = require("bcrypt");
const generateToken = require("../controller/authController")
const authMiddleware = require("../middleware/auth")
const {request, response} = require("express");


app.post("/createUser", (request, response) => {
    const item = request.body;
    User.create(item).then((res) => {
        console.log(res)
        response.status(201).send(res);
    }).catch((e) => {
        console.log(e)
        response.status(500).send(e);
    });
})

app.post("/login", async (request, response) => {
   const {telefone, senha} = request.body;

  User.findOne({"telefone": telefone}).select("+senha").then(async (res) => {
      if(!await bcrypt.compare(senha, res.senha)){
          response.status(500).send("Credenciais incorretas")
      }
      response.send({user: res, token: generateToken({id: res._id})});
  }).catch((e) => {
      console.log(e)
      response.status(404).send("Telefone inexistente")
  })
});

app.post("/profile", authMiddleware, (request, response) => {
    User.findByIdAndUpdate(request.userId, request.body).then((res) => {
        response.send("Success!")
    }).catch((e) => {
        console.log(e)
        response.status(500).send(e);
    });
})

app.post("/createItem", authMiddleware, (request, response) => {
  const produto = request.body;
  produto.id_doador = request.userId;
  Item.create(produto).then((res) => {
      console.log(res);
      response.send("Item successfully created!")
  }).catch((e) => {
      console.log(e)
      response.status(500).send(e);
  })
})

module.exports=app;