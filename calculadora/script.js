let input_1 = document.querySelector(".input1");
let input_2 = document.querySelector(".input2");
let input_3 = document.querySelector(".input3");
let botão = document.querySelector(".botão");
let select = document.querySelector(".select");

botão.addEventListener("click", (event) => {
  event.preventDefault();
  const value = select.options[select.selectedIndex].value;
  let resultado;
  let value1 = Number(input_1.value);
  let value2 = Number(input_2.value);

  if (value === "soma") {
    resultado = soma(value1, value2);
  } else if (value === "subtração") {
    resultado = subtração(value1, value2);
  } else if (value === "multiplicação") {
    resultado = multiplicação(value1, value2);
  } else if (value === "divisão") {
    if (value2 === 0) {
      alert("não é possível dividir qualquer número por 0, tente outra opção.");
    } else resultado = divisão(value1, value2);
  }

  input_3.value = resultado;
});

clear.addEventListener("click", (event) => {
  event.preventDefault();
});

function soma(a, b) {
  return a + b;
}

function multiplicação(a, b) {
  return a * b;
}

function subtração(a, b) {
  return a - b;
}

function divisão(a, b) {
  return a / b;
}
