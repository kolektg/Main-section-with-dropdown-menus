let openMenu = document.getElementById('open-menu');
let closeMenu = document.getElementById('close-menu')
let navbar = document.getElementById('navbar');
let features = document.querySelector('#features-arrow') && document.querySelector('.features')
let company = document.querySelector('#company-arrow') && document.querySelector('.company')



function addClassHide (element) {
    if (element.classList !== 'hide'){
        element.classList.add('hide');
    }
    
    return
}

function show (element){
    element.classList.add('show');
}
function removeClassHide (element) {
    
    element.classList.remove('hide');
}

function toggleClass (element ) {
    element.classList.toggle('hide')
}

///////////////////////////// EVENT LISTENERS///////////////////////////////////

openMenu.addEventListener('click', () => {
    removeClassHide(navbar)
})
closeMenu.addEventListener('click', () => {
    addClassHide(navbar);
    addClassHide(document.querySelector('.features ul'))
    addClassHide(document.querySelector('.company ul'))
})


features.addEventListener('click', () => {
    

    if (window.innerWidth > 400 && document.querySelector('.features ul').hasAttribute('id')) {
        document.querySelector('.features ul').removeAttribute('id')
    } else if (window.innerWidth > 400 && !document.querySelector('.features ul').hasAttribute('id')) {
        document.querySelector('.features ul').setAttribute('id', 'hide-desktop')
    }

    toggleClass(document.querySelector('.features ul'));
    
    
    
})
company.addEventListener('click', () => {
    if (window.innerWidth > 400 && document.querySelector('.company ul').hasAttribute('id')) {
        document.querySelector('.company ul').removeAttribute('id')
    } else if (window.innerWidth > 400 && !document.querySelector('.company ul').hasAttribute('id')) {
        document.querySelector('.company ul').setAttribute('id', 'hide-desktop')
    }

    toggleClass(document.querySelector('.company ul'));
    
    
})

window.onload = function() {
    document.querySelector('.features ul').setAttribute('id', 'hide-desktop')
    document.querySelector('.company ul').setAttribute('id', 'hide-desktop')
  };



