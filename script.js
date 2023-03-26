const navToggle = document.querySelectorAll(".toggle");
const nav = document.querySelector(".nav");
const overlay = document.querySelector('.overlay');
const toggleDropdown = document.querySelectorAll(".arrow");

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




toggleDropdown.forEach(arrow => {
  arrow.addEventListener('click', (e) => {
    const targetDropdown = e.currentTarget.parentElement.parentElement.children[1];
    const dropdownLinks = e.currentTarget.parentElement.parentElement.children[1].children[0];
    const heights = dropdownLinks.getBoundingClientRect().height;
     const downArrow = e.currentTarget.parentElement.childNodes[3];
      const upArrow = e.currentTarget.parentElement.childNodes[5];
    
//     if else statement//
    targetDropdown.getBoundingClientRect().height <= 0 ? targetDropdown.style.height = heights + 20 + 'px': targetDropdown.style.height = '0px';
    if(targetDropdown.getBoundingClientRect().height <= 0) {
      upArrow.classList.remove('hidden');
      downArrow.classList.add('hidden');
    }else {
      upArrow.classList.add('hidden');
      downArrow.classList.remove('hidden');
    }
  });
    
  })
})


window.addEventListener('resize', () => {
  if(window.innerWidth >= 900) {
    overlay.style.display = "none"
  }
})
