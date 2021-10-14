/** El numero mas grande que se puede escribir en java script antes
 * 
 * Ahora cuando se le pone la n al final estamos dando a entender que 
 * el numero pasara a ser big int lo cual lo hace mas grande aun 
 * 
 * 
 * Tambien se puede declarar de otra forma como programacion orientada a objetos
 * 
 */
const aBigNumber = 9007199265850991n;

const anotherBigNumber = BigInt(2342342);
//----------------------------------------------------------------
//promise.allSettled
/**
 * la cual devuelve una promesa que se resulve despues de que todas la promesas
 * dadas se hayan resuelto 
 */

const promise1 = new Promise((resolve, reject) => reject("reject"))
const promise2 = new Promise((resolve, reject) => resolve("resolve"))
const promise3 = new Promise((resolve, reject) => resolve("resolve1"))

//no importa el estado de las promesas, solo esperara a que se resuelvan

Promise.allSettled(promise1, promise2, promise3)
.then(response => console.log(response))

//------------------------------
/**Global dist es similar al objeto global
 * proporciona forma estandar de usar
 */
console.log(window)
console.log(globalThis)

//------------------------------
/**Operador nulo  es un operador logico que nos devuelve su operando 
 * del lado derecho cuando el operador del lado izquierdo es nulo o indefinido
 * y de lo contrario devuelve su operador de lado izquierdo
*/

const foo = null ?? 'default string'
console.log(foo)

//------------------------------
/**
 * Optional chaining
 */
const user = {};
console.log(user?.profile?.email);