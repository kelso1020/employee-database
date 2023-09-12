const dbConnect = require("./connection");

class DB {
  constructor(dbConnect) {
    this.dbConnect = dbConnect;
  }

  listEmployees() {
    return this.dbConnect.promise().query(
      "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
    );
  }

  listManagers(employeeId) {
    return this.dbConnect.promise().query(
      "SELECT id, first_name, last_name FROM employee WHERE id != ?",
      employeeId
    );
  }

  createNewEmployee(employee) {
    return this.dbConnect.promise().query("INSERT INTO employee SET ?", employee);
  }

  removeEmployee(employeeId) {
    return this.dbConnect.promise().query(
      "DELETE FROM employee WHERE id = ?",
      employeeId
    );
  }

  updateRole(employeeId, roleId) {
    return this.dbConnect.promise().query(
      "UPDATE employee SET role_id = ? WHERE id = ?",
      [roleId, employeeId]
    );
  }

  updateEmployeeManager(employeeId, managerId) {
    return this.dbConnect.promise().query(
      "UPDATE employee SET manager_id = ? WHERE id = ?",
      [managerId, employeeId]
    );
  }

  listRoles() {
    return this.dbConnect.promise().query(
      "SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id;"
    );
  }

  createNewRole(role) {
    return this.dbConnect.promise().query("INSERT INTO role SET ?", role);
  }

  removeRole(roleId) {
    return this.dbConnect.promise().query("DELETE FROM role WHERE id = ?", roleId);
  }

  listDepts() {
    return this.dbConnect.promise().query(
      "SELECT department.id, department.name FROM department;"
    );
  }

  createNewDept(department) {
    return this.dbConnect.promise().query("INSERT INTO department SET ?", department);
  }

  removeDept(departmentId) {
    return this.dbConnect.promise().query(
      "DELETE FROM department WHERE id = ?",
      departmentId
    );
  }

  findEmployeeByDept(departmentId) {
    return this.dbConnect.promise().query(
      "SELECT employee.id, employee.first_name, employee.last_name, role.title FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department department on role.department_id = department.id WHERE department.id = ?;",
      departmentId
    );
  }

  findEmployeeByManager(managerId) {
    return this.dbConnect.promise().query(
      "SELECT employee.id, employee.first_name, employee.last_name, department.name AS department, role.title FROM employee LEFT JOIN role on role.id = employee.role_id LEFT JOIN department ON department.id = role.department_id WHERE manager_id = ?;",
      managerId
    );
  }
}

module.exports = new DB(dbConnect);
