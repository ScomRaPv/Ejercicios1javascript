let miNombre = "Rafael "
console.log(miNombre);
let miApellido = "Polanco"
console.log(miApellido);
let miEdad = 31
console.log(miEdad);
let miMascota = "susu"
console.log(miMascota);
let edadMascota = 10
console.log(edadMascota);
/* Ejercicio 7 */
let nombreCompleto = miNombre + miApellido
console.log(nombreCompleto);
/*Ejercicio 8 */
let textoPresentacion = {
    nombreCompleto,
    miEdad,
    miMascota,
    edadMascota,
}
console.log(textoPresentacion);

/* Ejercicio 9 */

let sumaEdades = miEdad + edadMascota
console.log(sumaEdades);
let restaEdades = miEdad - edadMascota
console.log(restaEdades);
let productoEdades = miEdad * edadMascota
console.log(productoEdades);
let divisionEdades = miEdad / edadMascota
console.log(divisionEdades);

/* Ejercicio 10 */
 
let nombre=prompt("Como te llamas");
console.log(nombre);
let apellido = prompt ("apellido");
console.log(apellido);
let edad = parseInt( prompt("edad"));
console.log(edad);
let mascota= prompt ("mascota");
console.log(mascota);
let edadmascota = parseInt( prompt("edad mascota"));
console.log(edadmascota); 

let nombreyapellido = nombre+apellido
console.log(nombreyapellido);

let Sumaedades = edad + edadmascota
console.log( Sumaedades);
let Restaedades = edad - edadmascota
console.log( Restaedades);
let Productoedades = edad * edadmascota
console.log( Productoedades);
let Divisionedades = edad / edadmascota
console.log( Divisionedades); 


/* Ejercicio 11 */

let nombrealumno ="rafael"
let apellidoalumno ="Polanco"
let edadalumno= "31"
let curso= 1
let horario = "tarde" 
console.table(["nombrealumno", "apellidoalumno", "edadalumno", "curso", "horario"]);

/* Ejercicio 12 */

let nombremascota = "susu"
let clasedemascota = "perro"
let razamascota = "pinche"
let edadmascota2 = 10
let colormascota = "negro"
console.table (["nombremascota", "clasedemascota", "razamascota", "edadmascota2", "colormascota"]);

/* Ejercicio 13 */

let frutas = ["Manzana", "Banana", "kiwi", "fresa", "pera" ];
console.log(frutas);
console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])
console.log(frutas[4])

/* Ejercicio 14 */

let numeros = ["1", "2", "3", "4", "5" ];
console.log(numeros);
console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])

/* Ejercicio 15*/

let familia = ["Papa", "Mama", "Hermano", "Hermana", "Primo" ];
console.log(familia);
console.log(familia[0])
console.log(familia[1])
console.log(familia[2])
console.log(familia[3])
console.log(familia[4])

/* Ejercicio 16*/

let textoaleatorio = frutas[1]+numeros[3]+familia[4]
console.log(textoaleatorio);

/* Ejercicio 17 */


let miedad=prompt("introduce tu edad");
console.log(miedad);

let edadcompañero=prompt("introduce edad de un comprañero");
console.log(edadcompañero);

let edadesiguales= miedad==edadcompañero
console.log(edadesiguales);
alert ("mi edad es igual a la de mi compañero: false");
let soymayor= miedad>edadcompañero
console.log(soymayor);
alert ("mi edad es mayor a la de mi compañero: true");
let soymenor= miedad<edadcompañero
console.log(soymenor);
alert ("mi edad es menor a la de mi compañero: false"); 

/* Ejercicio 18 */

let soymayordeedad= miedad>=18
console.log(soymayordeedad);
alert ("soy mayor de edad:" + soymayordeedad); 

/* Ejercicio 19 */

let edadpersona = prompt(" cual es tu edad");
console.log(edadpersona);
let alturapersona = prompt("cual es tu altura");
console.log(alturapersona);

let comp = (edadpersona>=6)&&(alturapersona>=120)
console.log(comp);
 
if (comp==true) {
    alert ("Puede subir a la atraccion: "+ comp);
} else{ alert ("No puede subir a la atraccion: "+ comp);}   

/* Ejercicio 20 */

let tipodepase= prompt ("que tipo de pase tiene");
console.log(tipodepase);

let saldo= prompt("Saldo disponible")
console.log(saldo);

let puedepasar= (tipodepase=="vip")||(saldo>=1000)
console.log(puedepasar);

if (puedepasar==true){
    alert("Puede pasar: "+ puedepasar);
}



