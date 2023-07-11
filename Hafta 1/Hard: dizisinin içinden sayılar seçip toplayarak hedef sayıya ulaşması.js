let arrNumber=[1,3,4,8,65,42,21,888,40,61,99];
let toplam=0;
let randomNumber;
function myFunction(p1) {
  while (true) {
    randomNumber=arrNumber[Math.floor(Math.random() * arrNumber.length)]
    
    if(toplam<p1 && randomNumber<=(p1-toplam)){
      toplam=toplam+randomNumber;
      console.log(randomNumber+"+");
      console.log("toplam " + toplam);
    }
    else if(toplam==p1){
      console.log("Bitti " + toplam);
      return toplam;
    }
  }
}

console.log(myFunction(1855));
