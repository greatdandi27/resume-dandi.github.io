const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const keluar = document.getElementById("keluar");
const tutup = document.getElementById("tutup");

let menuOpen = false;

function openMenu() {
  menuOpen = true;
  sidebar.style.width = "100%";
}

function closeMenu() {
  menuOpen = false;
  sidebar.style.width = "0px";
}

hamburger.addEventListener("click", function () {
  if (!menuOpen) {
    openMenu();
  }
});

keluar.addEventListener("click", function () {
  if (menuOpen) {
    closeMenu();
  }
});

tutup.addEventListener("click", function () {
  if (menuOpen) {
    closeMenu();
  }
});



/* Abou Me */
var acc = document.getElementsByClassName("heading-text");
/* var i; */
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


/* End Abou Me */
