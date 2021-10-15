//cosas que se anadieron a en emascript 6


//parametros por defecto
//Default Params

//antes de es6
function newFunction(name,age,country){
    //es igual a name o por defecto oscar
    var name =name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name,age,country)
}

//es6
function newFunction2(name = "oscar",age = 32 ,country = 'MX'){
    console.log(name,age,country)
}

newFunction2()
newFunction2('adrian','23','CO')



// CONCATENACION     
// permite separar o unir varios elementos

//antes de es6
let hello = "hello";
let world = "world";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// con es6 es6

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);


//MULTILINEA

//antes de es6 
let lorem = "Frase epica  \n otra frase epica"

//con es6 
let lorem2 = `otra frase epica
asdsadasdasdsdasdas
`
console.log(lorem)
console.log(lorem2)

//DESESTRUCTURACION 

//antes de es6 
let person = {
    'name' : 'oscar',
    'age' : '32',
    'country': 'MX'
}
console.log(person.name, person.age)

// con es6 
let {name,age} = person;
console.log(name,age)


//OPERADOR DE PROPAGACION 

//con es6
let team1 = ['oscar', 'julian', 'ricardo']
let team2 = ['odsf', 'dfsdf', 'sdfdsf']

let education = ['David', ...team1, ...team2]

console.log(education)

 
//VARIABLES
{
    var global = 'global '
}
{
    let globallet = 'global let'
    console.log(globallet)
}

console.log(global)


//OBJETOS

let name = 'Adrian'
let age = 32;

//creamos objeto antes de es6
obj = { name: name , age: age };

//objeto despues de es6
obj2 = { name, age };
console.log(obj)
console.log(obj2)

//----------------------------------------------------------------
//ARROW FUNCTIONS/ funciones anonimas

//antes de es6
const names = [
    {name: 'Adrian', age: 28},
    {name: 'Yesica', age: 27},
]

let listOfNames = names.map(function(item) {
    console.log(item.name)
})

//despues de es6     
// => establece que es una funcion anonima
let listOfNames2 = names.map(item => console.log(item.name));


const listOfNames3 = (name,age,country) => {
    console.log(item.name)
}

const listOfNames4 = name => {
    console.log(item.name)
}

// una funcion que recibe un numero y genera el numero elevado al cuadrado
const square = num => num * num

//----------------------------------------------------------------
// PROMESAS -- ASINCRONISMO 
// js no es ASINCRONISMO, porque no efectua varios nodos
// promesas es el algo va a pasar 

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true){
            resolve('HEY')
        }else {
            reject('ups')
        }
    })
}

helloPromise()
    .then((response => console.log(response) ))
    .catch((err) => console.log(err))


//--------------------------------
//PROGRAMACION ORIENTADA A OBJETOS
//clase y constructor
class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }

}

const calc = new calculator();
console.log(calc.sum(2,2))

//-------------------------------------------------------------------------
//SEPARAR EN MODULOS

import {hello} from './module'
console.log(hello())

//-------------------------------------------------------------------------
//GENERATOR  generadores

function * helloWorld() {
    if(true){
        yield 'Hello, ';
    }
    if(true){
        yield 'World';
    }
}
const generatorHello = helloWorld();
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)