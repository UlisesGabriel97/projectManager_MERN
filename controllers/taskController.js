module.exports = {
    list: async (req,res) => {
        try {
            return res.status(200).json({
                ok: true,
                msg: 'Lista de tareas'
            })            
        } catch (error) {
            console.log(error)
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Hubo un error al listar las tareas'
            })
        }

    },
    store: async (req,res) => {
        try {
            return res.status(201).json({
                ok: true,
                msg: 'Tarea guardada'
            })            
        } catch (error) {
            console.log(error)
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Hubo un error al crear la tarea'
            })
        }

    },
    detail: async (req,res) => {
        try {
            return res.status(200).json({
                ok: true,
                msg: 'Detalle de la tarea'
            })            
        } catch (error) {
            console.log(error)
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Hubo un error al acceder al detalle de la tarea'
            })
        }

    },
    update: async (req,res) => {
        try {
            return res.status(201).json({
                ok: true,
                msg: 'tarea actualizada'
            })            
        } catch (error) {
            console.log(error)
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Hubo un error al actualizar la tarea'
            })
        }

    },
    remove: async (req,res) => {
        try {
            return res.status(201).json({
                ok: true,
                msg: 'Tarea eliminada'
            })            
        } catch (error) {
            console.log(error)
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Hubo un error al eliminar la tarea'
            })
        }

    },
    changeState: async (req,res) => {
        try {
            return res.status(201).json({
                ok: true,
                msg: 'Estado actualizado'
            })            
        } catch (error) {
            console.log(error)
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || 'Hubo un error al actualizar el estado de la tarea'
            })
        }

    },
}