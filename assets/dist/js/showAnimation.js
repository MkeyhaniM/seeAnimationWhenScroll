let allBoxes = document.querySelectorAll(".boxes")

window.addEventListener("scroll", scroll)

function scroll() {
    let iHeight = window.innerHeight / 1.4;

    allBoxes.forEach(box => {

        if (iHeight > box.getBoundingClientRect().top) {
            console.log(box)
            box.classList.add("show")
        } else {
            box.classList.remove("show")
        }
    })
}