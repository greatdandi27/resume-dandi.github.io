/* $(window).scroll(function(){
   var scrollPos = $(this).scrollTop();
   $(".hero1") .css({
      'background-position-y' : 200 + scrollPos*1.3 + '%'
   });
}); */


let foto = document.getElementsByClassName("foto") [0];
let subheading = document.getElementsByClassName("subheading") [0];
let blurr1 = document.getElementsByClassName("blurr1") [0];
console.log(blurr1);

window.addEventListener('scroll', function(){
   let value = window.scrollTop;
   foto.style.left = value *5 + 'px';


});