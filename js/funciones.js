class Empresa {
	constructor(){
		this.empl=new Empleado();
	}
	dar_empleado(){
		return this.empl;
	}
	calcular_edad(edad){
		this.empl.dar_edad();
	}
	calcular_prestaciones(salario_emp,anoIngreso){
		this.empl.dar_pres (salario_emp,anoIngreso);
	}
	cargo(){
		//esta creo que iria mejor como funcion puesto que solo se necesita comparar con salario
	}
	estado_fisico(){
		//esta creo que iria mejor como funcion puesto que solo se necesita comparar con dar_estado_fisico
	}
	dar_prestaciones(){
		return this.empl;
	}
	nuevo_salario(new_salario){
		this.empl.actualizar_salario(new_salario);
	}
	dar_nuevo_salario(){
		return this.empl;
	}
	saber_cargo(inv_cargo){
		this.empl.investigar_cargo(inv_cargo);
	}
	saber_fisico(est_peso,est_altura){
		this.empl.investigar_fisico(est_peso,est_altura);
	}
	dar_puesto(){
		return this.empl;
	}
	dar_estado(){
		return this.empl;
	}
}

class Empleado{
	constructor(){
		this.nombre=0;
		this.apellido=0;
		this.sexo=0;
		this.f_nacimiento=0;
		this.f_ingreso=0;
		this.salario=0;
		this.peso=0;
		this.altura=0;
		////////////////////
		this.estados=0;
		this.prestaciones=0;
		this.edad=0;
		this.antiguedad=0;
	}
	dar_nombre(){
		return this.nombre;
	}
	dar_apellido(){
		return this.nombre;
	}
	dar_sexo(){
		return this.sexo;
	}
	fechaNacimiento(){
		return this.fechaNacimiento;
	}
	fechaIngreso(){
		return this.fechaIngreso;
	}
	dar_salario(){
		return this.salario;
	}
	dar_edad(fActual){
		this.edad= fActual.getTime() - this.f_nacimiento.getTime();
		//var difference = day2.getTime()-day1.getTime();
	}
	
	dar_estado_fisico(){
		this.estado=this.peso / (this.altura*this.altura);
	}
	dar_salario_actual(){
		return this.salario;
	}
	actualizar_salario(salario_new){
		this.salario=salario_new;
	}
	dar_puesto_actual(){
		return this.puesto;
	}
	dar_estado_actual(){
		return this.estado;
	}
	
	dar_pres(salario_emp,anoIngreso){

		this.salario = salario_emp;
		this.antiguedad = 2022-anoIngreso;
		let p=(this.antiguedad*salario_emp)/12;
		this.prestaciones=p;
	}


	investigar_cargo(inv_cargo){
		if(inv_cargo <= 1000000){
			this.puesto='Auxliar administrativo';
		} else{
			if((inv_cargo > 1000000)&&(inv_cargo <= 1500000)){
				this.puesto='Secretaria';
			} else{
				if((inv_cargo > 1500000)&&(inv_cargo <= 2000000)){
					this.puesto='asesor';
				} else{
					if((inv_cargo > 2000000)&&(inv_cargo <= 3000000)){
						this.puesto='subgerente';
					} else{
						this.puesto='gerente general';
					}
				}
			}
		}
	}
	investigar_fisico(est_peso,est_altura){
		this.peso=est_peso;
		this.altura=est_altura;
		let est_fisico = (this.peso)/(this.altura*this.altura);
		if(est_fisico < 18.5){
			this.estado='peso inferior al normal';
		} else{
			if((est_fisico > 18.5)&&(est_fisico < 24.9)){
				this.estado='normal';
			} else{
				if((est_fisico > 24.9)&&(est_fisico < 29.9)){
					this.estado='peso superior al normal';
				} else{
					this.estado='obesidad';
				}
			}
		}
	}
	dar_prestacion(){
		return this.prestaciones;
	}
}

let emple = new Empresa();

