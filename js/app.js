var display = document.getElementById("display")
var numero = 0
var signo = ""
var bandera = false
var operandos = {
  operador: "",
  operadorAnt: "",
  numAnt: 0
}

var Calculadora = {
  init: function(){
    var self = this
    var cero = document.getElementById("0")
    var uno = document.getElementById("1")
    var dos = document.getElementById("2")
    var tres = document.getElementById("3")
    var cuatro = document.getElementById("4")
    var cinco = document.getElementById("5")
    var seis = document.getElementById("6")
    var siete = document.getElementById("7")
    var ocho = document.getElementById("8")
    var nueve = document.getElementById("9")
    var punto = document.getElementById("punto")
    var on = document.getElementById("on")
    var sign = document.getElementById("sign")
    var raiz = document.getElementById("raiz")
    var div = document.getElementById("dividido")
    var por = document.getElementById("por")
    var menos = document.getElementById("menos")
    var mas = document.getElementById("mas")
    var igual = document.getElementById("igual")
cero.addEventListener("click", function(){
	self.numero("0")
})
cero.addEventListener("mousedown", function(){
	cero.setAttribute("style","transform:scale(0.95,0.95)")
})
cero.addEventListener("mouseout", function(){
	cero.setAttribute("style","transform:scale(1,1)")
})
uno.addEventListener("click", function(){
	self.numero("1")
})
uno.addEventListener("mousedown", function(){
	uno.setAttribute("style","transform:scale(0.95,0.95)")
})
uno.addEventListener("mouseout", function(){
	uno.setAttribute("style","transform:scale(1,1)")
})
dos.addEventListener("click", function(){
	self.numero("2")
})
dos.addEventListener("mousedown", function(){
	dos.setAttribute("style","transform:scale(0.95,0.95)")
})
dos.addEventListener("mouseout", function(){
	dos.setAttribute("style","transform:scale(1,1)")
})
tres.addEventListener("click", function(){
	self.numero("3")
})
tres.addEventListener("mousedown", function(){
	tres.setAttribute("style","transform:scale(0.95,0.95)")
})
tres.addEventListener("mouseout", function(){
	tres.setAttribute("style","transform:scale(1,1)")
})
cuatro.addEventListener("click", function(){
	self.numero("4")
})
cuatro.addEventListener("mousedown", function(){
	cuatro.setAttribute("style","transform:scale(0.95,0.95)")
})
cuatro.addEventListener("mouseout", function(){
	cuatro.setAttribute("style","transform:scale(1,1)")
})
cinco.addEventListener("click", function(){
	self.numero("5")
})
cinco.addEventListener("mousedown", function(){
	cinco.setAttribute("style","transform:scale(0.95,0.95)")
})
cinco.addEventListener("mouseout", function(){
	cinco.setAttribute("style","transform:scale(1,1)")
})
seis.addEventListener("click", function(){
	self.numero("6")
})
seis.addEventListener("mousedown", function(){
	seis.setAttribute("style","transform:scale(0.95,0.95)")
})
seis.addEventListener("mouseout", function(){
	seis.setAttribute("style","transform:scale(1,1)")
})
siete.addEventListener("click", function(){
	self.numero("7")
})
siete.addEventListener("mousedown", function(){
	siete.setAttribute("style","transform:scale(0.95,0.95)")
})
siete.addEventListener("mouseout", function(){
	siete.setAttribute("style","transform:scale(1,1)")
})
ocho.addEventListener("click", function(){
	self.numero("8")
})
ocho.addEventListener("mousedown", function(){
	ocho.setAttribute("style","transform:scale(0.95,0.95)")
})
ocho.addEventListener("mouseout", function(){
	ocho.setAttribute("style","transform:scale(1,1)")
})
nueve.addEventListener("click", function(){
	self.numero("9")
})
nueve.addEventListener("mousedown", function(){
	nueve.setAttribute("style","transform:scale(0.95,0.95)")
})
nueve.addEventListener("mouseout", function(){
	nueve.setAttribute("style","transform:scale(1,1)")
})
punto.addEventListener("click", function(){
	self.numero(".")
})
punto.addEventListener("mousedown", function(){
	punto.setAttribute("style","transform:scale(0.95,0.95)")
})
punto.addEventListener("mouseout", function(){
	punto.setAttribute("style","transform:scale(1,1)")
})
on.addEventListener("click", function(){
	self.limpiar()
})
on.addEventListener("mousedown", function(){
	on.setAttribute("style","transform:scale(0.95,0.95)")
})
on.addEventListener("mouseout", function(){
	on.setAttribute("style","transform:scale(1,1)")
})
sign.addEventListener("click", function(){
	self.conversion()
})
sign.addEventListener("mousedown", function(){
	sign.setAttribute("style","transform:scale(0.95,0.95)")
})
sign.addEventListener("mouseout", function(){
	sign.setAttribute("style","transform:scale(1,1)")
})
raiz.addEventListener("click", function(){
	self.numero("raiz")
})
raiz.addEventListener("mousedown", function(){
	raiz.setAttribute("style","transform:scale(0.95,0.95)")
})
raiz.addEventListener("mouseout", function(){
	raiz.setAttribute("style","transform:scale(1,1)")
})
div.addEventListener("click", function(){
  numero = display.innerHTML
  signo = "/"
  self.sumar()
})
div.addEventListener("mousedown", function(){
	div.setAttribute("style","transform:scale(0.95,0.95)")
})
div.addEventListener("mouseout", function(){
	div.setAttribute("style","transform:scale(1,1)")
})
por.addEventListener("click", function(){
  numero = display.innerHTML
  signo = "*"
  self.sumar()
})
por.addEventListener("mousedown", function(){
	por.setAttribute("style","transform:scale(0.95,0.95)")
})
por.addEventListener("mouseout", function(){
	por.setAttribute("style","transform:scale(1,1)")
})
menos.addEventListener("click", function(){
  numero = display.innerHTML
  signo = "-"
  self.sumar()
})
menos.addEventListener("mousedown", function(){
	menos.setAttribute("style","transform:scale(0.95,0.95)")
})
menos.addEventListener("mouseout", function(){
	menos.setAttribute("style","transform:scale(1,1)")
})
mas.addEventListener("click", function(){
	numero = display.innerHTML
  signo = "+"
  self.sumar()
})
mas.addEventListener("mousedown", function(){
	mas.setAttribute("style","transform:scale(0.95,0.95)")
})
mas.addEventListener("mouseout", function(){
	mas.setAttribute("style","transform:scale(1,1)")
})
igual.addEventListener("click", function(){
	self.resultados(numero, signo)
})
igual.addEventListener("mousedown", function(){
	igual.setAttribute("style","transform:scale(0.95,0.95)")
})
igual.addEventListener("mouseout", function(){
	igual.setAttribute("style","transform:scale(1,1)")
})
},

// validaciones para la caja
numero: function(n){
  var num = display.innerHTML
  var self = this
  var limite = 8

  if (num.indexOf(".") != -1){
    if (n == "."){
      n = ""
    }
    limite = 9
  }

  if (num == "0" && n != "."){
    num = ""
  }
  if (operandos.operador.length > 0){
    num = ""
    operandos.operadorAnt = operandos.operador
    operandos.numAnt = parseFloat(display.innerHTML)
    operandos.operador = ""
  }
  if (display.innerHTML.length < limite){
    if (bandera == true) {
      display.innerHTML = ""
      display.innerHTML = n
      bandera = false
    }else{
      display.innerHTML = num + n
    }
  }
},
limpiar: function(){
  var self = this
  display.innerHTML = 0
  bandera = false
},
conversion: function(){
  var num = display.innerHTML
  var self = this
  display.innerHTML = -(num)
},
resultados: function(numero, signo){
  var num = display.innerHTML
  var self = this
  var limite = 8
  if (signo == "+") {
    display.innerHTML = parseFloat(numero) + parseFloat(num)
    bandera = true
    if (display.innerHTML.length > limite) {
      display.innerHTML = "Error"
    }
  }else if(signo == "-"){
    display.innerHTML = parseFloat(numero) - parseFloat(num)
    bandera = true
  }else if(signo == "*"){
    display.innerHTML = parseFloat(numero) * parseFloat(num)
    bandera = true
    if (display.innerHTML.length > limite) {
      display.innerHTML = "Error"
    }
  }else if (signo == "/") {
    var p = parseFloat(numero) / parseFloat(num)
    display.innerHTML = p.toFixed(2)
    bandera = true
    if (display.innerHTML.length > limite) {
      display.innerHTML = "Error"
    }
  }
},
sumar: function(){
  var num = display.innerHTML
  var self = this
  display.innerHTML = ""
},

verDisplay: function(){
  var self = this
  var limite = 8
  if(display.toString().length > limite){
    display = display.toString().substring(0,8);
  }
  document.getElementById("display").innerHTML = display;
}

}




Calculadora.init();
