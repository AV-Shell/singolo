const NAVIGATION = document.getElementById('navigation_list');
// console.log(NAVIGATION); 
NAVIGATION.addEventListener('click', (event) => {
    if ( (event.target.classList.contains('nav-element')) || ((event.target.classList.contains('nav-element')) )){
        NAVIGATION.querySelectorAll('a').forEach(elem => elem.classList.remove('nav-selected'));
        event.target.classList.add('nav-selected');

    }
});

document.addEventListener('scroll', onScroll);


function onScroll(event){
    // console.log(event);
    const current_postition = window.scrollY;
    const links = NAVIGATION.querySelectorAll('a');
    console.log(current_postition);
    anch = document.querySelectorAll('.crutch_anchor')
    for(let i=0; i< anch.length - 1; i++ ){
        // debugger;

        // console.log('offset elemens', i, anch[i].offsetTop)

        
        if (((anch[i].parentNode.offsetTop + anch[i].offsetTop)<= current_postition) && (anch[i+1].parentNode.offsetTop > current_postition)){
            links.forEach(elem => {
                
                elem.classList.remove('nav-selected')
                if (anch[i].getAttribute('id') === elem.getAttribute('href').substring(1)){
                    elem.classList.add('nav-selected');
                }
                
            });

        }
        if (current_postition == (document.documentElement.scrollHeight - document.documentElement.clientHeight)){
            links.forEach(elem => {
                
                elem.classList.remove('nav-selected')
                if (elem.getAttribute('href') === '#CONTACT'){
                    elem.classList.add('nav-selected');
                }
                
            });   
        }

    }
    

}




const PORTFOLIO_CONTAINER  = document.getElementById('portfolio__gallery');
// console.log(PORTFOLIO_CONTAINER);
PORTFOLIO_CONTAINER.addEventListener('click', (event) =>{
    if (event.target.classList.contains('portfolio__preview-container')){
        PORTFOLIO_CONTAINER.querySelectorAll('.portfolio__preview-container').forEach(elem => elem.classList.remove('portfolio__gallery_selected'));
        event.target.classList.add('portfolio__gallery_selected');
    }
});


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
console.log(TAGS_CONTAINER);
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