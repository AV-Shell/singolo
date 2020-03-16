const NAVIGATION = document.getElementById('navigation_list');
// console.log(NAVIGATION); 
NAVIGATION.addEventListener('click', (event) => {
    if ( (event.target.classList.contains('nav-element')) || ((event.target.classList.contains('nav-element')) )){
        NAVIGATION.querySelectorAll('a').forEach(elem => elem.classList.remove('nav-selected'));
        event.target.classList.add('nav-selected');

    }
})

const mass_num = [  'ord__1',
                    'ord__2',
                    'ord__3',
                    'ord__4',
                    'ord__5',
                    'ord__6',
                    'ord__7',
                    'ord__8',
                    'ord__9',
                    'ord__10',
                    'ord__11',
                    'ord__12',];



const TAGS_CONTAINER = document.getElementById('portfolio__tags-box');
// console.log(TAGS_CONTAINER);
TAGS_CONTAINER.addEventListener('click', (event) => {
    // console.log(event.target);
    if(event.target.classList.contains('portfolio__tag')){
        TAGS_CONTAINER.querySelectorAll('.portfolio__tag').forEach(elem => elem.classList.remove('tag_selected'));
        event.target.classList.add('tag_selected');
        shuffle(mass_num);
        // console.log(document.querySelectorAll('.portfolio__preview-container'));
        document.querySelectorAll('.portfolio__preview-container').forEach( (elem, index) => {
            // console.log(elem,index);
            mass_num.forEach( class_ord => {
                elem.classList.remove(class_ord);    
            });
            elem.classList.add(mass_num[index]);
        })

    }
})


function shuffle(arr){
    let j, temp;
    for(let i = arr.length - 1; i > 0; i--){
        j = Math.floor(Math.random()*(i));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    return arr;
}