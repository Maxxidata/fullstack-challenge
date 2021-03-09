const { sequelize } = require("../models/");
const Employee = require("../models/Employee")(sequelize);

const EmployeeRepository = {
    async findAll(page = 1, size = 25) {
        try {
            const offset = (page - 1) * size;
            const limit = size;
            return await Employee.findAll({ offset, limit });
        } catch (err) {
            console.error(err);
        }
    },
    async findById(id) {
        try {
            return await Employee.findByPk(id);
        } catch (err) {
            console.error(err);
        }
    },
    async create(employee) {
        try {
            return await Employee.create(employee);
        } catch (err) {
            console.error(err);
        }
    },
    async update(id, employee) {
        try {
            return await Employee.update(employee, {
                where: { id },
                returning: true,
            });
        } catch (err) {
            console.error(err);
        }
    },
    async delete(id) {
        try {
            return await Employee.destroy({
                where: { id },
            });
        } catch (err) {
            console.error(err);
        }
    },
};

module.exports = EmployeeRepository;
