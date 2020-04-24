var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


  'use strict';
  // создаем <link rel="stylesheet" href="light|dark.css">
  let head = document.head,
      link = document.createElement('link');
  link.rel = 'stylesheet';
  // проверяем значение из localStorage если dark то темная тема
  if (localStorage.getItem('themeStyle') === 'dark') {
    link.href = 'dark.css'; // ссылка на темный стиль
    document.getElementById('switch-1').setAttribute('checked', true); // переключаем чекбокс в положение "темная тема"
  }
  // по умолчанию светлая тема
  else {
    link.href = 'light.css'; // ссылка на светлый стиль
  }
  head.appendChild(link); // вставляем <link rel="stylesheet" href="light|dark.css"> в шапку страницы между темаги head

  // событие при переключении чекбокса
  document.getElementById('switch-1').addEventListener('change', ev => {
    let btn = ev.target;
    // если чекбокс включен
    if (btn.checked) {
      link.href = 'dark.css'; // сключаем темную тему
      localStorage.setItem('themeStyle', 'dark'); // записываем значение в localStorage
    }
    else {
      link.href = 'light.css'; // включаем светлую тему
      localStorage.setItem('themeStyle', 'light'); // записываем значение в localStorage
    }
  });