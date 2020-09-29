// Font scaling
// let windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
// setHtmlSize();

// function setHtmlSize() {
//     if (windowWidth < 1400 && windowWidth >= 320) {
//         document.getElementsByTagName('html')[0].style.fontSize = (windowWidth / 1400) * 10 + "px";
//     } else if (windowWidth >= 1400) {
//         document.getElementsByTagName('html')[0].style.fontSize = "10px";
//     } else if (windowWidth < 320) {
//         document.getElementsByTagName('html')[0].style.fontSize = (windowWidth / 320) * 10 + "px";
//     };
// };
// window.addEventListener('resize', function () {
//     windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body
//         .clientWidth;
//     setHtmlSize();
// });
// window.addEventListener("orientationchange", function () {
//     setTimeout(() => {
//         window.location.reload()
//     }, 500);
// });

// "Note" button operation
const note = document.querySelector('.menu__note');
const file = document.getElementsByTagName('audio')[0];
const logo = document.getElementsByClassName('menu__link')[0];
const backBtn = document.getElementsByClassName('welcome__back')[0];
const writeBtn = document.getElementsByClassName('write')[0];
const submitBtn = document.getElementsByClassName('form__submit')[0];
const links = document.getElementsByClassName('links__social');
const spans = document.getElementsByClassName('span__hover');
const numbers = document.getElementsByClassName('number__hover');
const inputs = document.getElementsByClassName('form__input');

note.addEventListener('click', function () {
    note.classList.toggle('menu__note_action');

    if (note.classList.contains('menu__note_action')) {
        file.play();

        if (logo != undefined) {
            logo.style.color = '#438A5E';
        }

        if (backBtn != undefined) {
            backBtn.classList.add('welcome__back-cc');
        }

        if (writeBtn != undefined) {
            writeBtn.classList.add('write-cc');
        }

        if (submitBtn != undefined) {
            submitBtn.classList.add('submit-cc')
        }

        // links
        for (let index = 0; index < links.length; index++) {
            links[index].style.color = '#438A5E';
        }

        // spans
        for (let index = 0; index < spans.length; index++) {
            spans[index].classList.add('hover-cc');
        }

        // numbers
        for (let index = 0; index < numbers.length; index++) {
            numbers[index].classList.add('number__hover-cc');
        }

        // inputs
        if (inputs != undefined) {
            for (let index = 0; index < inputs.length; index++) {
                inputs[index].classList.add('input-cc');
            }
        }
    } else {
        file.pause();

        if (logo != undefined) {
            logo.style.color = '#C1433C';
        }

        if (backBtn != undefined) {
            backBtn.classList.remove('welcome__back-cc');
        }

        if (writeBtn != undefined) {
            writeBtn.classList.remove('write-cc');
        }

        if (submitBtn != undefined) {
            submitBtn.classList.remove('submit-cc')
        }

        for (let index = 0; index < links.length; index++) {
            links[index].style.color = '#C1433C';
        }

        for (let index = 0; index < spans.length; index++) {
            spans[index].classList.remove('hover-cc');
        }

        for (let index = 0; index < numbers.length; index++) {
            numbers[index].classList.remove('number__hover-cc');
        }

        if (inputs != undefined) {
            for (let index = 0; index < inputs.length; index++) {
                inputs[index].classList.remove('input-cc');
            }
        }
    }
})

// Parallax
let sceneOne = document.getElementById('scene-one'),
    sceneTwo = document.getElementById('scene-two');
// parallaxOne = new Parallax(sceneOne, {        
//     relativeInput: true}), 
if (sceneOne != undefined || sceneTwo != undefined) {
    parallaxOne = new Parallax(sceneOne),
        parallaxTwo = new Parallax(sceneTwo);
}


// Scroll
let isScrolling = false;

window.addEventListener("scroll", throttleScroll, false);

function throttleScroll(e) {
    if (isScrolling == false) {
        window.requestAnimationFrame(function () {
            scrolling(e);
            isScrolling = false;
        });
    }
    isScrolling = true;
}

document.addEventListener("DOMContentLoaded", scrolling, false);

let scrollItems = document.querySelectorAll(".scroll");

function scrolling(e) {
    for (let i = 0; i < scrollItems.length; i++) {
        let scrollItem = scrollItems[i];

        if (isPartiallyVisible(scrollItem)) {
            scrollItem.classList.add("animate__animated");
            scrollItem.classList.add("animate__fadeIn");
        }
    }
}

function isPartiallyVisible(el) {
    let elementBoundary = el.getBoundingClientRect();
    let top = elementBoundary.top;
    let bottom = elementBoundary.bottom;
    let height = elementBoundary.height;

    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

function isFullyVisible(el) {
    let elementBoundary = el.getBoundingClientRect();
    let top = elementBoundary.top;
    let bottom = elementBoundary.bottom;

    return ((top >= 0) && (bottom <= window.innerHeight));
}

// Preloader
const loader = (_success) => {
    let obj = document.querySelector('.preloader'),
        inner = document.querySelector('.preloader_inner'),
        page = document.querySelector('body');

    obj.classList.add('show');
    page.classList.remove('show');

    let w = 1995,
        t = setInterval(() => {
            w = w + 1;
            inner.textContent = '— ' + w;
            if (w === 2021) {
                obj.classList.remove('show');
                page.classList.add('show');
                clearInterval(t);
                w = 0;
                if (_success) {
                    return _success();
                }
            }
        }, 120);
}
// Session preloader
if (sessionStorage.getItem('showPreloader') == null) {
    sessionStorage.setItem('showPreloader', 'true');
    loader();
}

// Smooth Scroll
SmoothScroll({
    animationTime: 900,
    stepSize: 60,

    // Acceleration
    accelerationDelta: 50,  // 50
    accelerationMax: 3,   // 3

    // Keyboard Settings
    keyboardSupport: true,  // option
    arrowScroll: 50,    // [px]

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm: true,
    pulseScale: 3,
    pulseNormalize: 1,
})