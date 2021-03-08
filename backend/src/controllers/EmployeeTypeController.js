const EmployeeTypeRepository = require("../repositories/EmployeeTypeRepository");

const EmployeeTypeController = {
    async index(req, res) {
        console.log("EmployeeTypeController index");
        EmployeeTypeRepository.findAll();
        res.send({});
    },
    async show(req, res) {
        console.log("EmployeeTypeController show");
        EmployeeTypeRepository.findById();
        res.send({});
    },
    async create(req, res) {
        console.log("EmployeeTypeController create");
        EmployeeTypeRepository.create();
        res.send({});
    },
    async update(req, res) {
        console.log("EmployeeTypeController update");
        EmployeeTypeRepository.update();
        res.send({});
    },
    async remove(req, res) {
        console.log("EmployeeTypeController remove");
        EmployeeTypeRepository.delete();
        res.send({});
    },
};

module.exports = EmployeeTypeController;
