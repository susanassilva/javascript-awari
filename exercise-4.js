// 4. Faça um programa que leia um valor n, inteiro e positivo, calcule e mostre a seguinte soma: 
// S = 1 + 1/2 + 1/3 + 1/4 + … + 1/n.

let numero=prompt('Digite um número inteiro e positivo');
let soma=0;
for (i=1;i<=numero;i++){
  soma=soma+1/(i);
  console.log(soma);
}
