
var i = 0;

$(document).ready(function () {

});

$(document).keydown(function () {

  if ((event.keyCode == 13) && (msgUtente != "")) {
    i++;
    var msgUtente = $('#messaggio').val();
    var chat = $('.chat');
    chat.append('<div class=\"green-msg\">' + msgUtente +
    '<div id=\"msg-' + i + '\" class=\"orario\"></div></div>');
    var time = getTime();
    $('.chat #msg-' + i).text(time);
    $('#messaggio').val("");
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
