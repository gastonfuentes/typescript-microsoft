"use strict";
var ContracStatus;
(function (ContracStatus) {
    ContracStatus[ContracStatus["Permanent"] = 1] = "Permanent";
    ContracStatus[ContracStatus["Temp"] = 2] = "Temp";
    ContracStatus[ContracStatus["Apprentice"] = 3] = "Apprentice";
})(ContracStatus || (ContracStatus = {}));
var employeeStatus = ContracStatus.Temp;
console.log(employeeStatus);
console.log(ContracStatus[employeeStatus]);
