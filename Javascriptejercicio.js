//Ejercicio Mensaje1
const usuarios=["Andres","Felipe","Alex"]
let saludar=usuarios=>`Bienvenidos Al Juego:  `+usuarios.length+" : "  +usuarios;

const saludarusuario=(callbackFuntion,usuarios)=>{
    const mensajealjuego=callbackFuntion(usuarios)
    console.log(mensajealjuego);
}

saludarusuario(saludar, usuarios);


//Ejercicio 2 Division

const numeros=[1,40,80,160,300]
const dividir= numeros=> numeros.map(n=>n/10);

const resultado=(callbackFuntion, numeros)=>{
const resultadofinal=callbackFuntion(numeros);
console.log(resultadofinal);
}
resultado(dividir,numeros);

//Ejercicio 3 Potenciacion
const numeros2=[1,2,4,6,8]
const potenciacion= numeros=> numeros.map(n=>n**10).filter(n=> n>=1048577);

const resultado2=(callbackFuntion, numeros)=>{
const resultadofinal2=callbackFuntion(numeros);
console.log(resultadofinal2);
}
resultado2(potenciacion,numeros2);