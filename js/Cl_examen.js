export default class Cl_examen {
    constructor (valor, minAprueba) {
        this.valor = valor;
        this.minAprueba = minAprueba;
        this.estudiantes = [];

    }

    set valor (valor) {
        this._valor = +valor;
    }

    get valor () {
        return this._valor;
    }

    set minAprueba (minAprueba) {
        this._minAprueba = +minAprueba;
    }

    get minAprueba () {
        return this._minAprueba;
    }



    agregarEstudiante (estudiante) {
        this.estudiantes.push(estudiante);
    }

    eliminarEstudiante(cedula){
        this.estudiantes = this.estudiantes.filter((estudiante) => estudiante.cedula !== cedula);
    }

    notaPromedio () {
        let acumPromedio = 0;
        for (let i = 0; i < this.estudiantes.length; i++) {
            acumPromedio += this.estudiantes[i].nota;
        }
        return acumPromedio / this.estudiantes.length;
    }



    porcentajeAprobados () {
        let contAprobados = 0;
        for (let i = 0; i < this.estudiantes.length; i++) {
            if (this.estudiantes[i].nota >= this.minAprueba) {
                contAprobados ++;
            }
        }
        return (contAprobados / this.estudiantes.length) * 100;
    }

    porcentajeReprobados () {
        let contReprobados = 0;
        for (let i = 0; i < this.estudiantes.length; i++) {
            if (this.estudiantes[i].nota < this.minAprueba) {
                contReprobados ++;
            }
        }
        return (contReprobados / this.estudiantes.length) * 100;
    }



    mejorNota () {
        let mejor = 0;
        for (let i = 0; i < this.estudiantes.length; i++) {
            if (this.estudiantes[i].nota > mejor) {
                mejor = this.estudiantes[i].nota;
            }
        }
        return mejor;
    }

    chicasEncimaPromedio() {
        const promedio = this.notaPromedio(); 
        let contChicas = 0;
        for (let i = 0; i < this.estudiantes.length; i++) {
            if (this.estudiantes[i].sexo === "F" && this.estudiantes[i].nota > promedio) {
                contChicas++;
            }
        }
        return contChicas;
    }

    modificarEstudiante(cedula, nuData){
        const estudiante = this.estudiantes.find((estudiante) => estudiante.cedula == cedula);
        if(estudiante){
            estudiante.nombre = nuData.nombre || estudiante.nombre;
            estudiante.sexo = nuData.sexo || estudiante.sexo;
            estudiante.nota = nuData.nota || estudiante.nota;
        }
    
    }


    
}