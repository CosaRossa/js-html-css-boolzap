
$(document).ready(function () {

});

$(document).keydown(function () {

  if ((event.keyCode == 13) && (msgUtente != "")) {
    var msgUtente = $('#messaggio').val();
    var time = getTime();
    $('.chat .orario').text(time);
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
