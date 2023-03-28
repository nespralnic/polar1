//key must be dom element id
//left menu translations in leftMenus.js

let esp = {
    _language : 'esp',
    mainTitle1: "SONIDO DIRECTO",
    mainTitle2: "EDICION Y MEZCLA",
    sectionTitleDestacados: 'TRABAJOS<div class="section-title-underline active"></div>',
    sectionTitleDestacadosFooter: "Más trabajos!",
    sectionTitleEquipo: 'EQUIPO<div class="section-title-underline active"></div>',
    equipoMasInfo1: "más info",
    equipoMasInfo2: "más info",
    equipoMasInfo3: "más info",
    sectionTitleContacto: 'CONTACTO<div class="section-title-underline active"></div>',
    /* feature para form 
    name:
    email:
    repeatEmail:*/
    contactoEnviar: "ENVIAR"
}

let eng = {
    _language : 'eng',
    mainTitle1: "Direct sound",
    mainTitle2: "Edit and mix",
    sectionTitleDestacados: 'PRODUCTIONS<div class="section-title-underline active"></div>',
    sectionTitleDestacadosFooter: "More productions!",
    sectionTitleEquipo: 'STAFF<div class="section-title-underline active"></div>',
    equipoMasInfo1: "find more",
    equipoMasInfo2: "find more",
    equipoMasInfo3: "find more",
    sectionTitleContacto: 'CONTACT US<div class="section-title-underline active"></div>',
    /* feature para form 
    name:
    email:
    repeatEmail:*/
    contactoEnviar: "ENVIAR"
}

let cat = {
    _language : 'cat',
    mainTitle1: "SO DIRECTE",
    mainTitle2: "EDICIÓ I BARREJA",
    sectionTitleDestacados: 'TREBALLS<div class="section-title-underline active"></div>',
    sectionTitleDestacadosFooter: "Més treballs!",
    sectionTitleEquipo: 'EQUIP<div class="section-title-underline active"></div>',
    equipoMasInfo1: "més info",
    equipoMasInfo2: "més info",
    equipoMasInfo3: "més info",
    sectionTitleContacto: 'CONTACTE<div class="section-title-underline active"></div>',
    /* feature para form 
    name:
    email:
    repeatEmail:*/
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
                el.innerHTML = esp[key]
            } else {
                el.innerHTML = Obj[key]
            }
        }   
    })
}

let currentLanguage = 'esp'

window.onload = () => {
    
    let selected = ""    
    let navLang = navigator.language
    
    switch (navLang) {
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
        case 'en':
            selected = eng
            currentLanguage = 'cat'
        default:
            selected = esp
            currentLanguage = 'esp'
            break;
    }
    console.log(navLang);
    //esp is default
    if (currentLanguage != 'esp'){
        languageButtonsUpdate(currentLanguage)
        translating(selected)
    }
}

// language buttons
function languageButtonsUpdate(lan){
    let languageBox = document.querySelector('.language-box')
    let divEng = '<div class="box" onclick="translating(eng)">ENG</div>'
    let divEsp = '<div class="box" onclick="translating(esp)">ESP</div>'
    let divCat = '<div class="box" onclick="translating(cat)">CAT</div>'

    switch (lan) {
        case 'esp':
            languageBox.innerHTML = divEng + divCat
            break;
        case 'eng':
            languageBox.innerHTML = divEsp + divCat
            break;
        case 'cat':
            languageBox.innerHTML = divEsp + divEng
        break;
        default:
            break;
    }

}
