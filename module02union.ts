// TIPOS DE UNION

let multiType: number | boolean;

multiType = 10;
multiType = false;

/* multiType = "algo"; //tira error */

function add(x: number | string, y: number | string) {
  if (typeof x === "number" && typeof y === "number") {
    return x + y;
  }
  if (typeof x === "string" && typeof y === "string") {
    return x.concat(y);
  }
  throw new Error("parametros no coinciden en su tipo");
}


console.log(add("uno", "dos"));
console.log(add(10, 5));
console.log(add("uno", 2));


