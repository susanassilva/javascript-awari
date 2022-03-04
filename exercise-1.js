let num=parseFloat(prompt("Digite um número"));
let operador = prompt("Digite o operador: Ex: +, -, x, /");
let total;
for (let i=0;i<=10; i++){
  switch(operador){
    case '+':
      total=num+i;
      break;

  case '*':
      total=num*i;
      break;
      
  case '-':
      total=num-i;
      break;

  case '/':
      total=num/i;
      break;
 }  
 console.log(`${num} ${operador} ${i} = ${total}`);
}   

