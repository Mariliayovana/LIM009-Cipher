let cifrado = document.getElementById('cifrado');
let porCifrar = document.getElementById ("porCifrar");
let numero = document.getElementById("numero");
let boton = document.getElementById('boton');
let mensaje =  document.getElementById("mensaje");
let botonDecifrar = document.getElementById("botonDecifrar")

boton.addEventListener('click', ()  =>{
    //toUpperCase convierte un texto a mayúscula
    const textoCifrar = porCifrar.value.toUpperCase();

    //parseInt convierte un texto a entero
    const offset = parseInt(numero.value);
    cifrado.value = cipher.encode(textoCifrar, offset);

})
botonDecifrar.addEventListener('click',() =>{
    const textoCifrar = porCifrar.value.toUpperCase();
    const offset = parseInt(numero.value);
    cifrado.value = cipher.decode(textoCifrar, offset);

})