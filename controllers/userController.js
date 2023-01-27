module.exports = {
    profile: async (req,res) => {
        try {
            return res.status(201).json({
                ok: true,
                msg: 'Usuario registrado'
            })            
        } catch (error) {
            console.log(error)
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Hubo un error en REGISTER'
            })
        }

    },
}