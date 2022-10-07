const sign_in_btn = document.querySelector('#sign-in-btn');
const sign_up_btn = document.querySelector('#sign-up-btn');
const container = document.querySelector('.container');

sign_up_btn.addEventListener('click', () => {
  container.classList.add('sign-up-mode');
});

sign_in_btn.addEventListener('click', () => {
  container.classList.remove('sign-up-mode');
});

// Accordian
$(document).ready(function () {
  // Add minus icon for collapse element which is open by default
  $(".collapse.show").each(function () {
    $(this)
      .siblings(".card-header")
      .find(".btn i")
      .addClass("fa-minus-circle")
      .removeClass("fa-plus-circle");
  });

  // Toggle plus minus icon on show hide of collapse element
  $(".collapse")
    .on("show.bs.collapse", function () {
      $(this)
        .parent()
        .find(".card-header .btn i")
        .removeClass("fa-plus-circle")
        .addClass("fa-minus-circle");
    })
    .on("hide.bs.collapse", function () {
      $(this)
        .parent()
        .find(".card-header .btn i")
        .removeClass("fa-minus-circle")
        .addClass("fa-plus-circle");
    });
});