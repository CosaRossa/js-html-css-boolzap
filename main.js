
var i = 0;
var j = 0;

$(document).ready(function () {

});

$(document).keydown(function () {
  var frasiRandom = ["Certo!", "Anch'io!", "Certo che il babbo è brutto!", "Che schifo la vita.", "Usciamo oggi?", "Cha caldo fa oggi!", "Ho voglia di andare al mare!!", "Pippi è una stellina bellissima!", "Mammiiinaaaaaaaa ci andiamo a prendere un gelatino staseraaa????"];

  if ((event.keyCode == 13) && (msgUtente != "")) {
    i++;
    console.log(i);
    var msgUtente = $('#messaggio').val();
    var chat = $('.chat');
    chat.append('<div class=\"green-msg\">' + msgUtente +
    '<div id=\"msg-' + i + '\" class=\"orario\"></div></div>');
    var time = getTime();
    $('.chat #msg-' + i).text(time);
    $('#messaggio').val("");

    // Messaggio di risposta dopo un secondo
    setTimeout(function () {
      j++;
      var chat = $('.chat');
      chat.append('<div class=\"white-msg\">' + frasiRandom[randomNum(0,8)] + '<div id=\"cpu-' + j +
       '\" class=\"orario\"></div></div>');
      var time = getTime();
      $('.chat #cpu-' + j).text(time);
    }, 1000);
  }
});


// FUNZIONI

// getTime
//
// return ora e minuto corrente
function getTime() {
  var date = new Date();
  var h = date.getHours();
  var min = date.getMinutes();

  if (min < 10) {
    min = "0" + min;
  }
  var orario = h + ':' + min;
  return orario;
}

//randomNum
//min, max
// return numero random compreso tra max e min
function randomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  var result = Math.floor(Math.random()*(max - min + 1)) + min;
  return result;
}
