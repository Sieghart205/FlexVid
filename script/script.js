const outline = document.getElementById("outline");
const cursor = document.getElementById("cursor")

window.addEventListener("mousemove",e=>{
    let x = e.clientX
    let y = e.clientY;

    setTimeout(()=>{
        outline.style.top = `${y - 50}px`
        outline.style.left = `${x - 50}px`
    },50)

    cursor.style.top = `${y - 15}px`
    cursor.style.left = `${x - 15}px`
})