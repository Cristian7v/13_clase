/* Este es el listado de la información de las cartas  */
const listadoCartas = [
    {
        id: 1,
        nombre: "Futbol",
        imagen: "imagenes/futbol.jpg",
        descripcion: "Futbol Argentino",
    },
    {
        id: 2,
        nombre: "Rugby ",
        imagen: "imagenes/rugby.jpg",
        descripcion: "Rugby Argentino",
    },
    {
        id: 3,
        nombre: "Tenis",
        imagen: "imagenes/tenis.jpg",
        descripcion: "Tenis Argentino",
    },
    {
        id: 4,
        nombre: "Hockey",
        imagen: "imagenes/hockey.jpg",
        descripcion: "Hockey Argentino",
    },
    {
        id: 5,
        nombre: "Voley",
        imagen: "imagenes/voley.jpg",
        descripcion: "Voley Argentino",
    },
    {
        id: 6,
        nombre: "Atletismo",
        imagen: "imagenes/atletismo.jpg",
        descripcion: "Atletismo Argentino",
    },
]




/* Selección de los NODOS HTML (etiquetas/elementos html) */
const contenedorCartas = document.querySelector(".listadoCartas")


/* Función que recorre el listado de las cartas */
function recorrerListado(){
    contenedorCartas.innerHTML = ""
listadoCartas.forEach(
    (carta) => contenedorCartas.innerHTML += `
    <article class="card">
    <img src=${carta.imagen} alt="Imagen del proyecto">
    <div class="info">
      <h2>${carta.nombre}</h2>
      <p>${carta.descripcion}</p>
    </div>
</article>`
)}
recorrerListado()
function crearCarta(){
    const nombre= prompt("¿Que deporte te gusta?")
    const imagen= prompt("imagen del desarrollador")
    const descripcion= prompt("Identificate con 3 palabras")

//creamos un  objeto con los del usuario
    const carta = {nombre,imagen,descripcion}

    //añadir la carta al listado de cartas
    listadoCartas.push(carta)

    //llamado a la funcion recorrer cartas
    recorrerListado()
}

