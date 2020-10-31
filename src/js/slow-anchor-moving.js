const telLink = document.querySelector('.nav-contacts-tel');
$(document).ready(function () {
    $(".page-nav").on("click", "a", function (event) {
        if (!event.currentTarget.classList.contains('nav-contacts-tel')) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({ scrollTop: top }, 800);
        }
    });
    $(".about-content").on("click", "a", function (event) {
        if (!event.currentTarget.classList.contains('nav-contacts-tel')) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({ scrollTop: top }, 800);
        }
    });
    $(".container").on("click", "a", function (event) {
        if (!event.currentTarget.classList.contains('nav-contacts-tel')) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({ scrollTop: top }, 800);
        }
      });
});

    