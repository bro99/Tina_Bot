const Client = require('../model/UserAdd')

module.exports = {
    // BUSCAR
    async index(req, res) {
        try {
            const message = await Client.find({},{"_id": false, "__v":false})
            return message
        } catch (error) {
            // return res.status(500).send({erro: error}) 
        }
    },

    // CRIAR
    async createUser(req, res) {
        // try {
            // const message = await Message.find()
            console.log(req.body)
           const newUser = new Client(req.body)
           newUser.save()
        // } catch (error) {
        //     res.redirect(`/treinamento`)
        // }
    }
    
}