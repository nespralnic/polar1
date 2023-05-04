//key must be dom element id
//left menu translations in leftMenus.js

let esp = {
    _language : 'esp',
    mainTitle1: "SONIDO DIRECTO",
    mainTitle2: "EDICION Y MEZCLA",
    sectionTitleDestacados: 'TRABAJOS<div class="section-title-underline active"></div>',
    sectionTitleDestacadosFooter: "Más trabajos!",
    parallaxSoluciones: "SOLUCIONES",
    parallaxSonoras: "SONORAS",
    sectionTitleEquipo: 'DISEÑO DE SONIDO<div class="section-title-underline active"></div>',
    equipoMasInfo1: "más info",
    equipoMasInfo2: "más info",
    equipoMasInfo3: "más info",
    sloganText: 'Diagrama Polar aporta una visión personal, conceptual y narrativa del audio como elemento indispensable en el desarrollo de una obra audiovisual.',
    sectionTitleContacto: 'CONTACTO<div class="section-title-underline active"></div>', 
    formName: "Nombre",
    email: "Correo electrónico",
    repeatEmail: "Repetir correo electrónico",
    message: "Mensaje",
    contactoEnviar: "ENVIAR"
}

let eng = {
    _language : 'eng',
    mainTitle1: "LOCATION SOUND",
    mainTitle2: "EDITING & MIXING",
    sectionTitleDestacados: 'PROJECTS<div class="section-title-underline active"></div>',
    sectionTitleDestacadosFooter: "More projects!",
    parallaxSoluciones: "SOUND",
    parallaxSonoras: "SOLUTION",
    sectionTitleEquipo: 'SOUND DESIGN<div class="section-title-underline active"></div>',
    equipoMasInfo1: "find more",
    equipoMasInfo2: "find more",
    equipoMasInfo3: "find more",
    sloganText: 'Diagrama Polar provides a personal, conceptual, and narrative vision of audio as an essential element in the development of an audiovisual work',
    sectionTitleContacto: 'CONTACT US<div class="section-title-underline active"></div>',
    formName: "Name",
    email: "E-mail",
    repeatEmail: "Repeat e-mail",
    message: "Message",
    contactoEnviar: "SEND"

}

let cat = {
    _language : 'cat',
    mainTitle1: "SO DIRECTE",
    mainTitle2: "EDICIÓ I MESCLA",
    sectionTitleDestacados: 'TREBALLS<div class="section-title-underline active"></div>',
    sectionTitleDestacadosFooter: "Més treballs!",
    parallaxSoluciones: "SOLUCIONS",
    parallaxSonoras: "SONORES",
    sectionTitleEquipo: 'DISSENY DÉ SO<div class="section-title-underline active"></div>',
    equipoMasInfo1: "més info",
    equipoMasInfo2: "més info",
    equipoMasInfo3: "més info",
    sloganText: "Diagrama Polar aporta una visió personal, conceptual i narrativa de l'àudio com a element indispensable en el desenvolupament d'una obra audiovisual",
    sectionTitleContacto: 'CONTACTE<div class="section-title-underline active"></div>', 
    formName: "Nombre",
    email: "Correo electrónico",
    repeatEmail: "Repetir correo electrónico",
    message: "Mensaje",
    contactoEnviar: "ENVIAR"
}

let fra= {
    _language : 'fra',
    mainTitle1: "SON DIRECT",
    mainTitle2: "MONTAGE ET MIXAGE",
    sectionTitleDestacados: 'TRAVAUX<div class="section-title-underline active"></div>',
    sectionTitleDestacadosFooter: "Plus de travaux!",
    parallaxSoluciones: "SOLUTIONS",
    parallaxSonoras: "SONORES",
    sectionTitleEquipo: 'DESIGN SONORE<div class="section-title-underline active"></div>',
    equipoMasInfo1: "plus d´infos",
    equipoMasInfo2: "plus d´infos",
    equipoMasInfo3: "plus d´infos",
    sloganText: "Diagrama Polar offre une vision personnelle, conceptuelle et narrative du son en tant qu'élément indispensable dans le développement d'une œuvre audiovisuelle",
    sectionTitleContacto: 'CONTACT<div class="section-title-underline active"></div>', 
    formName: "Nom",
    email: "E-mail",
    repeatEmail: "Répéter l'email",
    message: "Message",
    contactoEnviar: "ENVOYER"
}

