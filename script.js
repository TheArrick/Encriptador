let title = document.getElementById("titulo");
let titlemsg = document.getElementById("tit_mensaje");
let encrip = document.querySelector(".encriptador_text");
let img = document.querySelector(".imagen");
let encriptado = document.getElementById("encrip").innerHTML;
function encriptar() {
  let text = document.getElementById("text").value;
  let encryptext = text
    .replace(/a/gi, "ai")
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
  if (text.length != 0) {
    ocultar();
    document.getElementById("encrip").innerHTML = encryptext;
  }
}
function desencriptar() {
  let text = document.getElementById("text").value;
  let encryptext = text
    .replace(/ai/gi, "a")
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  if (text.length != 0) {
    ocultar();
    document.getElementById("encrip").innerHTML = encryptext;
  }

}

const BTN_COPIAR = document.getElementById("copiar");
BTN_COPIAR.addEventListener("click", copiar = () => {
  let ENCRIPTADO = document.getElementById("encrip").innerHTML;
  navigator.clipboard.writeText(ENCRIPTADO);
})


function ocultar() {
  encrip.classList.add("ocultar");
  img.classList.add("ocultar");
}
