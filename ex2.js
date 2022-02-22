let num = parseFloat(prompt("Digite um número"));
for (i = 0; i <= 10; i++) {
  let adicao = num + i;
  console.log(`${num} + ${i} = ${adicao}`);
}
for (i = 0; i <= 10; i++) {
  let subtracao = num - i;
  console.log(`${num} - ${i} = ${subtracao}`);
}

for (i = 0; i <= 10; i++) {
  let multiplicacao = num * i;
  console.log(`${num} * ${i} = ${multiplicacao}`);
}

for (i = 0; i <= 10; i++) {
  let divisao = parseInt(num / i);
  if (num == 0 || i == 0 || divisao == 0) {
    console.log(
      `Qualquer divisão com o 0 ou que resulta em 0 tem resultado Indeterminado`
    );
  } else if (num <= -1 && divisao != 0) {
    console.log(`${num} / ${i} = ${divisao}`);
  } else {
    console.log(`${num} / ${i} = ${divisao}`);
  }
}
