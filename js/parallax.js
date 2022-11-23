let parallaxBg = document.getElementById('parallax-bg')
let giraffe = document.querySelector('.slogan-img')

//get initial giraffe y
let giraffeHeight = giraffe.getBoundingClientRect().height

window.addEventListener('scroll', ()=>{
    let value = window.scrollY
    parallaxBg.style.top = value * -0.3 + 'px';
    let activeGiraffe = (giraffe.getBoundingClientRect().top - giraffe.getBoundingClientRect().height  )*-1
    
    if ( activeGiraffe > 0 && activeGiraffe < giraffeHeight ){
        giraffe.style.left = 55 + activeGiraffe * -0.005 + '%';
    }
    
})