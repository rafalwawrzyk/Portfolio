document.addEventListener("DOMContentLoaded", function () {

// fullpage animation
    (function(){
        var fullpage = document.querySelector('.fullpage-animate');
    fullpage.classList.add('hidden');
    })();
        
//  hamburger onclick event
    (function(){
         var hamburger = document.querySelector('.hamburger span');
    hamburger.addEventListener('click', function () {
        var nav = document.querySelector('.nav');
        nav.classList.toggle('visible');
        
        if(nav.classList.contains('visible')){
           hamburger.style.color = 'red';
           }else{
               hamburger.style.color = "white";
           }
    }, false)
    })();
   
    
    

// icon events
    var phoneIcon = document.querySelector('.phone-icon');
    var messageIcon = document.querySelectorAll('.modal-icon');
    var message = document.querySelector('.answer-icon-message');


    for (var i = 0; i < messageIcon.length; i++) {
        messageIcon[i].addEventListener('click', function (event) {
            if (event.target.classList.contains('phone-ico')) {
                message.classList.toggle('visible-box');
                message.innerHTML = "<p>505-246-348</p>";
                event.stopPropagation();
            } else {
                message.classList.toggle('visible-box');
                message.innerHTML = "<p>rafal.wawrzyk@gmail.com</p>";
                event.stopPropagation();
            }

        })
    }

    document.body.addEventListener('click', function (e) {
        message.classList.remove('visible-box');
    })

    //    messageIcon.addEventListener('click', function(){
    //        message.classList.toggle('visible-box');
    //        message.innerHTML = "rafal.wawrzyk@gmail.com"
    //    })









})
