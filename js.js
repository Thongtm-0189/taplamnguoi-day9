const main = document.getElementById("main")
const rotate = document.getElementById("rotate")
const cover = document.getElementById("cover")
const text = document.getElementById("text")

let count_main = 150;
let count_cover = 0;
/* event */

const byTime = setInterval(loading,50)

/* function */

function loading(){
    text.textContent = parseInt(text.textContent)+1;
    if(text.textContent < 30){
        count_cover+=5
        cover.style.height = count_cover+"px"
        cover.style.width = count_cover+"px"
    }
    else if(text.textContent >=100){
        clearInterval(byTime)
        cover.style.height = "100%"
        cover.style.width = "100%"
        main.style.height = "100%"
        main.style.width = "100%"
        main.style.borderRadius = "0"
        rotate.style.borderRadius = "50%"
        rotate.style.height = "150vh"
        rotate.style.width = "150vh"
        cover.style.borderRadius = "0"
        text.textContent = "Cảm ơn đã bỏ ra vài giây để mình tập làm người"
    }
    else if(text.textContent >=30 && text.textContent <100){
        count_main+=9
        main.style.height = count_main+"px"
        main.style.width = count_main+"px"
    }

}