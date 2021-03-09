const { sequelize } = require("../models/");
const EmployeeType = require("../models/EmployeeType")(sequelize);

const EmployeeTypeRepository = {
    async findAll(page = 1, size = 25) {
        try {
            const offset = (page - 1) * size;
            const limit = size;
            return await EmployeeType.findAll({ offset, limit });
        } catch (err) {
            console.error(err);
        }
    },
    async findById(id) {
        try {
            return await EmployeeType.findByPk(id);
        } catch (err) {
            console.error(err);
        }
    },
    async create(employeeType) {
        try {
            return await EmployeeType.create(employeeType);
        } catch (err) {
            console.error(err);
        }
    },
    async update(id, employeeType) {
        try {
            return await EmployeeType.update(employeeType, {
                where: { id },
                returning: true,
            });
        } catch (err) {
            console.error(err);
        }
    },
    async delete(id) {
        try {
            return await EmployeeType.destroy({
                where: { id },
            });
        } catch (err) {
            console.error(err);
        }
    },
};

module.exports = EmployeeTypeRepository;
