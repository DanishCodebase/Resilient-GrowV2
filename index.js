// var img = document.getElementById('bg');

// var slides = ['hero-section.jpg', 'hero-section2.jpg', 'hero-section3.jpg'];

// var Start = 0;

// function slider() {
//     var imgUrl = "./assets/images/" + slides[Start];
//     // console.log(img);
//     img.style.backgroundImage = 'url(' + imgUrl + ')';

//     if (Start < slides.length) {
//         Start++;
//     }
//     else {
//         Start = 0;
//         var imgUrl = "./assets/images/" + slides[Start];
//         // console.log(img);
//         img.style.backgroundImage = 'url(' + imgUrl + ')';
//     }

// }
// setInterval(slider, 4000);




let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}



// for (let i = 0; i < 3; i++) {

//   document.querySelectorAll(".menu")[i].addEventListener("click", function () {

//     // for displaying nav-links
//     for (let i = 0; i < 3; i++) {
//       document.querySelectorAll(".nav-bottom")[i].classList.toggle("d-none");

//       // for showing close button

//       document.querySelectorAll(".menu")[i].classList.toggle("d-none");

//       document.querySelectorAll(".close")[i].classList.toggle("d-none");
//     }
//   });
// }

// for (let i = 0; i < 3; i++) {
//   document.querySelectorAll(".close")[i].addEventListener("click", function () {
//     for (let i = 0; i < 3; i++) {
//       // for closing nav-links

//       document.querySelectorAll(".nav-bottom")[i].classList.toggle("d-none");

//       // for showing menu button

//       document.querySelectorAll(".menu")[i].classList.toggle("d-none");

//       document.querySelectorAll(".close")[i].classList.toggle("d-none");
//     }
//   });
// }

document.querySelector(".menu").addEventListener("click", function () {
  document.querySelector(".nav-bottom").classList.toggle("d-none");

  // for showing close button

  document.querySelector(".menu").classList.toggle("d-none");

  document.querySelector(".close").classList.toggle("d-none");
});

document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".nav-bottom").classList.toggle("d-none");

  // for showing close button

  document.querySelector(".menu").classList.toggle("d-none");

  document.querySelector(".close").classList.toggle("d-none");
});