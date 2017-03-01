function holaMundo(string) {
  if(string == "es") {
    return "hola mundo";
  } else if(string == "de"){
    return "hallo welt";
  } else if(string == "en"){
    return "hello wordl";
  }
}

if(typeof exports !== 'undefined') {
    exports.holaMundo = holaMundo;
}
