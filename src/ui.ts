import { cartas } from "./modelo";

//Mapea el array y lo pinta en los contenedores
export const mapearDivCartas = (indiceCartas: number): void => {
  const dataIndiceId = `div[data-indice-id="${indiceCartas}"]`;
  const elemento = document.querySelector(dataIndiceId);
  if (elemento) {
    const urlImg = cartas[indiceCartas].imagen;
    elemento.addEventListener("click", () => {
      elemento.getElementsByTagName("img")[0].src = urlImg;
    });
  }
};

//Gemerar el tablero (grid)
export const generarTablero = (): void => {
  for (let indice = 0; indice - cartas.length; indice++) {
    mapearDivCartas(indice);
  }
};
