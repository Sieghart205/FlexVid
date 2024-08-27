const Jeisson = document.getElementById("jeisson");
const juli = document.getElementById("juli");

Jeisson.addEventListener("click",()=>{
    const jf = document.getElementById("jeisson-info");
    jf.style.display = "flex";
})

juli.addEventListener("click",()=>{
    const jlf = document.getElementById("juli-info");
    jlf.style.display = "flex";
})

const btn_modal = document.querySelectorAll(".btn-modal")

btn_modal.forEach(e=>{
    e.addEventListener("click",()=>{
        e.parentElement.parentElement.style.display="none";
    })
})