const btnOn = document.querySelector('.btn-on');
const btnOf = document.querySelector('.btn-off');
const lamp = document.querySelector('.lamp');

const imgLigada = "./assets/images/ligada.jpg"
const imgDesligada = "./assets/images/desligada.jpg"
const imgQuebrada = "./assets/images/quebrada.jpg"

let lampOn = false;

btnOn.addEventListener('click', on);
btnOf.addEventListener('click', off);

//INTERAÇÕES DIRETAMENTE COM A LAMPADA
lamp.addEventListener('click', (e) => {
    // alert("Ola o botão esta funcionando");
    lamp.src = imgQuebrada;
});
lamp.addEventListener('mouseover', () => {
    if (lampOn) {
        lamp.src = imgDesligada
    } else {
        lamp.src = imgLigada;
    };
});
lamp.addEventListener('mouseleave', () => {
    if (lampOn) {
        lamp.src = imgLigada
    } else {
        lamp.src = imgDesligada;
    };
});

function on() {
    lamp.src = imgLigada;
    lampOn = true;
}
function off() {
    lamp.src = imgDesligada;
    lampOn = false;
}
