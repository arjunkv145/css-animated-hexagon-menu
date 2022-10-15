document.querySelector('.main').addEventListener('mouseenter', () => {
        document.querySelector('.home').style.transform = "translateX(-50%) translateY(-170%)"
        document.querySelector('.info').style.transform = "translateX(50%) translateY(-110%)"
        document.querySelector('.works').style.transform = "translateX(50%) translateY(10%)"
        document.querySelector('.settings').style.transform = "translateX(-50%) translateY(70%)"
        document.querySelector('.alerts').style.transform = "translateX(-150%) translateY(10%)"
        document.querySelector('.about').style.transform = "translateX(-150%) translateY(-110%)"

        document.querySelectorAll('.secondary').forEach(i => {
            i.style.opacity = "1"
       })
})

document.querySelector('.menu-wrapper').addEventListener('mouseleave', () => {
   document.querySelectorAll('.secondary').forEach(i => {
        i.style.transform = "translateX(-50%) translateY(-50%)"
        i.style.opacity = "0"
   })
})