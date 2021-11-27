const mgs = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mgs.Schema({
    nome: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    comentario: {
        type: String,
        required: false
    },
    telefone: {
        type: String,
        required: true,
        unique: true
    },
    senha: {
        type: String,
        required: true,
        select: false
    },
    data_criado: {
        type: Date,
        default: Date.now
    }
});

userSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.senha, 10);
    this.senha = hash;

    next();
});
module.exports=mgs.model("User", userSchema);