const person = {
    name: "Gian",
    surname: "Storani",
    age: "86"
}

const edadalcohol = 18
const edadjubilado = 65

if (person.age < edadalcohol){
    console.log("No se le puede vender alcohol")
}
else if (person.age < edadjubilado){
    console.log("Se le puede vender alcohol")
}
else{
    console.log("Se le vende con descuento de jubilado")
}