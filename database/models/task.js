const mongoose = require('mongoose')


const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    descripton: {
        type: String,
        required: true,
        trim: true,
    },
    dataExpire: {
        type: Date,
        default: Date.now(),
    },
    state: {
        type: Boolean,
        default: false,
        required: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    priority: {
        type: String,
        enum: ['Baja', 'Media', 'Alta'],
        defaul: 'Baja'
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
    },

}, {
    timestamps: true
})


module.exports = mongoose.model('Task', taskSchema)