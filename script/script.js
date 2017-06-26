document.addEventListener("DOMContentLoaded", function(){
    
 
        window.onload = function(){
            var fullpage = document.querySelector('.fullpage');
            
        }
        
    
    var hamburger = document.querySelector('.hamburger span');
    
    hamburger.addEventListener('click', function(){
        var nav = document.querySelector('.nav');
        nav.classList.toggle('visible');
    },false)
    
    ///////////////// icon events
    var phoneIcon = document.querySelector('.phone-icon');
    var messageIcon = document.querySelectorAll('.modal-icon');
    var message = document.querySelector('.answer-icon-message');
    
  
   for(var i=0; i<messageIcon.length; i++){
       messageIcon[i].addEventListener('click',function(event){
           if(event.target.classList.contains('phone-ico')){
               message.classList.toggle('visible-box');
                   message.innerHTML = "505-246-348";
                   event.stopPropagation();
           }else{
                message.classList.toggle('visible-box');
               message.innerHTML = "rafal.wawrzyk@gmail.com";
               event.stopPropagation();
           }
           
       })
   }
    
    document.body.addEventListener('click',function(e){
       message.classList.remove('visible-box');
    })
    
//    messageIcon.addEventListener('click', function(){
//        message.classList.toggle('visible-box');
//        message.innerHTML = "rafal.wawrzyk@gmail.com"
//    })
    
   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
})