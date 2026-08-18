/*
    Color Pallate
*/

let cPlt = document.querySelectorAll(".color-pallate ul li")
let btn = document.querySelector(".cir")
let cP = document.querySelector(".color-pallate")
let cB = document.querySelector(".color-box")

// console.log(document.querySelector(`[data-color="${window.localStorage.color}"]`))
// console.log(window.localStorage.color)

if(window.localStorage.color2){
    document.documentElement.style.setProperty("--main-color",window.localStorage.color2)
    btn.style.backgroundColor = window.localStorage.getItem("color2")
    document.querySelector(`[data-color="${window.localStorage.color2}"]`).classList.add("active")
}

btn.onclick=_=>{
    cP.classList.toggle("hish")
    cB.classList.toggle("hish")
}
cPlt.forEach(li=>{
    li.addEventListener("click",e=>{
        cPlt.forEach((li)=>{
            li.classList.remove("active")
            e.currentTarget.classList.add("active")
            document.documentElement.style.setProperty("--main-color",`${getComputedStyle(document.querySelector("li.active")).getPropertyValue("background-color")}`)
            btn.style.backgroundColor = getComputedStyle(document.querySelector("li.active")).getPropertyValue("background-color")
            window.localStorage.setItem("color2",getComputedStyle(document.querySelector("li.active")).getPropertyValue("background-color"))
        })
    })
})

/*
    UP Arrow
*/
let upBtn = document.getElementById("up")

upBtn.onclick = _=> window.scrollTo({top:0,behavior:"smooth"})

window.onscroll = _=>{
    if(scrollY >= 636){
        upBtn.style.right = "10px"
    }else{
        upBtn.style.right = ""
    }
}
// Scroller section
let theScroller = document.querySelector(".scroller"),
    theHeight = document.documentElement.scrollHeight -document.documentElement.clientHeight ;

window.addEventListener("scroll",_=>{
    let scrollVal = document.documentElement.scrollTop;
    theScroller.style.width = `${(scrollVal/theHeight)*100}%`
});