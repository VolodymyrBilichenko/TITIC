const refs = {
    video: document.getElementById('myVideo'),
    videoLink: document.querySelector('.video-link'),
    modal: document.getElementById('videoModal'),
    closeModal: document.querySelector('.close-modal'),
    modalVideo: document.querySelector('.modalVideo'),
};

refs.videoLink.addEventListener('click', () => {
    refs.modal.style.display = 'block';
    refs.modalVideo.play();
});

refs.closeModal.addEventListener('click', () => {
    closeModal();
});

refs.modal.addEventListener('click', function (event) {
    if (event.target === refs.modal || event.target === refs.closeModal) {
        closeModal();
    }
});

function closeModal() {
    refs.modal.style.display = 'none';
    refs.modalVideo.pause();
}


const header = document.querySelector('.header');
const headerInner = document.querySelector('.header__inner');

document.addEventListener('scroll', scrollHeader);

function scrollHeader() {
    if (window.pageYOffset > 100) {
        header.classList.add('header__scrolled')
        headerInner.classList.add('header__style')
    } else {
        header.classList.remove('header__scrolled')
        headerInner.classList.remove('header__style')
    }
}



const image = document.getElementsByClassName('thumbnail');
new simpleParallax(image, {
    delay: .6,
    transition: 'cubic-bezier(0,0,0,6)',
    overflow: true,
    scale: 1.4,
});