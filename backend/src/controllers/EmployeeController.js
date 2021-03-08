const EmployeeRepository = require("../repositories/EmployeeRepository");

const EmployeeController = {
    async index(req, res) {
        console.log("EmployeeController index");
        EmployeeRepository.findAll();
        res.send({});
    },
    async show(req, res) {
        console.log("EmployeeController show");
        EmployeeRepository.findById();
        res.send({});
    },
    async create(req, res) {
        console.log("EmployeeController create");
        EmployeeRepository.create();
        res.send({});
    },
    async update(req, res) {
        console.log("EmployeeController update");
        EmployeeRepository.update();
        res.send({});
    },
    async remove(req, res) {
        console.log("EmployeeController remove");
        EmployeeRepository.delete();
        res.send({});
    },
};

module.exports = EmployeeController;
