/*1. EXAMEN
Se desea llevar un control de los estudiantes que  
asisten a presentar un examen. Se tiene por cada  
participante: nombre, cédula, sexo y nota. Se requiere  
de un programa que permita el registro de esta  
información, conociendo al principio de la ejecución el  
valor del examen y el mínimo aprobatorio.  

Estructuras de datos recomendadas:
 Cl_examen: valor, minAprueba  
 Cl_estudiante: nombre, cedula (‘F’ - ‘M’), sexo y nota  

Primeros requerimientos:

Los datos entrada vienen en un archivo (con  
import... ver anexo)  
 Porcentaje de aprobados y reprobados  
 Estudiantes con la mejor nota  
 Chicas por encima de la nota promedio*/

 import Cl_examen from "./Cl_examen.js";
 import Cl_estudiante from "./Cl_estudiante.js";
 import Dt_examen from "./Dt_examen.js";
 import Dt_estudiante from "./Dt_estudiante.js";
 
 const examen = new Cl_examen(Dt_examen.valor, Dt_examen.minAprueba);
 
 Dt_estudiante.forEach((estudiante) =>
   examen.agregarEstudiante(
     new Cl_estudiante(estudiante.nombre, estudiante.cedula, estudiante.sexo, estudiante.nota)
   )
 );
 
 let mostrarMenu = (salida) => {
   salida.innerHTML = `<br>Seleccione una opción:
     <br>1= Agregar estudiante
     <br>2= Porcentaje de estudiantes aprobados
     <br>3= Porcentaje de estudiantes reprobados
     <br>4= Mejor nota
     <br>5= Nota promedio
     <br>6= Chicas con nota por encima del promedio
     <br>7= Modificar estudiante
     <br>8= Eliminar estudiante`;
 };
 
 let agregarEstudiante = (examen, salida) => {
   let nombre = prompt("Ingrese el nombre del estudiante:");
   let cedula = prompt("Ingrese la cédula del estudiante:");
   let sexo = prompt("Ingrese el sexo del estudiante (F/M):");
   let nota = prompt("Ingrese la nota del estudiante:");
   examen.agregarEstudiante(new Cl_estudiante(nombre, cedula, sexo, nota));
   salida.innerHTML = `<br>Estudiante agregado con éxito:<br>
     Nombre: ${nombre}<br>
     Cédula: ${cedula}<br>
     Sexo: ${sexo}<br>
     Nota: ${nota}`;
 };
 
 let porcentajeAprobados = (examen, salida) => {
   let porcentaje = examen.porcentajeAprobados();
   salida.innerHTML = `<br>Porcentaje de estudiantes aprobados: ${porcentaje.toFixed(2)}%`;
 };
 
 let porcentajeReprobados = (examen, salida) => {
   let porcentaje = examen.porcentajeReprobados();
   salida.innerHTML = `<br>Porcentaje de estudiantes reprobados: ${porcentaje.toFixed(2)}%`;
 };
 
 let mejorNota = (examen, salida) => {
   let mejor = examen.mejorNota();
   salida.innerHTML = `<br>La mejor nota es: ${mejor}`;
 };
 
 let notaPromedio = (examen, salida) => {
   let promedio = examen.notaPromedio();
   salida.innerHTML = `<br>El promedio de las notas es: ${promedio.toFixed(2)}`;
 };
 
 let chicasEncimaPromedio = (examen, salida) => {
   let cantidad = examen.chicasEncimaPromedio();
   salida.innerHTML = `<br>Cantidad de chicas con nota por encima del promedio: ${cantidad}`;
 };
 
 let modificarEstudiante = (examen, salida) => {
   let cedula = prompt("Ingrese la cédula del estudiante a modificar:");
   let nombre = prompt("Ingrese el nuevo nombre del estudiante (o deje vacío para no modificar):");
   let sexo = prompt("Ingrese el nuevo sexo del estudiante (o deje vacío para no modificar):");
   let nota = prompt("Ingrese la nueva nota del estudiante (o deje vacío para no modificar):");
   examen.modificarEstudiante(cedula, { nombre, sexo, nota });
   salida.innerHTML = `<br>Estudiante con cédula ${cedula} modificado con éxito.`;
 };
 
 let eliminarEstudiante = (examen, salida) => {
   let cedula = prompt("Ingrese la cédula del estudiante a eliminar:");
   examen.eliminarEstudiante(cedula);
   salida.innerHTML = `<br>El estudiante con cédula ${cedula} ha sido eliminado.`;
 };
 
 let salida1 = document.getElementById("salida1"),
   salida2 = document.getElementById("salida2"),
   opciones = document.getElementById("Opciones");
 
 mostrarMenu(salida1);
 
 opciones.onclick = () => {
   let opcion = +prompt("Seleccione su opción:");
   switch (opcion) {
     case 1:
       agregarEstudiante(examen, salida2);
       break;
     case 2:
       porcentajeAprobados(examen, salida2);
       break;
     case 3:
       porcentajeReprobados(examen, salida2);
       break;
     case 4:
       mejorNota(examen, salida2);
       break;
     case 5:
       notaPromedio(examen, salida2);
       break;
     case 6:
       chicasEncimaPromedio(examen, salida2);
       break;
     case 7:
       modificarEstudiante(examen, salida2);
       break;
     case 8:
       eliminarEstudiante(examen, salida2);
       break;
     default:
       salida2.innerHTML = `<br>Opción no válida. Intente nuevamente.`;
   }
 };
 
 
 