//------------------------------
//operador de reposo para
const obj  = { 
    name: 'Oscar',
    age: 32,
    count: 'MX',
};

let { name, ...all } = obj;
console.log(name,all);
//Oscar { age: 32, count: 'MX' }

let { count, ...all3 } = obj;
console.log(all3)
//{ name: 'Oscar', age: 32 }

//------------------------------
const obj2 = { name: 'oscar',
age: 32}

const obj3 = {...obj2, count : "MX"}

console.log(obj3)

//------------------------------
// finally
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (false)
        ? setTimeout(() => resolve('heolordfgf'), 3000)
        : reject(new Error('test Error'))
    })
}

helloWorld()
    .then(response => {console.log(response)})
    .catch(err => {console.log(err)})
    .finally(() => {console.log('finalizado')})

    
//------------------------------
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20')
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month,day)