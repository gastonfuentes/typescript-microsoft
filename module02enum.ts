enum ContracStatus {
    Permanent = 1,
    Temp,
    Apprentice
}

let employeeStatus : ContracStatus = ContracStatus.Temp

console.log(employeeStatus)
console.log(ContracStatus[employeeStatus])