$('#menuHome').on('click', () => {
    window.location.href = 'index.html'
})

$('#menuMen').on('click', () => {
    window.location.href = 'men.html'
})

$('.womenBtn').on('click', () => {
    $('.shopImg').css('display', 'block');
})

$('.shopImg').on('click', () => {
    $('.shopImg').css({
        'display': 'none',
        'cursor': 'pointer',
        'border-radius': '50px'
    })
})