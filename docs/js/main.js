//author: robocus2024 btlam02


const topMenu = document.getElementById("id-top-menu");
const toggleTopMenu = document.getElementById("id-top-menu-toggle");

document.addEventListener("click", (e) => {
  if (toggleTopMenu.contains(e.target)) {
    //Click to toggle top menu icon
    topMenu.classList.toggle("hidden");
    topMenu.classList.toggle("top-menu-expanded");
  } else {
    //Click outside of top menu icon
    if (topMenu.classList.contains("top-menu-expanded")) {
      topMenu.classList.add("hidden");
      topMenu.classList.remove("top-menu-expanded");
    }
  }
});



$(document).ready(function () {
  $(".slider-container").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    speed: 2000,
    dots: true,
  });
});

// $(document).ready(function () {
//     $(".slider-container-galery").slick({
//       slidesToShow: 3,
//       slidesToScroll:2,
//       autoplay: true,
//       autoplaySpeed: 0,
//       arrows: true,
//       speed: 30000,
//     });
//   });


$(document).ready(function () {
  $(".slider-container-galery").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    speed: 25000,
    draggable: true, // Kích hoạt tính năng nắm kéo
    pauseOnHover: false, // Ngăn autoplay tạm dừng khi hover
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });
});




document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".section");
  
    window.addEventListener("scroll", function() {
      sections.forEach(function(section) {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
  
        if (sectionTop < windowHeight * 0.75) {
          section.classList.add("opacity-100", "translate-y-0");
          section.classList.remove("opacity-0", "translate-y-4");
        } else {
          section.classList.remove("opacity-100", "translate-y-0");
          section.classList.add("opacity-0", "translate-y-4");
        }
      });
    });
  });
  