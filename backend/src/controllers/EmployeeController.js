const EmployeeRepository = require("../repositories/EmployeeRepository");

const EmployeeController = {
    async index(req, res) {
        try {
            const { page, size } = req.query;

            const employees = await EmployeeRepository.findAll(page, size);

            return res.send(employees);
        } catch (err) {
            console.error(err);
            return res.status(500).send({ error: "Internal error 500" });
        }
    },
    async show(req, res) {
        try {
            const { id } = req.params;

            const foundEmployee = await EmployeeRepository.findById(id);
            if (!foundEmployee)
                return res.status(404).send({ error: "Employee not found" });

            return res.send(foundEmployee);
        } catch (err) {
            console.error(err);
            return res.status(500).send({ error: "Internal error 500" });
        }
    },
    async create(req, res) {
        try {
            const rawEmployee = req.body;

            const createdEmployee = await EmployeeRepository.create(rawEmployee);

            return res.status(201).send(createdEmployee);
        } catch (err) {
            console.error(err);
            return res.status(500).send({ error: "Internal error 500" });
        }
    },
    async update(req, res) {
        try {
            const { id } = req.params;
            const employee = req.body;

            const [affectedRows, updatedEmployee] = await EmployeeRepository.update(
                id,
                employee
            );

            if (!affectedRows)
                return res.status(400).send({ error: "Employee not updated." });

            return res.send(updatedEmployee);
        } catch (err) {
            console.error(err);
            return res.status(500).send({ error: "Internal error 500" });
        }
    },
    async remove(req, res) {
        try {
            const { id } = req.params;

            const removedEmployee = await EmployeeRepository.delete(id);

            if (removedEmployee === 0)
                return res.status(404).send({ error: "Employee not found" });

            return res.status(204).send();
        } catch (err) {
            console.error(err);
            return res.status(500).send({ error: "Internal error 500" });
        }
    },
};

module.exports = EmployeeController;
