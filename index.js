function hello() {
  console.log("Hola mundo!");
}

hello();

// *****************************************************
// El resultado de la función se puede guardar en una constante

// function hello() {
//     return "Hola mundo!";
// }

// const result = hello();
// console.log(result);

// *****************************************************
// Me evito guardar el resultado en una constante y lo imprimo directamente

// function hello() {
//     return "Hola mundo!";
// }

// console.log(hello());

// *****************************************************
// Tambien me puede devolver un valor numerico

// function hello() {
//     return 123;
// }

// console.log(hello());

// *****************************************************
// Tambien me puede devolver un valor booleano

// function hello() {
//     return true;
// }

// console.log(hello());

// *****************************************************
// Tambien me puede devolver un array

// function hello() {
//     return [1, 2, 3];
// }

// console.log(hello());

// *****************************************************
// Tambien me puede devolver un objeto vacio

// function hello() {
//     return {};
// }

// console.log(hello());

// *****************************************************
// Tambien me puede devolver un objeto con propiedades

// function hello() {
//     return {name: "Juan"};
// }

// console.log(hello());

// *****************************************************
// Tambien me puede devolver una función y que esa funcion me retorne un texto

// function hello() {
//     return function() {
//         return "Hola mundo!";
//     }
// }

// // Necesito llamarla dos veces para que me imprima el texto
// // 1ro para que me retorne la función y 2do para que me retorne el texto
// console.log(hello()());

// *****************************************************