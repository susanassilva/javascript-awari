/* 9. Fácil
 Faça um programa que receba a idade de dez pessoas e que calcule 
 e mostre a quantidade de pessoas com idade maior ou igual a 18 anos.*/
const users = [];

// Input

for (let i=1; i<=10;i++) {
  const value = prompt(`Qual é a idade do usuário ${i}?`);
  const age = Number(value);
  users.push(age);  

}

// Process
let counter = 0;
for (let i=0; i<=users.length; i++) {
  const value = users[i];
  if (value>=18) {
    counter++;
  }
}


/* 
let counter = 0;

for (let i=1; i<10; i++) {
  const value=prompt("Idade: ");
  const parsedValue=parseInt(value);
  if (parsedValue>=18) {
    counter++;
  }
} 
*/

console.log(`Quantidade de pessoas maiores de idade ${counter}`);




