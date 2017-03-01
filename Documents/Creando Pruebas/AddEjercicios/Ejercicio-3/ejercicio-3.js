function convertor(fahrenheit){
  return (fahrenheit - 32)*(5/9)
}
var temperaturas =[];
var resultado = temperaturas.map(convertor);
return resultado;

if(typeof exports !== 'undefined') {
    exports.convertor = convertor;
}
