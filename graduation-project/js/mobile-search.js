export function mobileSearch() {
    document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.querySelector('.header__search-form');
    const searchContainer = document.querySelector('.header__search-container');
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.mobile-search-btn');
    const overlay = document.getElementById('overlay');

    const openSearch = (e) => {
        if (window.innerWidth <= 576) {
            e.preventDefault();
            searchForm.classList.add('active');
            overlay.classList.add('active');
            document.body.classList.add('lock');
            setTimeout(() => searchInput.focus(), 100);
        }
    };

    const closeSearch = () => {
        searchForm.classList.remove('active');
        overlay.classList.remove('active');
        document.body.classList.remove('lock');
        searchInput.value = ''; 
    };

    searchBtn.addEventListener('click', openSearch);

    overlay.addEventListener('click', closeSearch);

    searchForm.addEventListener('click', (e) => {
        if (searchForm.classList.contains('active') && !searchContainer.contains(e.target)) {
            closeSearch();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchForm.classList.contains('active')) {
            closeSearch();
        }
    });

    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            closeSearch();
        }
    });
});



}

