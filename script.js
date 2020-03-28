const NAVIGATION = document.getElementById('navigation_list');
// console.log(NAVIGATION); 
NAVIGATION.addEventListener('click', (event) => {
    if ((event.target.classList.contains('nav-element')) || ((event.target.classList.contains('nav-element')))) {
        NAVIGATION.querySelectorAll('a').forEach(elem => elem.classList.remove('nav-selected'));
        event.target.classList.add('nav-selected');

    }
});

document.addEventListener('scroll', onScroll);


function onScroll(event) {
    // console.log(event);
    const current_postition = window.scrollY;
    const links = NAVIGATION.querySelectorAll('a');
    console.log(current_postition);
    anch = document.querySelectorAll('.crutch_anchor')
    for (let i = 0; i < anch.length - 1; i++) {
        if (((anch[i].parentNode.offsetTop + anch[i].offsetTop) <= current_postition) && (anch[i + 1].parentNode.offsetTop > current_postition)) {
            links.forEach(elem => {
                elem.classList.remove('nav-selected')
                if (anch[i].getAttribute('id') === elem.getAttribute('href').substring(1)) {
                    elem.classList.add('nav-selected');
                }
            });
        }
        if (current_postition == (document.documentElement.scrollHeight - document.documentElement.clientHeight)) {
            links.forEach(elem => {
                elem.classList.remove('nav-selected')
                if (elem.getAttribute('href') === '#CONTACT') {
                    elem.classList.add('nav-selected');
                }
            });
        }
    }
    if ((anch[anch.length - 1].parentNode.offsetTop + anch[anch.length - 1].offsetTop) <= current_postition)  {
        links.forEach(elem => {
            elem.classList.remove('nav-selected')
            if (anch[anch.length - 1].getAttribute('id') === elem.getAttribute('href').substring(1)) {
                elem.classList.add('nav-selected');
            }
        });
    }
}


//slider

const IPHONE_VERTICAL = document.querySelector('.iphone-vertical');
const IPHONE_HORISONTAL = document.querySelector('.iphone-horizontal');
const IPHONE_VERTICAL_SCREEN = document.querySelector('.iphone-vertical>.iphone-screen')
const IPHONE_HORISONTAL_SCREEN = document.querySelector('.iphone-horizontal>.iphone-screen')
IPHONE_VERTICAL.addEventListener('click', (event) => {
    if(event.target.classList.contains('ipnohe-body') || event.target.classList.contains('iphone-screen')){
        console.log(event.target.classList);
        if (IPHONE_VERTICAL_SCREEN.classList.contains('screen-off')){
            IPHONE_VERTICAL_SCREEN.classList.remove('screen-off');
        }else {
            IPHONE_VERTICAL_SCREEN.classList.add('screen-off');
        }
    } 
});

IPHONE_HORISONTAL.addEventListener('click', (event) => {
    if(event.target.classList.contains('ipnohe-body') || event.target.classList.contains('iphone-screen')){
        console.log(event.target.classList);
        if (IPHONE_HORISONTAL_SCREEN.classList.contains('screen-off')){
            IPHONE_HORISONTAL_SCREEN.classList.remove('screen-off');
        }else {
            IPHONE_HORISONTAL_SCREEN.classList.add('screen-off');
        }
    } 
});



const PORTFOLIO_CONTAINER = document.getElementById('portfolio__gallery');
// console.log(PORTFOLIO_CONTAINER);
PORTFOLIO_CONTAINER.addEventListener('click', (event) => {
    if (event.target.classList.contains('portfolio__preview-container')) {
        PORTFOLIO_CONTAINER.querySelectorAll('.portfolio__preview-container').forEach(elem => elem.classList.remove('portfolio__gallery_selected'));
        event.target.classList.add('portfolio__gallery_selected');
    }
});




