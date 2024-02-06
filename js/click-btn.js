var default_color;
function mouseIn() {
  default_color = document.changecolorbutton.but.style.background;
  document.changecolorbutton.but.style.background = "#0c3357";
}
function mouseOut() {
  document.changecolorbutton.but.style.background = default_color;
}