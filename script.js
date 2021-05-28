const navBtn = document.querySelector('button.navbutton');
const navigationPanel = document.querySelector('aside');

navBtn.addEventListener('click',() =>{
    navigationPanel.classList.toggle("active");
    navBtn.classList.toggle("active");
})