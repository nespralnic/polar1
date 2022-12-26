//form success message
let queryString = window.location.href;

if (queryString.includes('scss=1')){
    
    let div = document.querySelector('.form-success')
    div.style.display = 'flex';
}

/*

<form action="https://formsubmit.co/niconespral@gmail.com" method="POST" class="contacto-form">
<input type="text" class="name form-entry" placeholder="Nombre" id="name" name="Nombre" required>
<input type="text" class="mail form-entry" placeholder="eMail" id="email" name="Email" required> 
<div class="form-entry-repeat"><input type="text" class="mail form-entry" placeholder="Repeat eMail" id="repeatEmail" name="repetirEmail" required> <span class="email-confirm"><img src="./img/icon-ok.png" alt=""></span></div>
<textarea class="form-entry message" placeholder="Mensaje" name="Mensaje" required></textarea>
<button class="form-btn disabled" type="submit" >ENVIAR</button>

<input type="hidden" name="_subject" value="Mensaje de diagramapolar.com">
<input type="hidden" name="_captcha" value="false">
<input type="hidden" name="_next" value="https://nespralnic.github.io/polar1/home.html?scss=1#contacto">
</form>
*/

let mailInput = document.getElementById('email')
let repeatEmailInput = document.getElementById('repeatEmail')
let divConfirm = document.querySelector('.email-confirm')
let formBtn = document.querySelector('.form-btn')

let mail = mailInput.value
let repeatEmail = repeatEmailInput.value

divConfirm.innerHTML = ''

function print(){
    console.log('mail: ' + mail + '. Repeat:' + repeatEmail);
    if (mail == '' && repeatEmail == ''){
        divConfirm.innerHTML = '';
        formBtn.disabled = true

    } else if (mail != repeatEmail) { 
        divConfirm.innerHTML = '<img src="./img/icon-not-ok.png" alt="">'
        formBtn.disabled = true
    } else if (mail == repeatEmail && mail.includes('@') ){
        divConfirm.innerHTML = '<img src="./img/icon-ok.png" alt="">'
        formBtn.disabled = false
        
    }
}

mailInput.addEventListener( 'input', () =>{
    mail = document.getElementById('email').value
    print()
} )


repeatEmailInput.addEventListener( 'input', () =>{
    repeatEmail = document.getElementById('repeatEmail').value
    print()
} )