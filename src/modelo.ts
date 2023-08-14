export interface Carta {
  idFoto: number; // id del 1 al 6 para 12 cartas, así identificamos rápido si es un gatito ,un perrito...
  // el ID se repete 2 veces en el array de cartas (hay dos cartas de un perro, hay dos cartas de un gato)
  imagen: string; // por comodidad repetimos la url de la imagen
  estaVuelta: boolean;
  encontrada: boolean;
}

interface InfoCarta {
  idFoto: number;
  imagen: string;
}

export const infoCartas: InfoCarta[] = [
  /* Aquí ponemos seis cartas siguiendo la interfaz de InfoCarta */
  {
    idFoto: 0,
    imagen: "/src/imgs/1.png",
  },

  {
    idFoto: 1,
    imagen: "/src/imgs/2.png",
  },

  {
    idFoto: 2,
    imagen: "/src/imgs/3.png",
  },

  {
    idFoto: 3,
    imagen: "/src/imgs/4.png",
  },

  {
    idFoto: 4,
    imagen: "/src/imgs/5.png",
  },

  {
    idFoto: 5,
    imagen: "/src/imgs/6.png",
  },
];

export const crearCartaInicial = (idFoto: number, imagen: string): Carta => ({
  idFoto,
  imagen,
  estaVuelta: false,
  encontrada: false,
});

export const crearColeccionDeCartasInicial = (
  infoCartas: InfoCarta[]
): Carta[] => {
  /* Aquí crearemos un array de cartas a partir de un array de infoCartas
       y duplicaremos las cartas para que haya dos de cada tipo.
    */
  const newArr = infoCartas.concat(infoCartas);
  console.log(newArr); // [1, 2, 3, 1, 2, 3]
};

export let cartas: Carta[] = crearColeccionDeCartasInicial(infoCartas);

/*
    Aquí definimos el tipo de estado de la partida, la idea es que cuando empiece 
    la partida todas las cartas estén boca abajo y si se hacen click sobre ellas no se volteen.
    EstadoPartida = "PartidaNoIniciada", una vez que se pulse Iniciar partida el estado de 
    la partida cambiaría a "CeroCartasLevantadas" y así sucesivamente.
  */

type EstadoPartida =
  | "PartidaNoIniciada"
  | "CeroCartasLevantadas"
  | "UnaCartaLevantada"
  | "DosCartasLevantadas"
  | "PartidaCompleta";

export interface Tablero {
  cartas: Carta[];
  estadoPartida: EstadoPartida;
  indiceCartaVolteadaA?: number;
  indiceCartaVolteadaB?: number;
}

const crearTableroInicial = (): Tablero => ({
  cartas: cartas,
  estadoPartida: "PartidaNoIniciada",
});

export let tablero: Tablero = crearTableroInicial();
