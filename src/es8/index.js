const data = {
    frontend: 'Oscari',
    backend: 'Isabel',
    design: 'Ana'
}

const entries = Object.entries(data);
console.log(entries)
console.log(entries.length)

//----------------------------------------------------------------

const data = {
    frontend: 'Oscari',
    backend: 'Isabel',
    design: 'Ana'
}

const values = Object.values(data);
console.log(values)
console.log(values.length)

///----------------------------------------------------------------

const string = 'hello';
console.log(string.padStart(7,'hi'))
console.log(string.padEnd(12,'-----'))

console.log("string".padEnd(15,'abc'))