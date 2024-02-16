$(document).ready(function() {
    $('#carousel-img').on('click', function(e) {
        e.preventDefault()
        $('html, body').animate({
            scrollTop: $('#carousel').offset().top
        }, 1000)
    })
    $('#cards-list').on('click', function(e) {
        e.preventDefault()
        $('html, body').animate({
            scrollTop: $('#cards').offset().top
        }, 1000)
    })
})