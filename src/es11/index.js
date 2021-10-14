//dinamic import
// llamar pizas de codigo de forma dinamica, es mut util

const button = document.getElementById('btn');

button.addEventListener("click", async () => {
    const module = await import("./file.js");
    module.hello();
})

