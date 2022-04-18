document.getElementsByClassName("fa fa-external-link")[0].addEventListener("click", () => {
        window.open("https://kishankumarz.netlify.app/");
});

document.getElementsByClassName("fa fa-external-link")[1].addEventListener("click", () => {
        window.open("https://findtheimage.netlify.app/");
});

document.getElementsByClassName("fa fa-external-link")[2].addEventListener("click", () => {
  window.open("https://kkgaming.netlify.app/");
});

$(document).ready(function(){
        //theme color
        $('.theme').click(function(){
            $('.big-box').toggleClass("show");
        });  
      });
      var c = document.querySelector(':root');
      function color1() {
        c.style.setProperty('--main--color', 'crimson');
      }
      function color2() {
        c.style.setProperty('--main--color', 'violet');
      }
      function color3() {
        c.style.setProperty('--main--color', 'indigo');
      }
      function color4() {
        c.style.setProperty('--main--color', '#1e90ff');
      }
      function color5() {
        c.style.setProperty('--main--color', 'green');
      }
      function color6() {
        c.style.setProperty('--main--color', 'yellow');
      }
      function color7() {
        c.style.setProperty('--main--color', 'orange');
      }
      function color8() {
        c.style.setProperty('--main--color', 'red');
      }