function mostrar_datos(){
	let name = document.getElementById("nombre").value;
	let last_name = document.getElementById("apellido").value;
	let date_birt = document.getElementById("fechaNacimiento").value;
	let date_ingr = document.getElementById("fechaIngreso").value;
	let gen = document.getElementById("genero").value;
	document.getElementById("nombre_es").innerHTML = "Nombre: " + name;
	document.getElementById("apellido_es").innerHTML = "Apellido:" + last_name;
	document.getElementById('fech_naci_es').innerHTML = "Fecha nacimiento:" + date_birt;
	document.getElementById('fech_ingre_es').innerHTML = "Fecha ingreso:" + date_ingr;
	document.getElementById('genero_es').innerHTML = "Genero:" + gen;
}

//Calcular Nacimiento

let fechaNacimiento = document.getElementById("fechaNacimiento");
let edad = document.getElementById("edad");

function calcularEdad (fechaNacimiento)  {
    let fechaActual = new Date();
    let anoActual = parseInt(fechaActual.getFullYear());
    let mesActual = parseInt(fechaActual.getMonth()) + 1;
    let diaActual = parseInt(fechaActual.getDate());

    // 2016-07-11
    let anoNacimiento = parseInt(String(fechaNacimiento).substring(0, 4));
    let mesNacimiento = parseInt(String(fechaNacimiento).substring(5, 7));
    let diaNacimiento = parseInt(String(fechaNacimiento).substring(8, 10));

    let edad = anoActual - anoNacimiento;
    if (mesActual < mesNacimiento) {
        edad--;
    } else if (mesActual === mesNacimiento) {
        if (diaActual < diaNacimiento) {
            edad--;
        }
    }
    return edad;
};

fechaNacimiento.addEventListener('change', function () {
	if (this.value) {
	
		document.getElementById('edad_es').innerHTML =  `Tiene: ${calcularEdad(this.value)} años`;
			
	}
});

//Calcular Antiguedad

let fechaIngreso = document.getElementById("fechaIngreso");
let antiguedad = document.getElementById("antiguedad");

function calcularantiguedad (fechaIngreso) {
    let fechaActual = new Date();
    let anoActual = parseInt(fechaActual.getFullYear());
    let mesActual = parseInt(fechaActual.getMonth()) + 1;
    let diaActual = parseInt(fechaActual.getDate());

    let anoIngreso = parseInt(String(fechaIngreso).substring(0, 4));
    let mesIngreso = parseInt(String(fechaIngreso).substring(5, 7));
    let diaIngreso = parseInt(String(fechaIngreso).substring(8, 10));

    let antiguedad = anoActual - anoIngreso;
    if (mesActual < mesIngreso) {
        antiguedad--;
    } else if (mesActual === mesIngreso) {
        if (diaActual < diaIngreso) {
            antiguedad--;
        }
    }
    return antiguedad;
};

fechaIngreso.addEventListener('change', function () {
	if (this.value) {
		
		document.getElementById('ant').innerHTML =  `Tiene: ${calcularantiguedad(this.value)} años de antiguedad`;
			
	}
});

function act_salario(){
	let salario_emp = parseInt(document.getElementById("salario").value);
	emple.nuevo_salario(salario_emp);
	let salario_actu = emple.dar_nuevo_salario().dar_salario_actual();
	document.getElementById("salario_es").innerHTML = "El nuevo salario es:" + salario_actu;
}

function mostrar_cargo(){
	let salario_actu = emple.dar_nuevo_salario().dar_salario_actual();
	emple.saber_cargo(salario_actu);
	let puesto_actu = emple.dar_puesto().dar_puesto_actual();
	document.getElementById("cargo_que_ocupa").innerHTML = "Su cargo es:" + puesto_actu;
}

function mostrar_estado(){
	let peso_emp = parseFloat(document.getElementById("peso").value);
	let altu_emp = parseFloat(document.getElementById("estatura").value);
	emple.saber_fisico(peso_emp,altu_emp);
	let esta_actu = emple.dar_estado().dar_estado_actual();
	document.getElementById("estado_fisico").innerHTML = "Su estado fisico es:" + esta_actu;
}

function mostrar_prestaciones(){
	let salario_emp = parseInt(document.getElementById("salario").value);
	let fechaIngreso = document.getElementById("fechaIngreso").value;
	let anoIngreso = parseInt(String(fechaIngreso).substring(0, 4));	
	emple.calcular_prestaciones(salario_emp,anoIngreso);
	let pres = emple.dar_prestaciones().dar_prestacion();
	document.getElementById("presta").innerHTML = "Su Valor de prestacionaes es:" + pres;
}