let =ingresarNumero = parseInt(prompt("Ingresar número"))

for (let i = 0; i < 10; i++) {
    let resultado = ingresarNumero * i;
    console.log(resultado)
    alert(ingresarNumero + " x " + i + " = " + resultado);
}