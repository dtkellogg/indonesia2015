$(document).ready(function () {
  // This is just a sample/test.. changes h1 color to red when clicked
  //   $("h1").click(function () {
  //     $(this).css("background-color", "#ff0000");
  //   });

  // For Sticky nav
  $(".js--section-features").waypoint(
    function (direction) {
      // direction can tell if scrolling up or down //
      if (direction === "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "60px",
    }
  );

  //   var waypoints = $("#handler-first").waypoint(
  //     function (direction) {
  //       notify(this.element.id + " hit 25% from top of window");
  //     },
  //     {
  //       offset: "25%",
  //     }
  //   );

  // Scroll on buttons
  //   $(".js--scroll-to-plans").click(function () {
  //     $("html, body").animate(
  //       { scrollTop: $(".js--section-plans").offset().top },
  //       1000 // 1000 ms is the speed
  //     );
  //   });

  //   $(".js--scroll-to-start").click(function () {
  //     $("html, body").animate(
  //       { scrollTop: $(".js--section-features").offset().top },
  //       1000 // 1000 ms is the speed
  //     );
  //   });

  // naigation scroll
  // Select all links with hashes
  $(function () {
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function (event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length
            ? target
            : $("[name=" + this.hash.slice(1) + "]");
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $("html, body").animate(
              {
                scrollTop: target.offset().top,
              },
              1000
              // function () {
              //   // Callback after animation
              //   // Must change focus!
              //   var $target = $(target);
              //   $target.focus();
              //   if ($target.is(":focus")) {
              //     // Checking if the target was focused
              //     return false;
              //   } else {
              //     $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
              //     $target.focus(); // Set focus again
              //   }
              // }
            );
            return false;
          }
        }
      });
  });

  /* Animations on scroll */
  $(".js--wp-1").waypoint(
    function (direction) {
      $(".js--wp-1").addClass("animate__animated animate__fadeIn");
    },
    {
      offset: "50%",
    }
  );
  $(".js--wp-2").waypoint(
    function (direction) {
      $(".js--wp-2").addClass("animate__animated animate__fadeInLeft");
    },
    {
      offset: "50%",
    }
  );
  $(".js--wp-3").waypoint(
    function (direction) {
      $(".js--wp-3").addClass("animate__animated animate__fadeInRight");
    },
    {
      offset: "50%",
    }
  );
  $(".js--wp-4").waypoint(
    function (direction) {
      $(".js--wp-4").addClass("animate__animated animate__fadeInLeft");
    },
    {
      offset: "50%",
    }
  );
  $(".js--wp-5").waypoint(
    function (direction) {
      $(".js--wp-5").addClass("animate__animated animate__fadeInLeft");
    },
    {
      offset: "50%",
    }
  );
  $(".js--wp-6").waypoint(
    function (direction) {
      $(".js--wp-6").addClass("animate__animated animate__fadeInRight");
    },
    {
      offset: "50%",
    }
  );
  $(".js--wp-7").waypoint(
    function (direction) {
      $(".js--wp-7").addClass("animate__animated animate__fadeInLeft");
    },
    {
      offset: "50%",
    }
  );
  $(".js--wp-8").waypoint(
    function (direction) {
      $(".js--wp-8").addClass("animate__animated animate__fadeInLeft");
    },
    {
      offset: "50%",
    }
  );
  $(".js--wp-9").waypoint(
    function (direction) {
      $(".js--wp-9").addClass("animate__animated animate__fadeInRight");
    },
    {
      offset: "50%",
    }
  );
  $(".js--wp-10").waypoint(
    function (direction) {
      $(".js--wp-10").addClass("animate__animated animate__fadeInLeft");
    },
    {
      offset: "50%",
    }
  );
  $(".js--wp-11").waypoint(
    function (direction) {
      $(".js--wp-11").addClass("animate__animated animate__fadeInLeft");
    },
    {
      offset: "50%",
    }
  );
  $(".js--wp-12").waypoint(
    function (direction) {
      $(".js--wp-12").addClass("animate__animated animate__fadeInRight");
    },
    {
      offset: "50%",
    }
  );
  $(".js--wp-13").waypoint(
    function (direction) {
      $(".js--wp-13").addClass("animate__animated animate__fadeInLeft");
    },
    {
      offset: "50%",
    }
  );
  $(".js--wp-14").waypoint(
    function (direction) {
      $(".js--wp-14").addClass("animate__animated animate__fadeInLeft");
    },
    {
      offset: "50%",
    }
  );
  $(".js--wp-15").waypoint(
    function (direction) {
      $(".js--wp-15").addClass("animate__animated animate__fadeInRight");
    },
    {
      offset: "50%",
    }
  );
  $(".js--wp-16").waypoint(
    function (direction) {
      $(".js--wp-16").addClass("animate__animated animate__fadeInLeft");
    },
    {
      offset: "50%",
    }
  );
  $(".js--wp-22").waypoint(
    function (direction) {
      $(".js--wp-5").addClass("animate__animated animate__pulse");
    },
    {
      offset: "50%",
    }
  );

  /* mobile nav */
  //   $(".js--nav-icon").click(function () {
  //     var nav = $(".js--main-nav");
  //     var icon = $(".js--nav-icon");

  //     nav.slideToggle(200); // define how much time - 0.2s

  //     if (icon.attr("name") == "menu") {
  //       icon.attr("name", "close");
  //     } else {
  //       icon.attr("name", "menu");
  //     }
  //   });
});
