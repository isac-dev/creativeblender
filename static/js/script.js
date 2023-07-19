var dropdownMenu = document.getElementById("dropdownMenu");
var timeoutId;

function showDropdown() {
    dropdownMenu = document.getElementById("dropdownMenu");
    console.log(dropdownMenu); 
    clearTimeout(timeoutId);
    dropdownMenu.style.display = "flex";
}

function hideDropdown() {
  timeoutId = setTimeout(function() {
    dropdownMenu.style.display = "none";
  }, 3000);
}

function cancelFadeOut() {
  clearTimeout(timeoutId);
}

function startFadeOut() {
  hideDropdown();
}

document.addEventListener('DOMContentLoaded', function() {
  let aboutElement = document.querySelector('.about');

  if (aboutElement) {
    aboutElement.addEventListener('click', scrollToAbout);
  }
});

function scrollToAbout() {
  let aboutSection = document.querySelector('.about_us');

  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  }
}
