import { infoCartas } from "./modelo";

//Mapea el arrayy lo pinta en los contenedores
const mapearDivCartas = (indiceCartas: number): void => {
  const dataIndiceId = `div[data-indice-id="${indiceCartas}"]`;
  const elemento = document.querySelector(dataIndiceId);
  if (elemento) {
    const urlImg = infoCartas[indiceCartas].imagen;
    elemento.addEventListener("click", () => {
      elemento.getElementsByTagName("img")[0].src = urlImg;
    });
  }
};

//Gemerar el tablero (grid)
export const generarTablero = (): void => {
  for (let indice = 0; indice - infoCartas.length; indice++) {
    mapearDivCartas(indice);
  }
};
