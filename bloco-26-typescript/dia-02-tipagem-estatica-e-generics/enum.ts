enum StudentStatus {
  Active = 1,
  Inactive,
  Paused
}

let newStudentStatus: StudentStatus = StudentStatus.Inactive; // referenciamos um enum usando EnumName.Value
console.log(newStudentStatus); // saída: 2

enum StatusCodes {
  OK = 200,
  BadRequest = 400,
  Unauthorized,
  PaymentRequired,
  Forbidden,
  NotFound,
}

const ok = StatusCodes.OK;
const indiceOk = StatusCodes["OK"];
const stringBadRequest = StatusCodes[400];

console.log(ok); // saíida: 200
console.log(indiceOk); // saída: 200
console.log(stringBadRequest); // saída: BadRequest

// Podem ser de tipos diferentes, sendo string o mais comum.
enum directionsGamePad {
  UP = "UP",
  D0WN = "DOWN",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}
