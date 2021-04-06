// For MenuBar
const menuBtn = document.querySelector('.dialog__menu-btn')
const menu = document.querySelector('.menu')
const overlay = document.querySelector('.overlay')
const openMenu = function(){
    menu.classList.add('show-menu')
    overlay.classList.remove('hidden') 
}
const closeMenu = function(){
    menu.classList.remove('show-menu')
    overlay.classList.add('hidden') 
}

menuBtn.addEventListener('click', openMenu)
overlay.addEventListener('click', closeMenu)
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !overlay.classList.contains('hidden')) {
      closeMenu();
    }
  });

// SearchBar: 
const search = document.querySelector('.dialog__search-bar')
const chatSearch = document.querySelector('.chat__top-btn.search')

search.addEventListener('click', ()=>{
    search.classList.add('outline')
})
chatSearch.addEventListener('click', (e)=>{
    search.classList.add('outline')
    search.focus()
    e.target.classList.add('clicked-btn')
})
search.addEventListener('focusout', ()=>{
    search.classList.remove('outline')
    chatSearch.classList.remove('clicked-btn')
}) 

//Dropdown: 
const menuBar = document.querySelector('.chat__top-btn.menu-bar')
const dropdown = menuBar.querySelector('.dropdown')

menuBar.addEventListener('click', (e)=>{
    dropdown.classList.remove('hidden');
    e.stopPropagation()
})

window.document.addEventListener('click',()=>{
    dropdown.classList.add('hidden');
})











