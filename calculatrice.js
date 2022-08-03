let output = document.getElementById('output');

const afficher = (val) => {
    output.value += val;
}

const effacer = () => {
    output.value = "";
}

const calculer = () => {
    let calcul = output.value;
    output.value = eval(calcul);
}