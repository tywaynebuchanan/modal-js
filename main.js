'use strict'
const btns = document.querySelectorAll(".show-modal");
const closebtn = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const body = document.querySelector("body");
const overlay = document.querySelector(".overlay");

const openModal = () =>{
    modal.classList.remove("hidden");
        overlay.classList.remove("hidden");

}

const closeModal = () =>{
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

for (let i = 0; i < btns.length; i++){
    btns[i].addEventListener("click",openModal)
}

closebtn.addEventListener("click",closeModal)
overlay.addEventListener("click",closeModal)
document.addEventListener("keydown",(e)=>{
    if(e.key === "Escape" && !modal.classList.contains("hidden")){
            closeModal();
    }
})