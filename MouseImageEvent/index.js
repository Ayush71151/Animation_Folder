// document.querySelector('#center')
//     .addEventListener("mousemove", function (detailes) {
//         console.log(detailes.clientX, detailes.clientY)
//     })

const throttleFunction = (func, delay) => {

    // Previously called time of the function
    let prev = 0;
    return (...args) => {
        // Current called time of the function
        let now = new Date().getTime();

        // Logging the difference between previously
        // called and current called timings
        // console.log(now - prev, delay);

        // If difference is greater than delay call
        // the function again.
        if (now - prev > delay) {
            prev = now;

            // "..." is the spread operator here
            // returning the function with the
            // array of arguments
            return func(...args);
        }
    }
}

document.querySelector('#center')
    .addEventListener("mousemove", throttleFunction((detailes) => {
        console.log(detailes.clientX, detailes.clientY)
        var div = document.createElement("div");
        div.classList.add('imagediv');
        div.style.left = detailes.clientX + 'px';
        div.style.top = detailes.clientY + 'px';

        var img = document.createElement("img");
        img.setAttribute("src", "1.jpg");
        div.appendChild(img);

        document.body.appendChild(div);
        gsap.to(img, {
            y: "0",
            ease: Power1,
            duration: .2
        })

        gsap.to(img, {
            y: "0",
            delay: .6,
            ease: Power2,

        })
        setTimeout(() => {
            div.remove();
        }, 1000)
    }, 400))
