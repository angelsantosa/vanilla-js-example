
var boton = document.getElementById('toggler');

var welcome_msg = document.getElementById('welcome_msg');

var msg_blue = "blue-header";

var dog_pictures = ["imagen/beagle.jpg", "imagen/german.jpg", "imagen/husky.jpg", "imagen/collie.jpg"]

$("a#dog_click").click(function() {
  var dog = $(this).attr('dog');
  if(dog == "1"){
    $("#lol").attr('src',dog_pictures[0]);
  }

  if(dog == "2"){
    $("#lol").attr('src',dog_pictures[2]);
  }

  if(dog == "3"){
    $("#lol").attr('src',dog_pictures[3]);
  }

  if(dog == "4"){

    $("#lol").attr('src',dog_pictures[1]);
  }
});

boton.onclick = function() {
  welcome_msg.classList.add(msg_blue);


};