const portfolio_tags = document.querySelectorAll('.portfolio__preview-container');
const num_len = portfolio_tags.length;
const mass_num2 =[num_len];
for(let i = 0; i<num_len; i++){
    mass_num2[i] = portfolio_tags[i].cloneNode(true);
}
const mass_parent =  document.querySelector('.portfolio__preview-container').parentElement;
mass_parent.innerHTML = '';
for(let i = 0; i<num_len; i++){
    mass_parent.append(mass_num2[i]);
}


const TAGS_CONTAINER = document.getElementById('portfolio__tags-box');
console.log(TAGS_CONTAINER);
TAGS_CONTAINER.addEventListener('click', (event) => {
    // console.log(event.target);
    if (event.target.classList.contains('portfolio__tag')) {
        TAGS_CONTAINER.querySelectorAll('.portfolio__tag').forEach(elem => elem.classList.remove('tag_selected'));
        event.target.classList.add('tag_selected');
        // shuffle(mass_num);
        // // console.log(document.querySelectorAll('.portfolio__preview-container'));
        // document.querySelectorAll('.portfolio__preview-container').forEach((elem, index) => {
        //     // console.log(elem,index);
        //     mass_num.forEach(class_ord => {
        //         elem.classList.remove(class_ord);
        //     });
        //     elem.classList.add(mass_num[index]);
        // });
        shuffle(mass_num2);
        mass_parent.innerHTML = '';
        for(let i = 0; i<num_len; i++){
            mass_parent.append(mass_num2[i]);
        }
    }
})



function shuffle(arr) {
    let j, temp;
    for (let i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    return arr;
}


const BUTTON =          document.getElementById('submit_button');
const CLOSE_BUTTON =    document.getElementById('close_button');

const MYFORM =          document.getElementById('my_lovely_form')

// BUTTON.addEventListener('click', (event) =>{
//     const subject = document.getElementById('subject').value.toString();
//     document.getElementById('result').innerText = subject;
//     document.getElementById('message_block').classList.remove('hidden_message');
// });

MYFORM.addEventListener('submit', (event) =>{
    // event.stopPropagation();
    event.preventDefault();
    document.body.classList.add('cut_document');
    const subject = document.getElementById('subject').value.toString();
    const description = document.getElementById('describe-detail').value.toString();
    document.getElementById('sb_result').innerText = subject == '' ? 'No subject' : `Subject: ${subject}`; 
    document.getElementById('dscr_result').innerText = description == '' ? 'No description' : `Description: ${description}`;
    document.getElementById('message_block').classList.remove('hidden_message');
}); 




CLOSE_BUTTON.addEventListener('click', (event) =>{
    document.body.classList.remove('cut_document');
    document.getElementById('message_block').classList.add('hidden_message');
});


let slides = document.querySelectorAll('.iphones-box');
let current_slide = 0;
let flag_is_enabled = true;

function hideSlide(direction){
    flag_is_enabled = false;
    slides[current_slide].classList.add(direction);
    slides[current_slide].addEventListener('animationend', function () {
        this.classList.remove('slide_active', direction);
    });
}
function showSlide(direction){
    slides[current_slide].classList.add('slide_next', direction);
    slides[current_slide].addEventListener('animationend', function () {
        this.classList.remove('slide_next', direction);
        this.classList.add('slide_active');
        flag_is_enabled = true;
    });
}



function changeCurrentSlide(n){
 current_slide = (n + slides.length)% slides.length;
}
function previousSlide(n) {
    hideSlide('to-right');
    changeCurrentSlide(n - 1); 
    showSlide('from-left')
}
function nextSlide(n) {
    hideSlide('to-left');
    changeCurrentSlide(n + 1);
    showSlide('from-right');
}

document.querySelector('.slider-left').addEventListener('click', function() {
    if(flag_is_enabled){
        previousSlide(current_slide);

    }
});


document.querySelector('.slider-right').addEventListener('click', function() {
    if(flag_is_enabled){
        nextSlide(current_slide);

    }
});