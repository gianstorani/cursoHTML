//Booleanos

// const person = {
//     name: 'Gian',
//     surname: 'Storani',
//     active: false
// }

// if (person.active) {
//     console.log("La cuenta esta activa")
// } else {
//     console.log('La cuenta no esta activa')
// }

//Operadores de igualdad

// == comparacion de valor
// = asignar
// === comparacion de tipo y valor 
// > mayor
// >= mayor o igual
// < menor 
// <= menor o igual


//Operadores logicos

const person = {
    name: 'Gian',
    surname: 'Storani',
    active: true,
    age: 26,
    height: 1.9
}

//vamos a dejar pasar personas que midan +1.7 o sean menores de 25

if (person.height > 1.7 || person.age < 25){
    console.log('Puede entrar')
} else{
    console.log('No puede entrar')
}

if (person.height > 1.7 && person.age < 25){
    console.log('Puede entrar')
} else{
    console.log('No puede entrar')
}