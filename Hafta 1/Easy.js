let dateOfBirth;
let age;

dateOfBirth=Number(window.prompt("Doğum tarihiniz nedir? (örn:1990)"));

if(typeof dateOfBirth==="number" && dateOfBirth){
  age=2023-dateOfBirth;
  console.log("Yaşınız: "+ age);   
}
else{
  console.log("Lütfen doğum tarihinizi sayısal bir değer olarak giriniz!");  
}
