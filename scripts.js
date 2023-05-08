// Soy Dalto - Curso de JAVASCRIPT desde CERO (Completo) - Nivel MID LEVEL. Capitulo 10. Creando soluciones en la historia de Cofla. Solucion 1



// Las mesas de examen ya finalizaron y el profesor le tomó un último examen especial a Cofla. Ya Cofla hizo 2 pruebas, pero lamentablemente se rompió el sistema de inscripción de notas, por ende habrá que crear una solución a este problema, desarrollando una web que sea capaz de simular su funcionamiento:
// - Crear mini interfaz para introducir las notas
// - Validar que no haya errores
// - Se debe promediar la nota del profesor, con otras 2 notas de trabajos anteriores
// Si el promedio es igual o mayor a 7/10, pues aprueba la materia




{
	let comprobarInputsDepurados = {
		// Este objeto sirve para que cuando los tres inputs esten depurados se pueda proseguir a sacar el promedio y mostrar los resultados
		inputNotaUsuario1: false,
		inputNotaUsuario2: false,
		inputNotaUsuario3: false,
	}

	function depurarDatosDeInputs(){
		// Comprobar input 1
		if(isNaN(parseInt(document.getElementById("inputNotaUsuario1").value)) || parseInt(document.getElementById("inputNotaUsuario1").value == "")){
			document.getElementById("parrafoResultado").setAttribute("hidden", "true")
			document.getElementById("alertaDelInput1").textContent = "Ingrese un numero por favor."
			document.getElementById("alertaDelInput1").removeAttribute("hidden")
			comprobarInputsDepurados.inputNotaUsuario1 = false
		}
		else if(parseInt(document.getElementById("inputNotaUsuario1").value) > 10 || parseInt(document.getElementById("inputNotaUsuario1").value) < 0){
			document.getElementById("parrafoResultado").setAttribute("hidden", "true")
			document.getElementById("alertaDelInput1").textContent = "Ingrese un numero entre 0 y 10."
			document.getElementById("alertaDelInput1").removeAttribute("hidden")
			comprobarInputsDepurados.inputNotaUsuario1 = false
		}
		else{
			document.getElementById("alertaDelInput1").setAttribute("hidden", "true")
			comprobarInputsDepurados.inputNotaUsuario1 = true
			// Depuracion completada
		}
		
		
		// Comprobar input 2
		if(isNaN(parseInt(document.getElementById("inputNotaUsuario2").value)) || parseInt(document.getElementById("inputNotaUsuario1").value == "")){
			document.getElementById("parrafoResultado").setAttribute("hidden", "true")
			document.getElementById("alertaDelInput2").textContent = "Ingrese un numero por favor."
			document.getElementById("alertaDelInput2").removeAttribute("hidden")
			comprobarInputsDepurados.inputNotaUsuario1 = false
		}
		else if(parseInt(document.getElementById("inputNotaUsuario2").value) > 10 || parseInt(document.getElementById("inputNotaUsuario2").value) < 0){
			document.getElementById("parrafoResultado").setAttribute("hidden", "true")
			document.getElementById("alertaDelInput2").textContent = "Ingrese un numero entre 0 y 10."
			document.getElementById("alertaDelInput2").removeAttribute("hidden")
			comprobarInputsDepurados.inputNotaUsuario1 = false
		}
		else{
			document.getElementById("alertaDelInput2").setAttribute("hidden", "true")
			comprobarInputsDepurados.inputNotaUsuario2 = true
			// Depuracion completada
		}
		
		
		// Comprobar input 3
		if(isNaN(parseInt(document.getElementById("inputNotaUsuario3").value)) || parseInt(document.getElementById("inputNotaUsuario1").value == "")){
			document.getElementById("parrafoResultado").setAttribute("hidden", "true")
			document.getElementById("alertaDelInput3").textContent = "Ingrese un numero por favor."
			document.getElementById("alertaDelInput3").removeAttribute("hidden")
			comprobarInputsDepurados.inputNotaUsuario1 = false
		}
		else if(parseInt(document.getElementById("inputNotaUsuario3").value) > 10 || parseInt(document.getElementById("inputNotaUsuario3").value) < 0){
			document.getElementById("parrafoResultado").setAttribute("hidden", "true")
			document.getElementById("alertaDelInput3").textContent = "Ingrese un numero entre 0 y 10."
			document.getElementById("alertaDelInput3").removeAttribute("hidden")
			comprobarInputsDepurados.inputNotaUsuario1 = false
		}
		else{
			document.getElementById("alertaDelInput3").setAttribute("hidden", "true")
			comprobarInputsDepurados.inputNotaUsuario3 = true
			// Depuracion completada
		}
	}

	let resultado = undefined
	function sacarPromedioConLosDatosIngresadosEnInputs(){
		if(comprobarInputsDepurados.inputNotaUsuario1 == true && comprobarInputsDepurados.inputNotaUsuario2 == true && comprobarInputsDepurados.inputNotaUsuario3 == true){
			resultado = (parseInt(document.getElementById("inputNotaUsuario1").value) + parseInt(document.getElementById("inputNotaUsuario2").value) + parseInt(document.getElementById("inputNotaUsuario3").value)) / 3
			resultado = Math.round(resultado)
		}
	}

	function mostrarResultados(){
		if(resultado <= 6){
			document.getElementById("parrafoResultado").textContent = `¡Malo! Reprobaste. Tienes ${resultado}/10 puntos.`
			document.getElementById("parrafoResultado").removeAttribute("hidden")
		}
		else if(resultado >= 7){
			document.getElementById("parrafoResultado").textContent = `¡Eres tú! Aprobaste. Tienes ${resultado}/10 puntos.`
			document.getElementById("parrafoResultado").removeAttribute("hidden")
		}
	}

	document.getElementById("botonEnviar").addEventListener("click", (e)=>{
			e.preventDefault()
			depurarDatosDeInputs()
			sacarPromedioConLosDatosIngresadosEnInputs()
			mostrarResultados()
		}
	)
}
