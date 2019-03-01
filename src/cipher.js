window.cipher = {
  encode: (string, offset) => {
    
    let newTexto = "";

    for(let i = 0; i < string.length ; i++){
      let numer = string [i].charCodeAt()
      let aplicar = ((numer - 65) + offset) % 26 + 65
      let letra = String.fromCharCode(aplicar)
      newTexto += letra; 
    }

    return newTexto;
  },
  decode: (string, offset) => {

    let newTexto = "";
    
    for(let i = 0; i < string.length; i++){
      let numer = string [i].charCodeAt()
      let aplicar = ((numer-90) - offset) % 26 + 90
      let letra = String.fromCharCode(aplicar)
      newTexto += letra;
    }
  
  return newTexto;
  }
};