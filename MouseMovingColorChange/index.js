var rect = document.querySelector("#center");

rect.addEventListener("mousemove", (details) => {
    // console.log(details.clientX,details.clientY)
    var reactanglelocation = rect.getBoundingClientRect();
    var insideRect = details.clientX - reactanglelocation.left;
    // console.log(insideRect)
    if (insideRect < reactanglelocation.width / 2) {
        var redColor = gsap.utils.mapRange(0, reactanglelocation.width / 2, 255, 0, insideRect);
        gsap.to(rect, {
            backgroundColor: `rgb(${redColor},0,0)`,
            ease: Power4
        });
    } else {
        var greenColor = gsap.utils.mapRange( reactanglelocation.width / 2,reactanglelocation.width, 255, 0, insideRect);
        gsap.to(rect, {
            backgroundColor: `rgb(0,${greenColor},0)`,
            ease: Power4
        });
    }
})

rect.addEventListener("mouseleave",()=>{
    // rect.style.backgroundColor="white"
    gsap.to(rect,{
        backgroundColor:"white"
    })
})

