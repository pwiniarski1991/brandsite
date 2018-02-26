const elemsDOM = {
    button: document.querySelector('.mainHeader__nav__mobile'),
    menu: document.querySelector('.mainHeader__nav__menu')
}
const actionScripts = {
    toggleMenu: function(menu) {
        if(menu.classList.contains('mainHeader__nav__menu--active')) {
            menu.classList.remove('mainHeader__nav__menu--active');
        }
        else {
            menu.classList.add('mainHeader__nav__menu--active');
        }
    },
    setActive: function(button) {
        if(button.classList.contains('mainHeader__nav__mobile--active')) {
            button.classList.remove('mainHeader__nav__mobile--active');
        }
        else {
            button.classList.add('mainHeader__nav__mobile--active');
        }
    }
}
document.addEventListener('DOMContentLoaded',function(){
    elemsDOM.button.addEventListener('click',function(){
        actionScripts.setActive(elemsDOM.button);
        actionScripts.toggleMenu(elemsDOM.menu);
    },false);
},false);