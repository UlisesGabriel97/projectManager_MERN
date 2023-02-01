const nodemailer = require('nodemailer')


const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  });

module.exports = {
    confirmRegister: async (data) => {

        const {name, email, token} = data

        try {
            await transport.sendMail({
                from: 'Project Manager <ugmendez97@gmail.com>',
                to: email,
                subject: '¡Confirmá tu cuenta!',
                text: 'Confirmá tu cuenta de Projetc Manager',
                html: `
                <p> Hola ${name}! Para confirmar tu cuenta haz click en el siguiente enlace </p>
                <a href="${process.env.URL_FRONT}/confirm/${token}"> Confirmá tu cuenta </a>`
            })
            
        } catch (error) {
            console.log(error);
        }

    },
    forgetPassword: async (data) => {

        const {name, email, token} = data

        try {
            await transport.sendMail({
                from: 'Project Manager <ugmendez97@gmail.com>',
                to: email,
                subject: '¡Reestablecé tu contraseña!',
                text: 'Reestablecé tu contraseña de Projetc Manager',
                html: `
                <p> Hola ${name}! Para reestablecer tu contraseña haz click en el siguiente enlace </p>
                <a href="${process.env.URL_FRONT}/recover-password/${token}"> Reestablecer contraseña </a>`
            })
            
        } catch (error) {
            console.log(error);
        }

    }
}