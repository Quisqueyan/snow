// alert('are you ready to shred');

/*function good() {
var question =  prompt('are you ready to shred')
alert('Great');

confirm("do you love the freedom of snow boarding?");



if(confirm === true) {
  alert("that's awesome");
}else{
  SpeechRecognitionAlternative("thats too bad")
}
}*/

var showOrder = function() {
  var order = prompt('are you ready to shred?');
  var item;

  if (order === 'yes') {
    item = '<img id="popup" src="images/jorg-angeli.jpg">';
  } else if (order === 'no') {
    item = '<img id="popup" src="images/robson.jpg">';
  } else{
    item = '<img id="popup" src="images/keep your secrets.jpg">';
  }

  return item;
}

