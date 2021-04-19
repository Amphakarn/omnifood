$(document).ready(function () {
  /* For the sticky navigation */
  $(".js--section-features").waypoint(
    function (direction) {
      if (direction === "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    { offset: "60px;" }
  );

  /* Scroll on buttons */
  $(".js--scroll-to-plans").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-plans").offset().top },
      1000
    );
  });

  $(".js--scroll-to-start").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-features").offset().top },
      1000
    );
  });

  /* Navigation scroll*/
  $('a[href^="#"]').on("click", function (event) {
    var target = $(this.getAttribute("href"));
    console.log("target = ", target);

    if (target.length) {
      event.preventDefault();
      $("html, body").stop().animate(
        {
          scrollTop: target.offset().top,
        },
        1000
      );
    }
  });

  /* Animation on scroll */
  $(".js--wp-1").waypoint(
    function (direction) {
      $(".js--wp-1").addClass("animate__animated animate__fadeIn");
    },
    { offset: "50%" }
  );

  $(".js--wp-2").waypoint(
    function (direction) {
      $(".js--wp-2").addClass("animate__animated animate__fadeInUp");
    },
    { offset: "50%" }
  );

  $(".js--wp-3").waypoint(
    function (direction) {
      $(".js--wp-3").addClass("animate__animated animate__fadeIn");
    },
    { offset: "50%" }
  );

  $(".js--wp-4").waypoint(
    function (direction) {
      $(".js--wp-4").addClass("animate__animated animate__pulse");
    },
    { offset: "50%" }
  );

  /* Mobile nav - Toggle menu and icon */
  $(".js--nav-icon").click(function () {
    let nav = $(".js--main-nav");
    nav.slideToggle(200);
    if ($("#mobile-menu-icon").attr("name") === "menu") {
      $("#mobile-menu-icon").attr("name", "close");
    } else {
      $("#mobile-menu-icon").attr("name", "menu");
    }
  });
});
