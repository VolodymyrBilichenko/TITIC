const refs = {
    video: document.getElementById('myVideo'),
    videoLink: document.querySelector('.video-link'),
    modal: document.getElementById('videoModal'),
    closeModal: document.querySelector('.close-modal'),
    modalVideo: document.querySelector('.modalVideo'),
};

if (refs.modal) {
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
}

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




// Services_Page

const answerItems = document.querySelectorAll('.answer__item');

answerItems.forEach((item) => {
  const answerHead = item.querySelector('.answer__head');

  answerHead.addEventListener('click', () => {
    const isActive = item.classList.contains('answer__item_active');

    answerItems.forEach((item) => item.classList.remove('answer__item_active'));

    if (!isActive) {
        item.classList.add('answer__item_active');
        exchangePlus(item);
    } else {
        exchangeMin(item);
    }
  });
});

function exchangePlus(item) {
    const itemPlus = item.querySelector('.head__plus');
    const itemMin = item.querySelector('.head__min');

    if (itemMin.style.display === 'none') {
        itemMin.style.display = 'none';
        itemPlus.style.display = 'block';
    }
}

function exchangeMin(item) {
    const itemPlus = item.querySelector('.head__plus');
    const itemMin = item.querySelector('.head__min');

    if (itemPlus.style.display === 'none') {
        itemPlus.style.display = 'none';
        itemMin.style.display = 'block';
    }
}



// Modal menu

const modalMenu = document.querySelector('.modal__menu');
const modalMenuClose = document.querySelector('.modal__menu_close');
const menuBurger = document.querySelector('.header__burger');

menuBurger.addEventListener('click', () => {
    modalMenu.classList.add('modal__menu_open');
})

modalMenuClose.addEventListener('click', () => {
    modalMenu.classList.remove('modal__menu_open');
})
