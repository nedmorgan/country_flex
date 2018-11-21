const panels = document.querySelectorAll('.panel');

//moves the text from above and below and increases size of flex panel
function toggleActive(e) {
  this.classList.toggle('open-active');
  this.classList.toggle('open');
}

panels.forEach(panel => panel.addEventListener('click', toggleActive));
