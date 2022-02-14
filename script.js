const menuEl = document.querySelector('.menu');
const menuPEl = document.querySelector('.menu p');
const listsSocilaEl = document.querySelector('.socila-lists');
const liEments = document.querySelectorAll('.socila-lists li');


menuEl.addEventListener('click', ()=> {
    listsSocilaEl.classList.toggle('hide');
    menuEl.classList.toggle('rotate');
});

liEments.forEach(liEment => {
    liEment.addEventListener('click', ()=> {
        menuPEl.innerHTML = liEment.innerHTML;
        listsSocilaEl.classList.add('hide');
        menuEl.classList.toggle('rotate');
    });
});