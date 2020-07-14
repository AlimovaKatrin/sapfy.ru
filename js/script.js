// Font scaling
let windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
setHtmlSize();

function setHtmlSize() {
    if (windowWidth < 1400 && windowWidth >= 576) {
        document.getElementsByTagName('html')[0].style.fontSize = (windowWidth / 1400) * 10 + "px";
    } else if (windowWidth >= 1400) {
        document.getElementsByTagName('html')[0].style.fontSize = "10px";
    } else if (windowWidth < 576) {
        document.getElementsByTagName('html')[0].style.fontSize = (windowWidth / 576) * 10 + "px";
    };
};
window.addEventListener('resize', function () {
    windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body
        .clientWidth;
    setHtmlSize();
});
window.addEventListener("orientationchange", function () {
    setTimeout(() => {
        window.location.reload()
    }, 500);
});

// "Note" button operation
let note = document.querySelector('.menu__note'),
    sun = document.querySelector('.sun');

note.addEventListener('click', function () {
    note.classList.toggle('menu__note_action');

    if(sun != undefined) {
        sun.classList.toggle('action');
    }
    
})

// Parallax
let sceneOne = document.getElementById('scene-one'),
    sceneTwo = document.getElementById('scene-two');
    // parallaxOne = new Parallax(sceneOne, {        
    //     relativeInput: true}), 
    if(sceneOne != undefined || sceneTwo != undefined) {
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
            scrollItem.classList.add("vivify");
            scrollItem.classList.add("pullUp");
            scrollItem.classList.add("delay-300");
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