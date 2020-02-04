'use strict'

var Project = require('../models/project');

var controller = {
    home: function(req, res){
        return res.status(200).send({
            message: "Soy home"
        });
    },
    test: function(req, res){
        return res.status(200).send({
            message: "Soy el metodo o accion test del controlador de project"
        });
    },
    saveProject: function(req, res){
        var project = new Project();

        var params = req.body;
        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image = null;

        // Guardar enla BD
        project.save((err, projectStored) => {
            if(err) return res.status(500).send({message: 'Error al guardar'});

            if(!projectStored) return res.status(404).send({message: 'No se ha podido guardar el proyecto'});

            return res.status(200).send({project: projectStored});
        });

        /* return res.status(200).send({
            project,
            message: "Metodo saveProject"
        }); */
    },
    getProject: function(req, res){
        var projectId = req.params.id;
        if(projectId == null) return res.status(404).send({message: 'El proyecto no existe'});

        Project.findById(projectId, (err, project) => {
            if(err) return res.status(500).send({message: 'Error al devolver los datos'});

            if(!project) return res.status(404).send({message: 'El proyecto no existe'});

            return res.status(200).send({project});
        });
    },
    getProjects: function(req, res){
        /* Project.find({}).exec((err, projects) => {
            if(err) return res.status(500).send({message: 'Error al devolver los datos'});

            if(!projects) return res.status(404).send({message: 'No hay projectos para mostrar'});

            return res.status(200).send({projects});
        }); */
        Project.find({}).sort('-year').exec((err, projects) => {
            if(err) return res.status(500).send({message: 'Error al devolver los datos'});

            if(!projects) return res.status(404).send({message: 'No hay projectos para mostrar'});

            return res.status(200).send({projects});
        });
    },
    updateProject: function(req, res){
        var projectId = req.params.id;
        var update = req.body;
        Project.findByIdAndUpdate(projectId, update, {new:true}, (err, projectUpdated) => {
            if(err) return res.status(500).send({message: 'Error al actualizar'});

            if(!projectUpdated) return res.status(404).send({message: 'No existe el proyecto apra actualizar'});

            return res.status(200).send({
                project: projectUpdated
            });
        });
    },
    deleteProject: function(req, res){
        var projectId = req.params.id;
        Project.findByIdAndRemove(projectId, (err, projectRemoved) => {
            if(err) return res.status(500).send({message: 'No se ha podido borrar el proyecto'});

            if(!projectRemoved) return res.status(404).send({message: 'No se puede eliminar ese proyecto'});

            return res.status(200).send({
                project: projectRemoved
            });
        });
    },
    uploadImage: function(req, res){
        var projectId = req.params.id;
        var fileName = 'Imagen no subida...';
        if(req.files){
            // console.log(req.files);
            return res.status(200).send({
                files: req.files
            });
        } else{
            return res.status(200).send({
                message: fileName
            });
        }
    }
};

module.exports = controller;