var num=parseFloat(prompt("Digite um número"));
var operador = prompt("Digite o operador: Ex: +, -, x, /");
switch(operador){
  case '+':
    for (i=0;i<=10; i++){
    total=num+i;
    console.log(`A tabuada do número ${num} com o operador de ${operador} é ${num} + ${i} = ${total}`);
    }
    break;
  case 'x':
    for (i=0;i<=10; i++){
    total=num*i;
    console.log(`A tabuada do número ${num} com o operador de ${operador} é ${num} x ${i} = ${total}`);
    }
    break;
  case '-':
    for (i=0;i<=10; i++){
    total=num-i;
    console.log(`A tabuada do número ${num} com o operador de ${operador} é ${num} - ${i} = ${total}`);
    }
    break;     
  case '/':
    for (i=0;i<=10; i++){
    total=num/i;
    console.log(`A tabuada do número ${num} com o operador de ${operador} é ${num} / ${i} = ${total}`);
    }
    break;
  }      
