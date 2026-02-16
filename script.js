const menu = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('.nav-links');

menu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    

    const icon = menu.querySelector('i');//icon switch
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

document.querySelectorAll('.nav-links a').forEach(link => {//menu close
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});