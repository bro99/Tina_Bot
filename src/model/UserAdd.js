const mongoose = require('mongoose')

const ClientSchema = new mongoose.Schema(
    {
        mensagem: {
            type: String,
        }
    }
)
module.exports = mongoose.model('clientes qualificados', ClientSchema)