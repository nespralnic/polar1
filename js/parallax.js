let parallaxBg = document.getElementById('parallax-bg')
//let giraffe = document.querySelector('.slogan-img')

//get initial giraffe y
//let giraffeHeight = giraffe.getBoundingClientRect().height


window.addEventListener('scroll', ()=>{
    let topCorrection = parallaxBg.getBoundingClientRect().top

        parallaxBg.style.top = topCorrection * -0.3 + 'px';
        console.log( topCorrection);
    
    
    
    
    /*let activeGiraffe = (giraffe.getBoundingClientRect().top - giraffe.getBoundingClientRect().height  )*-1
    
    if ( activeGiraffe > 0 && activeGiraffe < giraffeHeight ){
        giraffe.style.right = activeGiraffe * 0.007 + '%';
    }*/
    
})