//Funciones


//Named functions

function avg(avgArr) {
    if (avgArr.length<= 0){
        return 'Hubo un error'
    }
    const arr = avgArr
    let suma = 0

    for (let i = 0; i <arr.length; i++) {
        suma = suma + arr[i]
    }

    return suma / arr.length    
}

const arr = [0,10]
console.log(avg(arr))
console.log(avg([0,2,5,6,9,8,9,9]))


//Arrow functions

const test3 = () => {
    return('Soy test 3')
}

const test = test3()
console.log(test)