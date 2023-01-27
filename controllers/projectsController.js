module.exports = {
    list: async (req, res) => {
        try {
            return res.status(200).json({
                ok: true,
                msg: "Lista de proyectos",
            });
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || "Error! Problemas al listar los proyectos",
            });
        }
    },

    store: async (req, res) => {
        try {
            return res.status(201).json({
                ok: true,
                msg: "Proyecto guardado",
            });
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || "Error! Problemas para crear el proyecto",
            });
        }
    },

    detail: async (req, res) => {
        try {
            return res.status(200).json({
                ok: true,
                msg: "Detalle de proyecto.",
            });
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || "Error! Problemas al acceder al detalle del proyecto",
            });
        }
    },

    update: async (req, res) => {
        try {
            return res.status(201).json({
                ok: true,
                msg: "Proyecto actualizado",
            });
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || "Error! Problemas al actualizar el proyecto",
            });
        }
    },

    remove: async (req, res) => {
        try {
            return res.status(201).json({
                ok: true,
                msg: "Proyecto eliminado",
            });
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || "Error! Problemas al eliminar el proyecto",
            });
        }
    },

    addCollaborator : async (req, res) => {
        try {
            return res.status(201).json({
                ok: true,
                msg: "Colaborador agregado con exito",
            });
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || "Error! Problemas al agregar colaborador",
            });
        }
    },

    removeCollaborator : async (req, res) => {
        try {
            return res.status(201).json({
                ok: true,
                msg: "Colaborador eliminado con exito",
            });
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || "Error! Problemas al eliminar colaborador",
            });
        }
    },


};
