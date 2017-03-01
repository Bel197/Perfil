var assert = require('assert');
var app = require('../ejercicio-3.js')

describe("ejericio", function(){
  it("Cuando se ingrese la cantidad en fahrenheit debe devolver la temperatura modificada", function() {
    assert.equal(app.convertor("fahrenheit"),"celsius")
  })
})
