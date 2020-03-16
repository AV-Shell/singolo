const NAVIGATION = document.getElementById('navigation_list');

NAVIGATION.addEventListener('click', (event) => {
    if ( (event.target.classList.contains('nav-element')) || ((event.target.classList.contains('nav-element')) )){
        NAVIGATION.querySelectorAll('a').forEach(elem => elem.classList.remove('nav-selected'));
        event.target.classList.add('nav-selected')

    }
})