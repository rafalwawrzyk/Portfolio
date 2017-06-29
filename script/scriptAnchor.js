$(function(){
    
    $(document).on('click', 'a:not(.differ-link)', function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop:$($.attr(this, 'href')).offset().top - 50
        },500)
    })
})
    