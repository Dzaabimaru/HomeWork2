export function HeaderBurger() {
    document.addEventListener('DOMContentLoaded', () => {
        const burger = document.getElementById('burger');
        const menu = document.getElementById('header__menu');
        const closeMenu = document.getElementById('close-menu');
        const body = document.body;

        
        const toggleMenu = () => {
            menu.classList.toggle('active');
            burger.classList.toggle('active');
            body.classList.toggle('lock'); 
        };

        
        burger.addEventListener('click', (e) => {
            e.stopPropagation(); 
            toggleMenu();
        });

        
        closeMenu.addEventListener('click', () => {
            toggleMenu();
        });

        
        document.addEventListener('click', (e) => {
            const target = e.target;
            const its_menu = target === menu || menu.contains(target);
            const its_burger = target === burger || burger.contains(target);
            const menu_is_active = menu.classList.contains('active');

            if (!its_menu && !its_burger && menu_is_active) {
                toggleMenu();
            }
        });

        
        const menuLinks = document.querySelectorAll('.menu__link');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (menu.classList.contains('active')) {
                    toggleMenu();
                }
            });
        });
    });
}