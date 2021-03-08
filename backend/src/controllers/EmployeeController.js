const EmployeeController = {
    async index(req, res) {
        console.log("EmployeeController index");
        res.send({});
    },
    async show(req, res) {
        console.log("EmployeeController show");
        res.send({});
    },
    async create(req, res) {
        console.log("EmployeeController create");
        res.send({});
    },
    async update(req, res) {
        console.log("EmployeeController update");
        res.send({});
    },
    async remove(req, res) {
        console.log("EmployeeController remove");
        res.send({});
    },
};

module.exports = EmployeeController;
