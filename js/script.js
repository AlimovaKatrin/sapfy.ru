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
let note = document.querySelector('.menu__note');

note.addEventListener('click', function () {
    note.classList.toggle('menu__note_action');
})

// Parallax
let scene = document.getElementById('scene');
let parallax = new Parallax(scene);