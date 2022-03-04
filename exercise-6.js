/*
6. Fácil
Uma loja deseja cadastrar 5 clientes e verificar se o faturamento da loja foi superior a 
loja B (faturamento = 54000).  Se o faturamento atingir esse valor mostre na tela uma 
mensagem contendo em quanto foi superado o faturamento.

*/

const faturamentoB = 54000;

let faturamentoA = 0;


for (let i=1; i<=5; i++) {
  const valor = prompt(`Qual foi a valor da compra do cliente ${i}?`);
  faturamentoA += Number(valor);
}

console.log('Faturamento loja A: ', faturamentoA);
console.log('Faturamento loja B: ', faturamentoB)

if (faturamentoA > faturamentoB) {
  console.log(`O faturamento foi maior da Loja A do que a da Loja B`);
} else {
  console.log(`A loja A não faturou mais do que a loja B`);
}
