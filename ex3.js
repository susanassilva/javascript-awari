// 3. Faça um programa que verifique e mostre os números entre 1.000 e 2.000 (inclusive) que, 
//quando divididos por ll. produzam resto igual a 2.

for (i=0; i<2000; i++){
  let total=1000+i;
  if (total%11==2 && total<=2000){
    console.log(total);
  }
}
