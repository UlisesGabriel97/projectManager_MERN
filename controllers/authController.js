const createError = require('http-errors');
const errorResponse = require('../helpers/errorResponse');
const User = require('../database/models/User');
const generateTokenRandom = require('../helpers/generateTokenRandom');
const generateJWT = require('../helpers/generateJWT');
const { confirmRegister, forgetPassword } = require('../helpers/sendMails');

module.exports = {
    register: async (req,res) => {
        try {

            const {name, email, password} = req.body;
            if ([name, email, password].includes('')) {
                throw createError(400,'Todos los campos son obligatorios')
            }

            let user = await User.findOne({
                email
            });
            if (user) {
                throw createError(400,"El email ya se encuentra registrado")
            }
            
            const token = generateTokenRandom()
            user = new User(req.body)
            user.token = token
            //console.log("User:",user);
            const userStore = await user.save()

            await confirmRegister({
                name: userStore.name,
                email: userStore.email,
                token: userStore.token,
            })

            return res.status(201).json({
                ok: true,
                msg: 'Se ha enviado un correo para confirmar su cuenta',
                user: userStore,
            })            
        } catch (error) {
            console.log(error)
            return errorResponse(res,error,"Register")
        }

    },
    login: async (req,res) => {
        const {email, password} = req.body
        try {
            if ([email, password].includes('')) {
                throw createError(400,'Todos los campos son obligatorios')
            };

            let user = await User.findOne({
                email
            });
            if (!user) {
                throw createError(403,"Credenciales inválidas | EMAIL")
            };
            if (!user.checked) {
                throw createError(403,"Tu cuenta no ha sido confirmada | EMAIL")
            };
            if (!await user.checkedPassword(password)) {
                throw createError(403,"Credenciales inválidas | PASSWORD")
            }
            



            return res.status(201).json({
                ok: true,
                msg: 'Usuario logueado',
                user: {
                    nombre: user.name,
                    email: user.email,
                    token: generateJWT({
                        id: user._id
                    })
                },
            })            
        } catch (error) {
            console.log(error)
            return errorResponse(res,error,"Login")
        }

    },
    checked: async (req,res) => {
        const {token} = req.body;   // http://localhost:4000/api/auth/checked?token=jkb43lhjkbkhj423ljh

        try {
            if (!token) {
                throw createError(400,"Token inexistente | TOKEN")
            };

            const user = await User.findOne({
                token
            });

            if (!user) {
                throw createError(400,"Token inválido | TOKEN")
            };

            user.checked = true;
            user.token = "";

            await user.save()

            return res.status(201).json({
                ok: true,
                msg: 'Registro completado exitosamente'
            })            
        } catch (error) {
            console.log(error)
            return errorResponse(res,error,"CHECKED")
        }

    },
    sendToken: async (req,res) => {
        const {email} = req.body;
        try {
            let user = await User.findOne({
                email
            });

            if (!user) throw createError(400,"Email registrado anteriormente");

            const token = generateTokenRandom()
            user.token = token;
            await user.save()

            await forgetPassword({
                name: user.name,
                email: user.email,
                token: user.token,
            })

            return res.status(200).json({
                ok: true,
                msg: 'Token enviado'
            })            
        } catch (error) {
            console.log(error)
            return errorResponse(res,error,"SEND-TOKEN")
        }
        
    },
    verifyToken: async (req,res) => {
        try {

            const {token} = req.query

            if (!token) throw createError(400, 'Debe ingresar el token')

            const user = await User.findOne({token})

            if (!user) throw createError(400, 'Token inválido')

            return res.status(200).json({
                ok: true,
                msg: 'Token verificado'
            })            
        } catch (error) {
            console.log(error)
            return errorResponse(res,error,"VERIFY-TOKEN")
        }

    },
    changePassword: async (req,res) => {
        try {

            const {token} = req.query;
            const {password} = req.body;

            if (!password) throw createError(400, 'La contraseña es obligatoria')

            const user = await User.findOne({token})

            user.password = password;
            user.token = '';
            await user.save()

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