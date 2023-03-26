const navToggle = document.querySelectorAll(".toggle");
const nav = document.querySelector(".nav");
const overlay = document.querySelector('.overlay');

navToggle.forEach((btn) => {
  btn.addEventListener("click", () => {
    if(nav.classList.contains('activated')) {
      nav.classList.remove('activated');
      overlay.style.display = "none"
      
    }else {
       nav.classList.add("activated");
       overlay.style.display = "block"
    }
  });
});

// const dropdown = document.querySelectorAll(".dropdown");
const toggleDropdown = document.querySelectorAll(".arrow");
// const dropdownLinks = document.querySelectorAll('.dropdown-links');


toggleDropdown.forEach(arrow => {
  arrow.addEventListener('click', (e) => {
    const targetDropdown = e.currentTarget.parentElement.parentElement.children[1];
    const dropdownLinks = e.currentTarget.parentElement.parentElement.children[1].children[0];
    const heights = dropdownLinks.getBoundingClientRect().height
    targetDropdown.getBoundingClientRect().height <= 0 ? targetDropdown.style.height = heights + 20 + 'px': targetDropdown.style.height = '0px';
  })
})

window.addEventListener('resize', () => {
  if(window.innerWidth >= 900) {
    overlay.style.display = "none"
  }
})
