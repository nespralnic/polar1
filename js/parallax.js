let parallaxBg = document.getElementById('parallax-bg')
console.log(parallaxBg);

window.addEventListener('scroll', ()=>{
    let value = window.scrollY
    console.log(parallaxBg.style.top);
    parallaxBg.style.top = value * -0.3 + 'px';
})