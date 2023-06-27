


const sections = document.querySelectorAll('section');
const windowHeight = window.innerHeight;
const navigasi = document.querySelector('.navigasi');
/* console.log(windowHeight); */

function reset(){
    for (var i = 0; i < navigasi.children.length; i++){
        navigasi.children[i].classList.remove('line-halaman');
    }
}

window.addEventListener('scroll', function(){
  const scrrollTop = window.scrollY;
  sections.forEach(function(section, i){
    if (section.offsetTop < scrrollTop + windowHeight/2 && scrrollTop < section.offsetTop + windowHeight/2) {
        reset();
      
        
        navigasi.children[i].classList.add('line-halaman');

    }
  });

});


/* Menu About */


window.addEventListener('scroll', function() {
  const aboutSection = document.querySelector('#about');
  const menuabout = document.querySelector('.menu-about');
  const viewportHeight = window.innerHeight;
  const sectionTop = aboutSection.offsetTop;
  const sectionHeight = aboutSection.offsetHeight;
  const scrollPosition = window.scrollY;
  

  
  const sectionProgress = (scrollPosition - sectionTop) / (sectionHeight - viewportHeight);
  
  const thresholdAppear = -0.15;  
  const thresholdDisappear = 1.8; 

  if (sectionProgress >= thresholdAppear && sectionProgress < thresholdDisappear) {
    menuabout.style.display = 'flex';
  } else {

    menuabout.style.display = 'none';
  }
});




/* hero */
