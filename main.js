const toggle=document.querySelector(".toggle");
const starterPrice=document.getElementById("starter-price");
const ProPrice=document.getElementById("Pro-price");
toggle.addEventListener("change",()=>{
    if(toggle.checked){
        starterPrice.innerHTML='Rs.1299 <span>/year</span>';
        ProPrice.innerHTML='Rs.3299 <span>/year</span>';
    }
    else{
        starterPrice.innerHTML='Rs.119 <span>/month</span>';
        ProPrice.innerHTML='Rs.599 <span>/month</span>';
    }
})
