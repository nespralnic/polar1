let queryString = window.location.href;

if (queryString.includes('scss=1')){
    
    let div = document.querySelector('.form-success')
    div.style.display = 'flex';
}
