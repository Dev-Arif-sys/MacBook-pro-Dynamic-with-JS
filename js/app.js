
function updatingChipCost(existPriceId,price){
     let chipExistingPrice=document.getElementById(existPriceId);
     chipExistingPrice.innerText=price
     updatingTotalPrice();
}

function gettingChipCost(costId){
    var chipCost=document.getElementById(costId).innerText;
    chipCost=parseFloat(chipCost);
    return chipCost;
}

let belowTotal=document.getElementById("below-total");
function updatingTotalPrice(){
     let bestPrice=gettingChipCost("best-price");
     let memoryCost=gettingChipCost("memory-cost");
     let storageCost=gettingChipCost("storage-cost");
     let deliveryCharge=gettingChipCost("delivery-charge");

     let total= bestPrice+memoryCost+storageCost+deliveryCharge;
     
     document.getElementById("total-price").innerText=total;  
     belowTotal.innerText=total;
}


// memory cost interaction

document.getElementById("memory-8gb").addEventListener("click",function(){
                   
    updatingChipCost("memory-cost",0)
}) 

document.getElementById("memory-16gb").addEventListener("click",function(){
                   
    updatingChipCost("memory-cost",180)
}) 


// storage cost interaction
document.getElementById("ssd-256gb").addEventListener("click",function(){                 
    updatingChipCost("storage-cost",0)
}) 

document.getElementById("ssd-512gb").addEventListener("click",function(){                 
    updatingChipCost("storage-cost",100)
}) 

document.getElementById("ssd-1tb").addEventListener("click",function(){                 
    updatingChipCost("storage-cost",180)
}) 


// delivery charge interaction
document.getElementById("charge-free").addEventListener("click",function(){                 
    updatingChipCost("delivery-charge",0)
}) 

document.getElementById("charge-20").addEventListener("click",function(){                 
    updatingChipCost("delivery-charge",20)
}) 


// updating below total Section
document.getElementById("coupon-btn").addEventListener("click",function(){
    let couponInput=document.getElementById("coupon-input");
    let totalPrice=gettingChipCost("total-price")
           if(couponInput.value=="stevekaku"){
               let couponDiscount=(totalPrice/100)*20;
               belowTotal.innerText=totalPrice-couponDiscount;
               couponInput.value="";
           }
   })
