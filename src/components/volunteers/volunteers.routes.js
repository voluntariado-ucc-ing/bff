const express = require('express');
const volunteerController = require('./volunteers.controller');

const api = express.Router();

api.get("/get/:id", volunteerController.get)
api.get("/get", volunteerController.getByUsername)
api.get("/all", volunteerController.getAllVolunteers)
api.get("/medical_info/:volunteer_id", volunteerController.getMedicalInfo)

api.post("/create", volunteerController.create)
api.post("/import", volunteerController.importCsv)
api.post("/medical_info/:volunteer_id", volunteerController.setMedicalInfo)

api.put("/update/:id", volunteerController.update)
api.put("/auth/update", volunteerController.updatePassword)

api.delete("/delete/:id", volunteerController.delete)


module.exports = api;