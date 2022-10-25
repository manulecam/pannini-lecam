// ------------------------------------------------------------------------------------------------------------
// ** Proposito de la funcion: cambiar (la ruta de) las imagenes de las figuritas
// así tambien como imprimir en pantalla el mensaje correspondiente, según sea el caso
// ** Parametros: - figuritaAleatoria: numero aleatorio que nos permitirá cambiar la ruta de las imagenes
//                - codigoDescuento: numero aleatorio del 0 al 9999999 (codigo que por ahora no tiene funcionalidad ni utilidad)
function cambiarFigurita(figuritaAleatoria, codigoDescuento){
    let fuente1 = `../images/figu${figuritaAleatoria}.jpg`;
    document.querySelector('.img1').setAttribute('src', fuente1);

    // Condicional que cambia el mensaje que se ve por pantalla según corresponda
    if (fuente1 == "../images/figu1.jpg"){
        document.querySelector('h1').textContent="¡FELICIDADES, GANASTE!";
        document.querySelector('h2').textContent=`Tu código de descuento es: ${codigoDescuento} `;
    }
    else{
        document.querySelector('h1').textContent="¡MALA SUERTE, PERDISTE!";
        document.querySelector('h2').textContent="Esta vez no salió Messi, intentalo nuevamente...";
    }
    return fuente1;
}
// ------------------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------------------
// Variable con número aleatorio (1-18) para pasarla como parámetro para el llamado de la funcion (figuritaAleatoria)
let numeroAleatorio= Math.floor(Math.random()*18)+1;
// Variable con código de descuento aleatorio para pasarla como parámetro para el llamado de la funcion (codigoDescuento)
let codigoAleatorio= Math.floor(Math.random()*99999999);
// Llamado a la función
cambiarFigurita(numeroAleatorio, codigoAleatorio);
// ------------------------------------------------------------------------------------------------------------





