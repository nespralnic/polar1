// hardcode pictures
let picsBase = [
    {
    "id": 1,
    "url": "./img/pelis/afterthe.jpeg",
    "categories": []
    },
    {
    "id": 2,
    "url": "./img/pelis/reygitano.jpg",
    "categories": []
    },
        {
    "id": 3,
    "url": "./img/pelis/biutiful.jpg",
    "categories": []
    },
    {
    "id": 4,
    "url": "./img/pelis/blackhollow.jpg",
    "categories": []
    },   
    {
    "id": 5,
    "url": "./img/pelis/bloodbonding.jpg",
    "categories": []
    },
        {
    "id": 6,
    "url": "./img/pelis/contetrencat.jpeg",
    "categories": []
    },
    {
    "id": 7,
    "url": "./img/pelis/cruzdelsur.jpeg",
    "categories": []
    },
    {
    "id": 8,
    "url": "./img/pelis/diezmil.jpg",
    "categories": []
    },
    {
    "id": 9,
    "url": "./img/pelis/elperdido.jpg",
    "categories": []
    },
        {
    "id": 10,
    "url": "./img/pelis/exile.jpg",
    "categories": []
    },
    {
    "id": 11,
    "url": "./img/pelis/lagallina.jpg",
    "categories": []
    },   
    {
    "id": 12,
    "url": "./img/pelis/luz.jpg",
    "categories": []
    },
        {
    "id": 13,
    "url": "./img/pelis/maniac.jpeg",
    "categories": []
    },
    {
    "id": 14,
    "url": "./img/pelis/monstresdepaper.jpg",
    "categories": []
    },
    {
    "id": 15,
    "url": "./img/pelis/nana.jpeg",
    "categories": []
    },   
    {
    "id": 16,
    "url": "./img/pelis/plenamar.jpg",
    "categories": []
    },
        {
    "id": 17,
    "url": "./img/pelis/prescindibles.jpg",
    "categories": []
    },
    {
    "id": 18,
    "url": "./img/pelis/recursoshumanos.jpg",
    "categories": []
    },
    {
    "id": 19,
    "url": "./img/pelis/red dress.jpg",
    "categories": []
    },
    {
    "id": 20,
    "url": "./img/pelis/todoparecia.jpg",
    "categories": []
    },
]

//open window on top
/*
window.onbeforeunload = () => {
    window.scrollTo(0,0)
}
*/

//DISPLAY DE CARDS

let cardContainer = document.querySelector(".card-container")
let scrollMax=0;
let scrolling = false
let scrollDown = false
let lengthArray = 10
//let contadorIntervalo = 0


//fetch pictures
console.log(picsBase);
let arrayPic = []
picsBase.forEach(element => {
    arrayPic.push(element.url);
});

console.log(arrayPic)

// starting foto delivery
//let arrayPic = [11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]
let counterPic = 0;
let totalPic = arrayPic.length

function deliverPic(arrayPic){
    let x = arrayPic[counterPic]
    counterPic+=1
    return `<img src="${x}" alt="" class="card-image"></img>`
}




let setDisplay = 0
function displayStartF(){
    let initialWidth = window.innerWidth

    switch (true) {
        case initialWidth > 2450 : setDisplay = 14; break;
        case initialWidth > 2275 : setDisplay = 13; break;
        case initialWidth > 2100 : setDisplay = 12; break;
        case initialWidth > 1925 : setDisplay = 11; break;
        case initialWidth > 1750 : setDisplay = 10; break;
        case initialWidth > 1675 : setDisplay = 9; break;
        case initialWidth > 1400 : setDisplay = 8; break;
        case initialWidth > 1225 : setDisplay = 7; break;
        case initialWidth > 1050 : setDisplay = 6; break;
        case initialWidth > 875 : setDisplay = 5; break;
        case initialWidth > 700 : setDisplay = 4; break;
        case initialWidth > 350 : setDisplay = 3; break;
        
        default:
            setDisplay = 2;
            break;
    }

    
    for (let index = 0; index < setDisplay; index++) {
        setTimeout(()=>{
            let contenido = document.createElement("div")
            contenido.classList.add("card","new-card")
            contenido.innerHTML = deliverPic(arrayPic)
            cardContainer.appendChild(contenido);
        },index*200)
        
    }
}

//MAIN
//print 2 complete rows of initial cards depending on viewport size
displayStartF()





//"light" event
window.addEventListener('scroll',()=>{
    scrolling = true
})

// handle event with interval
const interv = setInterval(() => {
    
    //scrolling direction
    if (window.scrollY > scrollMax){
        scrollMax = window.scrollY
        scrollDown = true
    } else {
        scrollDown = false
    }

    
    if (scrolling && scrollDown) {
        scrolling = false;
        //setDisplay completes each row
        for (let index = 0; index < setDisplay; index++) {
            setTimeout( ()=>{
                if (counterPic < totalPic ){
                    let contenido = document.createElement("div")
                    contenido.classList.add("card","new-card")
                    contenido.innerHTML = deliverPic(arrayPic)
                    cardContainer.appendChild(contenido);
                    //console.log(counterPic +" "+ totalPic);
                }else{
                    //console.log("dentro")
                    let footer = document.querySelector(".card-container-footer")
                    footer.classList.add("change")
                    clearInterval(interv)
                    
                }
                },index*300
            )   
        }    
        
    } 
},1200);


//---------------- FIN DISPLAY DE CARDS
