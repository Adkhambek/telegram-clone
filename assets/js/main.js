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
    dropdown.classList.add('hidden')
})

//Profile Modal: 

const profile = document.querySelector('.profile')
const chatDetail = document.querySelector('.chat__detail')
const closeBtn = document.querySelector('.close-btn')
const openProfile = function(){
    profile.classList.remove('hidden')
    overlay.classList.remove('hidden') 
}
const closeProfile = function(){
    profile.classList.add('hidden')
    overlay.classList.add('hidden') 
} 

chatDetail.addEventListener('click', openProfile)
overlay.addEventListener('click', closeProfile)
closeBtn.addEventListener('click', closeProfile)
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !chatDetail.classList.contains('hidden')) {
      closeProfile()
    }
  }); 

  //Send Form:

  const textarea = document.querySelector('.chat__message-area')
  const recorder = document.querySelector('.chat__audio-recorder')
  const send = document.querySelector('.submit')
  
  textarea.addEventListener("input", ()=>{
      
  textarea.setAttribute("style", "height:" + (textarea.scrollHeight) + "px;");
      recorder.classList.add('hidden')
      send.classList.remove('hidden')
    if (!textarea.value.length) {
        textarea.style.height = "auto";
        recorder.classList.remove('hidden')
        send.classList.add('hidden')
    }else{
        textarea.style.height = "auto";
        textarea.style.height = (textarea.scrollHeight) + "px";
    } 
    }, false);

// Selecting Chat: 
const chatRight = document.querySelector('.chat__right')
const chatBody = document.querySelector('.chat__body')
const chatFooter = document.querySelector('.chat__footer')
const chatList = document.querySelector('.chat__list')
const selectChat = document.querySelector('.select-chat')
const dialogItem = document.querySelectorAll('.dialog__item')
const textArea = document.querySelector('.chat__message-area')


dialogItem.forEach(value=>{
  
    value.addEventListener('click', ()=>{
        for (const item of dialogItem) {
            if (item.classList.contains('active')) {
                 item.classList.remove('active') 
            }
        }
        value.classList.add('active')
        chatDetail.classList.remove('hidden')
        chatRight.classList.remove('hidden')
        chatFooter.classList.remove('hidden')
        chatList.classList.remove('hidden')
        selectChat.classList.add('hidden')
        chatBody.classList.add('height-auto') 
        
        })
      
})










