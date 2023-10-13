// Scroll

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}


// Video hero

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

    refs.modalVideo.addEventListener('ended', () => {
        closeModal();
    });
}



function closeModal() {
    refs.modal.style.display = 'none';
    refs.modalVideo.pause();
    refs.modalVideo.currentTime = 0;
}


const header = document.querySelector('.header');
const headerInner = document.querySelector('.header__inner');

document.addEventListener('scroll', scrollHeader);

function scrollHeader() {
    if (window.pageYOffset > 10) {
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

const answerItem = document.querySelectorAll('.answer__item');

answerItem.forEach(item => {

    const itemBody = item.querySelector('.answer__body');
    const answerHeight = itemBody.clientHeight;

    itemBody.style.height = '0px';

    item.querySelector('.answer__head').addEventListener('click', () => {

        const answerBody = item.closest('.answer__item').querySelector('.answer__body');

        itemBody.classList.toggle('answer__body_open');

        if (itemBody.classList.contains('answer__body_open')) {
            itemBody.style.height = answerHeight + 'px';

            exchangeMin(item);
        } else {
            itemBody.style.height = '0px';

            exchangePlus(item);
        }
        
    });
})

function exchangePlus(item) {
    const itemPlus = item.querySelector('.head__plus');
    const itemMin = item.querySelector('.head__min');

    itemMin.style.display = 'none';
    itemPlus.style.display = 'block';
}

function exchangeMin(item) {
    const itemPlus = item.querySelector('.head__plus');
    const itemMin = item.querySelector('.head__min');

    itemPlus.style.display = 'none';
    itemMin.style.display = 'block';
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


// Modal sub menu

const modalSubMenuArr = document.querySelectorAll('.modal__arrow');
const modalSubMenu = document.querySelectorAll('.pages__item__list');

modalSubMenuArr.forEach(item => {
    item.addEventListener('click', (e) => {
        console.log(e.target.closest('li'));
        e.target.closest('li').classList.toggle('pages__item_active');
    })
})

// Swiper

const swiper = new Swiper('.info__photo', {
    loop: true,

    navigation: {
        nextEl: '.custom-next-btn',
        prevEl: '.custom-prev-btn',
    }
})