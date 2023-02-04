const createError = require('http-errors');
const { isValidObjectId } = require('mongoose');
const Project = require('../database/models/project')

module.exports = {
    list: async (req, res) => {
        try {

            const projects = await Project.find().where('createdBy').equals(req.user)

            return res.status(200).json({
                ok: true,
                msg: "Lista de proyectos",
                projects: projects
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

            const { name, description, client } = req.body
            if ([name, description, client].includes('') || !name || !description || !client) {
                throw createError(400, 'Todos los campos son obligatorios')
            }
            if (!req.user) throw createError(401, 'Error de autenticación')

            const project = new Project(req.body)
            project.createdBy = req.user._id
            //console.log(project)
            const projectStore = await project.save()

            return res.status(201).json({
                ok: true,
                msg: "Proyecto guardado",
                project: projectStore
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

            const { id } = req.params
            if (!isValidObjectId(id)) throw createError(401, "No es un id válido")

            const project = await Project.findById(id)

            if (!project) throw createError(404, 'No se encontró el proyecto')
            if (req.user._id.toString() !== project.createdBy.toString()) throw createError(401, 'No tienes acceso a este proyecto')

            return res.status(200).json({
                ok: true,
                msg: "Detalle de proyecto.",
                project
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

            const { id } = req.params
            const { name, description, client, dataExpire } = req.body
            
            if (!isValidObjectId(id)) throw createError(401, "No es un id válido")

            const project = await Project.findById(id)

            if (!project) throw createError(404, 'No se encontró el proyecto')
            if (req.user._id.toString() !== project.createdBy.toString()) throw createError(401, 'No tienes acceso a este proyecto')

            project.name = name || project.name
            project.description = description || project.description
            project.client = client || project.client
            project.dataExpire = dataExpire ||  project.dataExpire

            const projectUpdated = await project.save()
            
            return res.status(201).json({
                ok: true,
                msg: "Proyecto actualizado",
                project: projectUpdated
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

            const { id } = req.params
            
            if (!isValidObjectId(id)) throw createError(401, "No es un id válido")

            const project = await Project.findById(id)

            if (!project) throw createError(404, 'No se encontró el proyecto')
            if (req.user._id.toString() !== project.createdBy.toString()) throw createError(401, 'No tienes acceso a este proyecto')

            await project.deleteOne()

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

    addCollaborator: async (req, res) => {
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

    removeCollaborator: async (req, res) => {
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
