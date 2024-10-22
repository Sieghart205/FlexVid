const sec4 = document.getElementById("sec-4");

sec4.addEventListener("mousemove", e => {
    let y = e.clientY;
    let x = e.clientX;
    const bg = document.getElementById("bg");

    bg.style.top = `${y - 960}px`;
    bg.style.left = `${x - 960}px`;
});

const outline = document.getElementById("outline");
const cursor = document.getElementById("cursor")
