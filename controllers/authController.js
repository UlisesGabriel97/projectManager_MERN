module.exports = {
    register: async (req,res) => {
        try {

            const {name, email, password} = req.body;
            if ([name, email, password].includes('')) {
                let error = new Error('Todos los campos son obligatorios')
                error.status = 400;
                throw error
            }

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
    login: async (req,res) => {
        try {
            return res.status(201).json({
                ok: true,
                msg: 'Usuario logueado'
            })            
        } catch (error) {
            console.log(error)
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Hubo un error en LOGIN'
            })
        }

    },
    checked: async (req,res) => {
        try {
            return res.status(201).json({
                ok: true,
                msg: 'Usuario checkeado'
            })            
        } catch (error) {
            console.log(error)
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Hubo un error en CHECKED'
            })
        }

    },
    sendToken: async (req,res) => {
        try {
            return res.status(200).json({
                ok: true,
                msg: 'Token enviado'
            })            
        } catch (error) {
            console.log(error)
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Hubo un error en SEND-TOKEN'
            })
        }
        
    },
    verifyToken: async (req,res) => {
        try {
            return res.status(200).json({
                ok: true,
                msg: 'Token verificado'
            })            
        } catch (error) {
            console.log(error)
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Hubo un error en VERIFY-TOKEN'
            })
        }

    },
    changePassword: async (req,res) => {
        try {
            return res.status(200).json({
                ok: true,
                msg: 'Password actualizado'
            })            
        } catch (error) {
            console.log(error)
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Hubo un error en CHANGE-PASSWORD'
            })
        }

    },
}