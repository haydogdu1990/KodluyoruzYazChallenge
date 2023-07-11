let text;
let textArray=[];
let character=[];

text=window.prompt("Metni giriniz.").toLowerCase();

textArray = text.split("");

for(let i=0; i<text.length; i++){
  character.push(textArray.filter(t=> (textArray[i]==t)).length)
}

console.log("En çok tekrar eden harf: "+text[character.indexOf(Math.max(...character))] + " " +Math.max(...character)+ " adet");
