/////Project Gallery Page
function imgGallery() {
    const highlight = document.querySelector('.gallery-highlight')
    const projectPreviews = document.querySelectorAll('.project-preview img')

    projectPreviews.forEach(preview => {
        preview.addEventListener('click', function () {
            const smallSrc = this.src;
            const bigSrc = smallSrc.replace('png', 'jpg')
            highlight.src = bigSrc
            projectPreviews.forEach(preview => {
                preview.classList.remove('project-active')
            })
            preview.classList.add('project-active')
        })
    })
}
imgGallery()
var swiper = new Swiper('.swiper-container',
    {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 50,
            modifier: 3,
            slideShadows: true,
        },
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });