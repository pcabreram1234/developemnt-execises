const multiply = (a, b) => {
    let resultado = 0
    const positivo = Math.abs(b) == b
    for (let i = 0; i < Math.abs(b); i++) {
        resultado = positivo ? resultado + a : resultado - a
    }
    console.log(resultado)
    return resultado
}

multiply(2, -2)

console.log(Math.abs(-2) == 2)