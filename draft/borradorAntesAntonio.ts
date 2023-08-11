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
];

const leon = document.getElementById("leon") as HTMLImageElement;
leon.addEventListener("click", function () {
  leon.src = "/src/imgs/3.png";
});

const buho = document.getElementById("buho") as HTMLImageElement;
buho.addEventListener("click", function () {
  buho.src = "/src/imgs/1.png";
});

const perro = document.getElementById("perro") as HTMLImageElement;
perro.addEventListener("click", function () {
  perro.src = "/src/imgs/2.png";
});

// const cartaGrid = document.querySelector(".grid-container");
// for (const carta of cartas) {
//   const img = document.createElement("img");
//   img.src = carta.imagen;
//   const div = document.createElement("div");
//   div.appendChild(img);
//   cartaGrid.appendChild(div);
// }

// const gallina = document.getElementById("gallina") as HTMLImageElement;
// const img = document.createElement("img");
// img.src = ;

// gallina.appendChild(img);

const;

//Ordenar de forma aleatoria un array
// const arr = [
//   {
//     a: "Manolo",
//   },
//   {
//     b: "PEDRO",
//   },
//   {
//     c: "GATO",
//   },
// ];

// arr.sort(() => Math.random() - 0.5);

// console.log(arr);
