function convertirADolares() {
    var cantidadPesos = document.getElementById("pesos").value;
    console.log("cantidad de pesos a convertir "+cantidadPesos);
    var cotizacionDolar=document.getElementById("cotizacionDolares").value;
    console.log("Cotizacion de dolar en pesos uruguayos: "+ cotizacionDolar);
    var cantidadDolares = cantidadPesos / cotizacionDolar;
    console.log("Cantidad de dolares en total: "+ cantidadDolares);
    // Mostrar el resultado
    alert(cantidadPesos + " pesos uruguayos son aproximadamente " + cantidadDolares.toFixed(2) + " dólares.");
}
