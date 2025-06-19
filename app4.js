
let pound=document.getElementById("amount");

let total=document.getElementById("total");
  
pound.addEventListener("keyup",function(){

   let count =pound.value*0.453592;

 total.innerText=`Your Weight in kg is : ${count}`;

  setTimeout(function(){
  
 total.innerText=`Your Weight in kg is : `;
 pound.value="";
   },10000);
  }
);
   
