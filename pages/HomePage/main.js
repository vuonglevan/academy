let isDown = false;
let startX;
let scrollLeft;
let flagDetailCart = false;

function scrollHeader() {
    const header = $(".js-header");
    let scrolled = window.scrollY;
    if (scrolled > header.height()) {
        header.removeClass('isTop');
    } else {
        header.addClass('isTop');
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
    $('html, body').animate({ scrollTop: 0 }, 1000);
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

function showDetailCart() {
    if (flagDetailCart) {
        flagDetailCart = false;
        $($(this).attr('data-id')).removeClass('show');
        $($(this).attr('data-id')).addClass('d-none');
    } else {
        flagDetailCart = true;
        $($(this).attr('data-id')).removeClass('d-none');
        $($(this).attr('data-id')).addClass('show');
    }
}

function scrollToDiv() {
    if ($(this).attr('data-id') == '#') return goToTop;
    const offset = $($(this).attr('data-id')).offset();
    $('html, body').animate({ scrollTop: offset.top }, 1000);
}

$(document).ready(function () {
    document.addEventListener('scroll', function (e) {
        scrollHeader();
    }, true)
    $(document).on('click', '.js-header-item', scrollToDiv)
    $(document).on('click', '.js-btn-show-card', showDetailCart)
    $(document).on('click', '.js-top', goToTop)
    $(document).on('click', '.js-see-next', seeNext)
    $(document).on('click', '.js-hide', seeHide)
    $(document).on('mousedown', '.js-slider', handleMousedownSlide);
    $(document).on('mouseleave', '.js-slider', handleMouseleaveSlide);
    $(document).on('mouseup', '.js-slider', handleMouseupSlide);
    $(document).on('mousemove', '.js-slider', handleMousemoveSlide);
})
