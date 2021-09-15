let logo = document.getElementsByClassName("logo"); 
let startmenu = document.getElementsByClassName("startmenu") [0]
logo[0].addEventListener("click", ()=>{
    if (startmenu.style.bottom == `45px`) {
        startmenu.style.bottom = `-545px`;
    }
    else{
        startmenu.style.bottom = `45px`;
    }
})
let notify = document.getElementsByClassName("notify"); 
let axncenter = document.getElementsByClassName("axncenter")[0]
notify[0].addEventListener("click", ()=>{
    if (axncenter.style.right == `5px`) {
        axncenter.style.right = `-305px`;
    } else {
        axncenter.style.right = `5px`;
    }
})