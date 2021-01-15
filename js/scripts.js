/*!
    * Start Bootstrap - Agency v6.0.3 (https://startbootstrap.com/theme/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict



document.getElementById("buildingSolution").addEventListener("click", sunset);
document.getElementById("clear").addEventListener("click", clear);


function sunset() {
  let building1 = parseInt(document.getElementById("building1").value);
  let building2 = parseInt(document.getElementById("building2").value);
  let building3 = parseInt(document.getElementById("building3").value);
  let building4 = parseInt(document.getElementById("building4").value);
  let building5 = parseInt(document.getElementById("building5").value);

  let userArray = new Array();
  userArray.push(building1);
  userArray.push(building2);
  userArray.push(building3);
  userArray.push(building4);
  userArray.push(building5);

  let maxHeight = userArray[0];
  let ascendingArray = new Array();
  ascendingArray.push(maxHeight);

  for (let loop = 1; loop < userArray.length; loop++) {
    if (userArray[loop] > maxHeight) {
      maxHeight = userArray[loop];
      ascendingArray.push(maxHeight);
    }
  }

  document.getElementById("output").innerText = `The buildings that will see the sunset are [${ascendingArray.join(", ")}]`;
}



function clear() {
    document.getElementById("building1").value = "";
    document.getElementById("building2").value = "";
    document.getElementById("building3").value = "";
    document.getElementById("building4").value = "";
    document.getElementById("building5").value = "";
    document.getElementById("output").innerText = "";
}