const EmployeeRepository = {
    async findAll() {
        console.log("EmployeeRepository findAll");
    },
    async findById(id) {
        console.log("EmployeeRepository findById");
    },
    async create(employee) {
        console.log("EmployeeRepository create");
    },
    async update(employee) {
        console.log("EmployeeRepository update");
    },
    async delete(id) {
        console.log("EmployeeRepository delete");
    },
};

module.exports = EmployeeRepository;
