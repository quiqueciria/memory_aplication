interface InfoCarta {
  idFoto: number;
  imagen: string;
}

const cartas: InfoCarta[] = [
  {
    idFoto: 0,
    imagen: "/src/imgs/1.png",
  },

  {
    idFoto: 1,
    imagen: "/src/imgs/1.png",
  },

  {
    idFoto: 2,
    imagen: "/src/imgs/2.png",
  },

  {
    idFoto: 3,
    imagen: "/src/imgs/2.png",
  },

  {
    idFoto: 4,
    imagen: "/src/imgs/3.png",
  },

  {
    idFoto: 5,
    imagen: "/src/imgs/3.png",
  },
  {
    idFoto: 6,
    imagen: "/src/imgs/4.png",
  },

  {
    idFoto: 7,
    imagen: "/src/imgs/4.png",
  },
  {
    idFoto: 8,
    imagen: "/src/imgs/5.png",
  },

  {
    idFoto: 9,
    imagen: "/src/imgs/5.png",
  },
  {
    idFoto: 10,
    imagen: "/src/imgs/6.png",
  },

  {
    idFoto: 11,
    imagen: "/src/imgs/6.png",
  },
];

//Mapea el arrayy lo pinta en los contenedores
const mapearDivCartas = (indiceCartas: number): void => {
  const dataIndiceId = `div[data-indice-id="${indiceCartas}"]`;
  const elemento = document.querySelector(dataIndiceId);
  if (elemento) {
    const urlImg = cartas[indiceCartas].imagen;
    elemento.addEventListener("click", () => {
      elemento.getElementsByTagName("img")[0].src = urlImg;
    });
  }
  // Esto se puede quitar es solo para ver algo
  console.log(elemento);
};

//Gemerar el tablero (grid)
const generarTablero = (): void => {
  for (let indice = 0; indice - cartas.length; indice++) {
    mapearDivCartas(indice);
  }
};

document.addEventListener("DOMContentLoaded", generarTablero);
