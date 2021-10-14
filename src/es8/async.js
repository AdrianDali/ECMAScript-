//------------------------------
//PROMESAS

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true) 
        ? setTimeout(() => resolve("hello"), 3000)
        : reject(new Error ('TEST ERROR'))
    })
}

const helloAsync = async () => {
    const hello = await helloWorld();
    // const hello2 = await hello();
    console.log(hello);

}
helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    }catch (err) {
        console.log(err)
    }
};

anotherFunction();