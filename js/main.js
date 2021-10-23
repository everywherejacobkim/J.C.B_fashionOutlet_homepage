$('#menuMen').on('click', () => {
    $('#mainImg').css('display', 'none');
    $('#menImg').css('display', 'block');
    $('#womenImg').css('display', 'none');
    $('.exploreBtn2').css('display', 'none');
    $('.exploreBtn').css('display', 'block');
    $('#arrow').css('display', 'block');
})

$('#menuWomen').on('click', () => {
    $('#mainImg').css('display', 'none');
    $('#menImg').css('display', 'none');
    $('#womenImg').css('display', 'block');
    $('.exploreBtn').css('display', 'none');
    $('.exploreBtn2').css('display', 'block');
    $('#arrow').css('display', 'block');
})

$('#menuHome').on('click', () => {
    $('#mainImg').css('display', 'block');
    $('#menImg').css('display', 'none');
    $('#womenImg').css('display', 'none');
    $('.exploreBtn').css('display', 'none');
    $('.exploreBtn2').css('display', 'none');
    $('#arrow').css('display', 'none');
})

$('.exploreBtn').on('click', () => {
    window.location.href = 'men.html'
})

$('.exploreBtn2').on('click', () => {
    window.location.href = 'women.html'
})