let por = {
    _language : 'por',
    mainTitle1: "SOM DIRETO",
    mainTitle2: "EDIÇÃO E MIXAGEM",
    sectionTitleDestacados: 'TRABALHOS<div class="section-title-underline active"></div>',
    sectionTitleDestacadosFooter: "Mais trabalhos!",
    parallaxSoluciones: "SOLUÇÕES",
    parallaxSonoras: "SONORAS",
    sectionTitleEquipo: 'DESIGN DE SOM<div class="section-title-underline active"></div>',
    equipoMasInfo1: "mais informações",
    equipoMasInfo2: "mais informações",
    equipoMasInfo3: "mais informações",
    sloganText: "",
    sectionTitleContacto: 'CONTATO<div class="section-title-underline active"></div>', 
    formName: "Nome",
    email: "E-mail",
    repeatEmail: "Repetir e-mail",
    message: "Mensagem",
    contactoEnviar: "ENVIAR"
}


const translating = (Obj) => {
    currentLanguage = Obj['_language']
    languageButtonsUpdate(currentLanguage)
    
    Object.keys(Obj).forEach((key) => {
        let el = document.getElementById(key)
        if (el == null) {
            return
        }else{
            //if value is empty print ESP
            if (Obj[key] == ''){
                //check if its input type
                (el.type == "text" || el.type == "textarea") ? el.placeholder = esp[key] : el.innerHTML = esp[key]
            } else {
                //chek if its input or textarea type
                (el.type == "text" || el.type == "textarea") ? el.placeholder = Obj[key] : el.innerHTML = Obj[key] 
            }
        }   
    })
}

let currentLanguage = 'esp'


let queryParams = new URLSearchParams(window.location.search);
let queryEntries = queryParams.entries();
let { lan } = Object.fromEntries(queryEntries);

window.onload = () => {

    //get current language from browser
    let selected = ""    
    let switchOption = navigator.language

    //get language from queryString
    let checkQueryManipulation = (lan == 'es' || lan == "en" || lan == "ca" || lan == "fr" || lan == "it")
    if (lan != 'undefined' && checkQueryManipulation){
        switchOption = lan
    }

    console.log(switchOption);

    switch (switchOption) {
        case 'es-ES':
            selected = esp
            currentLanguage = 'esp'
            break;
        case 'es':
            selected = esp
            currentLanguage = 'esp'
            break;
        case 'ca':
            selected = cat
            currentLanguage = 'cat'
            break;
        case 'en':
            selected = eng
            currentLanguage = 'eng'
            break;
        default:
            console.log('oy')
            selected = esp
            currentLanguage = 'esp'
            break;
    }

    

    console.log(currentLanguage);
    
    //esp is default
    if (currentLanguage != 'esp'){
        languageButtonsUpdate(currentLanguage)
        translating(selected)
    }
    startObserver()
}

// language buttons
function languageButtonsUpdate(lan){
    let languageBox = document.querySelector('.language-box')
    let divEng = '<div class="box" onclick="translating(eng)"><img src="./img/flag/bandera-eng.PNG" title="English"></div>'
    let divEsp = '<div class="box" onclick="translating(esp)"><img src="./img/flag/bandera-esp.PNG" title="Español"></div>'
    let divCat = '<div class="box" onclick="translating(cat)"><img src="./img/flag/bandera-cat.PNG" title="Catalá"></div>'
    let divFra = '<div class="box" onclick="translating(fra)"><img src="./img/flag/bandera-fra.PNG" title="François"></div>'
    let divPor = '<div class="box" onclick="translating(por)"><img src="./img/flag/bandera-por.PNG" title="Portugues"></div>'

    switch (lan) {
        case 'esp':
            languageBox.innerHTML = divEng + divCat + divFra + divPor
            break;
        case 'eng':
            languageBox.innerHTML = divEsp + divCat + divFra + divPor
            break;
        case 'cat':
            languageBox.innerHTML = divEsp + divEng + divFra + divPor
        break;
        case 'fra':
            languageBox.innerHTML = divEsp + divEng + divCat + divPor
        break;
        case 'por':
            languageBox.innerHTML = divEsp + divEng + divFra + divCat
        break;    
        default:
            break;
    }

}
