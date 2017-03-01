var assert = require('assert');
var app = require('../ejercicio-2.js')

describe("ejericio", function(){
  it("Cuando reciba -es- debe retornar el equivalente al idioma que corresponda", function() {
    assert.equal(app.suma("es"),"hola mundo")
  })
  it("Cuando reciba -de- debe retornar el equivalente al idioma que corresponda", function(){
    assert.equal(app.suma("de"),"hallo welt")
  })
  it("Cuando reciba -en- debe retornar el equivalente al idioma que corresponda", function(){
    assert.equal(app.suma("en"),"hello wordl")
  })
})
