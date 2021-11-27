const mgs = require("mongoose");
const {Schema} = require("mongoose");

const itemSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    quantidade: {
        type: Number,
        required: true
    },
    id_doador:  {
        type: String,
        required: true
    },
    id_produtor: {
        type: String,
        required: false
    },
    data_criado: {
        type: Date,
        default: Date.now
    }
})

module.exports=mgs.model("Item", itemSchema);