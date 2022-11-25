let btn= document.querySelector('#menu-btn');
let menu2= document.getElementById('menu');
console.log(menu2);
btn.addEventListener('click', function()
{
    btn.classList.toggle('open');
    
    menu2.classList.toggle('hidden');
    menu2.classList.toggle('flex');
});
