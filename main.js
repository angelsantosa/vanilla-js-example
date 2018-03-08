
var boton = document.getElementById('toggler');

var welcome_msg = document.getElementById('welcome_msg');

var msg_blue = "blue-header";

boton.onclick = function() {
  welcome_msg.classList.add(msg_blue);
};
