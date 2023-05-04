class Section {
    constructor(name,msg,top,bottom,fnct){
        this.name = name
        this.element = document.querySelector("."+this.name)
        this.position = this.updatePosition()
        this.height = this.updateHeight()
        this.msg = msg
        this.active = false
        this.top = top
        this.bottom = bottom
        this.once = false
        this.fnct = fnct
    }

    static active = false


    updateHeight() {
        return this.element.getBoundingClientRect().height
    }

    updatePosition() { return this.element.getBoundingClientRect().y }
}

let leftMenu = document.querySelector(".left-menu")
let leftMenutext = document.querySelector(".left-menu-text")

// secciones participantes
// ("html tag","message","top start","bottom end")
// translator adjustements
let sections = [
    new Section("destacados",
    { 
    'esp' : "MÁS TRABAJOS!", 
    'eng' : 'MORE PRODUCTIONS!', 
    'cat' : 'MÉS TREBALLS!',
    'fra' : 'PLUS DE TRAVAUX!',
    'por' : "MAIS TRABALHOS!"
    }
    ,0,200,displayMovieCards()),
    //new Section("slogan","hola",-100,0),
    new Section("equipo", 
    { 
    'esp' : "Link a BIOs", 
    'eng' : 'Link to BIOs', 
    'cat' : 'Link a la BIO',
    'fra' : 'Link pour le bios',
    'por' : "Clique para bios"

},-100,200)
]


const toggleActive = (obj) =>{

    //console.log(" - position: " + obj.updatePosition())
    //console.log(" - height: "+ obj.updateHeight())
    
    const condition = obj.updatePosition() < -obj.top && obj.updatePosition() + obj.updateHeight() > obj.bottom
    obj.active = condition ? true : false

}

justOnceArray = [] //alerts pops up just once
//initialize div outside the box
leftMenu.classList.add("left-menu-display")


window.addEventListener("scroll",()=>{
    let option = sections.find(e => e.active == true)
    Section.active = option ? true : false


    sections.forEach(e => {
        
        toggleActive(e)        
        if (e.active && !justOnceArray.includes(e.name)){
            e.once = true
            leftMenutext.innerHTML = e.msg[currentLanguage] 
            
            leftMenu.classList.add("left-menu-appear")

        } else if (!Section.active) {
            leftMenu.classList.remove("left-menu-appear")
            if (e.once && !justOnceArray.includes(e.name)){
                justOnceArray.push(e.name)
            }
                
        }
        
    });
    
    //console.log("slogan:" + slogan.active);
})
