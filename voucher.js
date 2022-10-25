// alert("El simulador mostrará una figurita al azar. Si sale Messi, obtendrás un Voucher de descuento para tu próxima compra. ¡Buena suerte!");


let numeroAleatorio= Math.floor(Math.random()*18)+1;
let fuente1 = `/images/figu${numeroAleatorio}.png`;
document.querySelector('.img1').setAttribute('src', fuente1);




let codigoDescuento= Math.floor(Math.random()*999999999);
if (fuente1 == "/images/figu1.png"){
    document.querySelector('h1').textContent="¡FELICIDADES, GANASTE!";
    document.querySelector('h2').textContent=`Tu código de descuento es: ${codigoDescuento} `;
}
else{
    document.querySelector('h1').textContent="¡PERDISTE!";
    document.querySelector('h2').textContent="Esta vez no salió Messi, intentalo nuevamente...";
}