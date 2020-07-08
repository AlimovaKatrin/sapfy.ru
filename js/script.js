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
    sun.classList.toggle('action');
})

// Parallax
let sceneOne = document.getElementById('scene-one'),
    sceneTwo = document.getElementById('scene-two'),
    // parallaxOne = new Parallax(sceneOne, {        
    //     relativeInput: true}), 
    parallaxOne = new Parallax(sceneOne), 
    parallaxTwo = new Parallax(sceneTwo);