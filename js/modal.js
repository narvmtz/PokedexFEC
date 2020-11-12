
 async function ready() {
   var card = document.querySelector(".card");
   if(card){
     card.addEventListener("click", enableStats);
   }
   else{
     console.log("no cargue")
   }
   function enableStats() {
     alert ("Hello World!");
   }

  }

  document.addEventListener("DOMContentLoaded", ready);