$(function(){
    
    $(document).on('click', 'a', function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop:$($.attr(this, 'href')).offset().top - 50
        },500)
    })
    
    

   
   
    
    
    
})
    