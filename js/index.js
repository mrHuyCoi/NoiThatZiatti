

$(document).ready(function () {
    $('.hero-slider').slick({
        autoplay: false,
        autoplaySpeed: 4000,
        arrows: false,
        dots: false,
        fade: true,
        speed: 1000
    });
});

$('.hero-slider').slick({
    autoplay: true,
    autoplaySpeed: 1000,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true
});


  document.addEventListener('DOMContentLoaded', () => {
    const toggles = document.querySelectorAll('[data-bs-toggle="collapse"]');

    toggles.forEach(toggle => {
      const icon = toggle.querySelector('.toggle-icon');
      const target = document.querySelector(toggle.getAttribute('href'));

      toggle.addEventListener('click', () => {
        setTimeout(() => {
          if (target.classList.contains('show')) {
            icon.textContent = '-';
          } else {
            icon.textContent = '+';
          }
        }, 200);
      });
    });
  });


/* -----------------Slied----------------- */


function closeTopbarNotice() {
    const topbar = document.getElementById('topbarNotice');
    const navbar = document.getElementById('mainNavbar');

    if (topbar) topbar.style.display = 'none';
    if (navbar) navbar.style.top = '0';
}
// Đóng Nút quảng cáo



const navItems = document.querySelectorAll('.nav-hover-trigger');
const megaMenu = document.getElementById('megaMenu');

navItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        megaMenu.style.display = 'block';
    });
});

document.querySelector('nav.navbar').addEventListener('mouseleave', () => {
    megaMenu.style.display = 'none';
});

megaMenu.addEventListener('mouseleave', () => {
    megaMenu.style.display = 'none';
});
// xử lý hover thanh navbar



AOS.init({
    useClassNames: true,
    initClassName: false,
    animatedClassName: "aos-animate",
    once: true,
});

// Custom width mở rộng khi scroll đến
document.addEventListener('aos:in', ({ detail }) => {
    if (detail.dataset.aos === "custom-width") {
        const wrapper = detail.querySelector('.image-wrapper');
        if (wrapper) wrapper.classList.add("expanded");
    }
});


// -----------------------------------------------

const items = document.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener('mouseenter', () => {
        items.forEach(i => {
            if (i !== item) {
                i.classList.remove('active');
                i.classList.add('inactive');
            } else {
                i.classList.add('active');
                i.classList.remove('inactive');
            }
        });
    });

    item.addEventListener('mouseleave', () => {
        items.forEach(i => {
            i.classList.remove('active');
            i.classList.remove('inactive');
        });
    });
});





$(document).ready(function () {
    $('.blog-carousel-alt').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 992,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 576,
                settings: { slidesToShow: 1 }
            }
        ]
    });
});



$(document).ready(function () {
    const $carousel = $('.blog-carousel-alt');

    $carousel.on('init reInit afterChange', function (event, slick, currentSlide) {
        const i = (currentSlide ? currentSlide : 0);
        $('.slick-prev-alt').toggle(i !== 0);
        $('.slick-next-alt').toggle(i !== slick.slideCount - slick.options.slidesToShow);
    });

    $carousel.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false, // không dùng arrows mặc định
        dots: false,
        responsive: [
            {
                breakpoint: 992,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 576,
                settings: { slidesToShow: 1 }
            }
        ]
    });

    // Gắn hành vi vào nút custom
    $('.slick-prev-alt').click(function () {
        $carousel.slick('slickPrev');
    });
    $('.slick-next-alt').click(function () {
        $carousel.slick('slickNext');
    });
});



$('.blog-carousel-alt').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev">&#8249;</button>',  // ‹
    nextArrow: '<button type="button" class="slick-next">&#8250;</button>', // ›
    responsive: [
        { breakpoint: 992, settings: { slidesToShow: 2 } },
        { breakpoint: 576, settings: { slidesToShow: 1 } }
    ]
});




function openVideoPopup() {
    const popup = document.getElementById("videoPopup");
    const iframe = document.getElementById("popupVideo");
    popup.style.display = "flex";
    iframe.src = "https://www.youtube.com/embed/YURYiPIdS6E?autoplay=1"; // VIDEO NHÚNG CỦA BẠN
}

function closeVideoPopup() {
    const popup = document.getElementById("videoPopup");
    const iframe = document.getElementById("popupVideo");
    iframe.src = ""; // Reset video khi đóng
    popup.style.display = "none";
}




$(document).ready(function () {
    $('.carousel-hoptac').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});




document.addEventListener("DOMContentLoaded", function () {
    const triggers = document.querySelectorAll(".nav-hover-trigger");
    const megaMenu = document.getElementById("megaMenu");

    triggers.forEach(trigger => {
        trigger.addEventListener("mouseenter", () => {
            megaMenu.classList.add("active");
        });
    });

    // Rời chuột khỏi menu thì ẩn
    document.querySelector("#mainNavbar").addEventListener("mouseleave", () => {
        megaMenu.classList.remove("active");
    });
});

