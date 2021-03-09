const EmployeeTypeRepository = require("../repositories/EmployeeTypeRepository");

const EmployeeTypeController = {
    async index(req, res) {
        try {
            const { page, size } = req.query;

            const employeeTypes = await EmployeeTypeRepository.findAll(page, size);

            return res.send(employeeTypes);
        } catch (err) {
            console.error(err);
            return res.status(500).send({ error: "Internal error 500" });
        }
    },
    async show(req, res) {
        try {
            const { id } = req.params;

            const foundEmployeeType = await EmployeeTypeRepository.findById(id);
            if (!foundEmployeeType)
                return res.status(404).send({ error: "Employee Type not found" });

            return res.send(foundEmployeeType);
        } catch (err) {
            console.error(err);
            return res.status(500).send({ error: "Internal error 500" });
        }
    },
    async create(req, res) {
        try {
            const rawEmployeeType = req.body;

            const createdEmployeeType = await EmployeeTypeRepository.create(
                rawEmployeeType
            );

            return res.status(201).send(createdEmployeeType);
        } catch (err) {
            console.error(err);
            return res.status(500).send({ error: "Internal error 500" });
        }
    },
    async update(req, res) {
        try {
            const { id } = req.params;
            const employeeType = req.body;

            const [
                affectedRows,
                updatedEmployeeType,
            ] = await EmployeeTypeRepository.update(id, employeeType);

            if (!affectedRows)
                return res.status(400).send({ error: "Employee Type not updated." });

            return res.send(updatedEmployeeType);
        } catch (err) {
            console.error(err);
            return res.status(500).send({ error: "Internal error 500" });
        }
    },
    async remove(req, res) {
        try {
            const { id } = req.params;

            const removedEmployeeType = await EmployeeTypeRepository.delete(id);

            if (removedEmployeeType === 0)
                return res.status(404).send({ error: "Employee Type not found" });

            return res.status(204).send();
        } catch (err) {
            console.error(err);
            return res.status(500).send({ error: "Internal error 500" });
        }
    },
};

module.exports = EmployeeTypeController;
