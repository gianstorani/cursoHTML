const student1 = {
    name: "Gian",
    surname: "Storani"
}
const student2 = {
    name: "Juan",
    surname: "Funes"
}

const arr = [student1, student2]

// console.log(arr)

const results = [];
// Gian
results.push(7);
// Juan
results.push(4);
// console.log(results)

// console.log(results.includes(4))

const ultElemento = arr.pop()
//console.log(ultElemento)
const prueba = [2,5,7,3,5,4,6,7,31,5,34]
// console.log(prueba.indexOf(31))
// console.log(prueba.reverse())

// console.log(prueba)

//pruebajoin = prueba.join()

//console.log(typeof pruebajoin)

// console.log(prueba)
// prueba.reverse()
// prueba.pop()
// prueba.reverse()
// console.log(prueba)
// 

const pruebasplice = ['Juan','Gian', 'Jose','Gabi']
// Nombre a eliminar
const name= 'Gabi'

//Logica
const findIndex = pruebasplice.indexOf(name)
pruebasplice.splice(findIndex)
console.log(pruebasplice)

