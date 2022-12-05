let isDown = false;
let startX;
let scrollLeft;


function scrollHeader() {
    const header = $(".js-header");
    let sticky = header.offsetTop;
    if (window.pageYOffset > sticky) {
        $('.js-header-menu').classList.add("sticky");
    } else {
        $('.js-header-menu').classList.remove("sticky");
    }
}

function seeHide(e) {
    e.preventDefault();
    $('.js-answer').removeClass("change-answer-text");

}

function seeNext(e) {
    e.preventDefault();
    const currentComment = $(this);
    const content = currentComment.attr('data-id');
    $(content).addClass("change-answer-text");

}

function goToTop(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 1200);
}

function handleMousedownSlide(e) {
    const slider = $(this);
    isDown = true;
    startX = e.pageX - slider[0].offsetLeft;
    scrollLeft = slider[0].scrollLeft;
}

function handleMouseleaveSlide() {
    isDown = false;
}

function handleMouseupSlide() {
    isDown = false;
}

function handleMousemoveSlide(e) {
    if (!isDown) return;
    e.preventDefault();
    const slider = $(this);
    const x = e.pageX - slider[0].offsetLeft;
    const walk = x - startX;
    slider[0].scrollLeft = scrollLeft - walk;
}

$(document).ready(function () {
    // $(document).on(scrollHeader);

    $(document).on('click', '.js-top', goToTop)
    $(document).on('click', '.js-see-next', seeNext)
    $(document).on('click', '.js-hide', seeHide)
    $(document).on('mousedown', '.js-slider', handleMousedownSlide);
    $(document).on('mouseleave', '.js-slider', handleMouseleaveSlide);
    $(document).on('mouseup', '.js-slider', handleMouseupSlide);
    $(document).on('mousemove', '.js-slider', handleMousemoveSlide);
})
