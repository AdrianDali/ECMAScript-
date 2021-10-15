//Array.prototype.flat(nivel_de_profundidad): 
//un nuevo método que nos permite aplanar arreglos.

let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(1))
//[ 1, 2, 3, 1, 2, 3, [ 1, 2, 3 ] ]
console.log(array.flat(2))
/**
 * [
    1, 2, 3, 1, 2,
    3, 1, 2, 3
   ]
 */
//----------------------------------------------------------------
//Array.prototype.flatMap() lo mismo que flat con el beneficio de que primero manipular la data para luego poder aplanar.

let array = [1,2,3,4,5];

console.log(array.flatMap(value => [ value * 2]))
//[ 2, 4, 6, 8, 10 ]

//-------------------------------
//String.prototype.trimStart() | String.prototype.trimEnd() permite quitar los espacios al inicio o al final dependiendo de la funciona.

let hello = '                 hello World';
console.log(hello);
console.log(hello.trimStart());

let hello2 = '  hello World         ' ;
console.log(hello2)
console.log(hello2.trimEnd());

//-------------------------------
//try/catch: ahora puedes utilizarlo sin necesidad de especificaro como catch(error) sino directamente usarlo en el scope del catch.

//ANTES
try {


} catch (e) {
    e
}

//AHORA 
try {

}catch{

}

//-------------------------------
//Object.fromEntries() lo inverso a Object.entries(),
// es decir podemos convertir un objeto en una matriz clave/valor con Object.entries(), y hace lo inverso es decir de una matriz 
//clave/valor a un objeto con Object.fromEntries().

let entries = [["name", "oscar"], ['age', 32]];
console.log(Object.fromEntries(entries))