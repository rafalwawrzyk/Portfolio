document.addEventListener("DOMContentLoaded", function () {

    
    
    (function() {
        var timingHidden = setTimeout(function () {
            var fullpage = document.querySelector('.fullpage-animate');
            fullpage.classList.toggle('hidden');
        }, 100);
    })();

    //  hamburger onclick event
    function mobileMenu () {

        var hamburger = document.querySelector('.hamburger span:first-child');
        var hamburgerClose = document.querySelector('.hamburger span:last-child');
        var nav = document.querySelector('.nav');
        hamburger.addEventListener('click', function () {
            nav.classList.toggle('visible');
            hamburger.classList.toggle('hidden');
            hamburgerClose.classList.toggle('visible');
        }, false)
        hamburgerClose.addEventListener('click', function () {
            hamburgerClose.classList.toggle('visible');
            hamburger.classList.toggle('hidden');
            nav.classList.remove('visible');
        }, false)



    };
    
    // icon events
    function iconEvent() {
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
    }
    

    mobileMenu();
    iconEvent();

    //    messageIcon.addEventListener('click', function(){
    //        message.classList.toggle('visible-box');
    //        message.innerHTML = "rafal.wawrzyk@gmail.com"
    //    })









})
