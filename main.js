
var boton = document.getElementById('toggler');

var welcome_msg = document.getElementById('welcome_msg');

var msg_blue = "blue-header";

var dog_pictures = ["imagen/beagle.jpeg", "imagen/german.jpeg", "imagen/husky.jpeg", "imagen/collie.jpeg"]

$("#dog_click").click(function() {
  var dog = $(this).attr('dog');
  console.log(dog);
});


boton.onclick = function() {
  welcome_msg.classList.add(msg_blue);


};
