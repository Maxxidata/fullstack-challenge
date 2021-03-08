const EmployeeTypeRepository = {
    async findAll() {
        console.log("EmployeeTypeRepository findAll");
    },
    async findById(id) {
        console.log("EmployeeTypeRepository findById");
    },
    async create(employeeType) {
        console.log("EmployeeTypeRepository create");
    },
    async update(employeeType) {
        console.log("EmployeeTypeRepository update");
    },
    async delete(id) {
        console.log("EmployeeTypeRepository delete");
    },
};

module.exports = EmployeeTypeRepository;
