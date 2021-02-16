
const firstClassFare = 150;
const economyFare = 100;
let num, subTotal = 0, total, vat, fareCalculation;

function getPlusMinusSign(id){
   let sign = document.getElementById(id).id;
    if(sign == "firstClassPlusSign"){
        increase("firstClassInput", firstClassFare);
    }
    else if(sign == "firstClassMinusSign"){
        
        if(document.getElementById("firstClassInput").value > 0){
            decrease("firstClassInput",firstClassFare);}
    }
    else if(sign == "economyClassPlusSign"){
        increase("economyInput", economyFare);
    }
    else if(sign == "economyClassMinusSign"){
        if(document.getElementById("economyInput").value > 0){
            decrease("economyInput", economyFare);

        }
    }
}
function increase(inputField, fare) {
    let input = document.getElementById(inputField);
         num = parseInt(input.value);
        num += 1;
        input.value = ""+ num;
        num = 1;

        
            const h_subTotal = document.getElementById("subtotal");
            fareCalculation = fare * num;
    
        
            subTotal = subTotal + fareCalculation;
             h_subTotal.innerText = subTotal;
            
      
    
            const vat = document.getElementById("vat");
            vat.innerText = subTotal * 0.1;
    
            const total = document.getElementById("total");
            total.innerText = subTotal + parseInt(vat.innerText);
     
 }
function decrease(inputField, fare) {
    let input = document.getElementById(inputField);
         num = parseInt(input.value);
       if(num != 0){ num -= 1;}
        input.value = ""+ num;
        num = 1;

        const h_subTotal = document.getElementById("subtotal");
        fareCalculation = fare * num;
      
        subTotal = subTotal - fareCalculation;
        h_subTotal.innerText = subTotal; 

        const vat = document.getElementById("vat");
        vat.innerText = subTotal * 0.1;
    
        const total = document.getElementById("total");
        total.innerText = subTotal +  parseInt(vat.innerText);
     
}



