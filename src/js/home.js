const menu = document.querySelector('.menu-opener');
const menuArea = document.querySelector('nav');

function menuToggle(){
    if(menuArea.style.display == 'none'){
        menuArea.style.display = 'block'
    }else{
        menuArea.style.display = 'none'
    }
}

menu.addEventListener('click', menuToggle)