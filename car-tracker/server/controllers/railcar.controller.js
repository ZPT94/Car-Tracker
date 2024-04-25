import Railcar from '../models/railcar.model.js';

async function createRailcar(req, res) {
    try {
        const railcar = await Railcar.create(req.body);
        return res.status(200).json(railcar);
    } catch (error) {
        return res.status(400).json(error);
    }
}

async function getAllRailcars(req, res) {
    try {
        const allRailcars = await Railcar.find()
        return res.status(200).json(allRailcars);
    } catch (error) {
        return res.status(500).json(error);
    }
}

async function getOneRailcarById(req, res) {
    try {
        const id = req.params.id
        const railcar = await Railcar.findById(id)
        return res.status(200).json(railcar);
    } catch (error) {
        return res.status(500).json(error);
    }
}

async function deletById(req, res) {
    try {
        const id = req.params.id
        const response = await Railcar.findOneAndDelete({_id: id});
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json(error);
    }
}

async function updateRailcarById(req, res){
    try {
        const id = req.params.id
        const updateRailcar = await Railcar.findByIdAndUpdate(id, req.body, { runVaildators: true, new: true })
        return res.status(200).json(updateRailcar);
    } catch (error) {
        return res.status(500).json(error);
    }
}
    export {
        createRailcar,
        getAllRailcars,
        getOneRailcarById,
        deletById,
        updateRailcarById
    };

