window.onload = function () {
    alert("This page is in progress. Please don't jump to conclusions :>");
}

var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
    document.querySelector(".page-header").classList.toggle("nav-opened");
}, false);

$("#scrollbutton").click(function () {
    $('html,body').animate({
            scrollTop: $("#aboutme").offset().top
        },
        'toggle');
});
