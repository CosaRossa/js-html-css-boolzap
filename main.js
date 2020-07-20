//differenzio id dei messaggi inviati e ricevuti
//per avere l'orario di invio di ogni messaggio
var i = 0;
var j = 0;

//Ricavo i nomi dei contatti
var contattiObj = $('#contatti h4');
var contattiText = [];
for (var i = 0; i < contattiObj.length; i++) {
  var getText = contattiObj[i].textContent.toLowerCase();
  contattiText.push(getText);
}

$(document).keyup(function () {
  var msgUtente = $('#messaggio').val();
  var cercaContatti = $('#cercaContatti').val().toLowerCase();

  // Cerca nei contatti
  if ((event.keyCode != undefined) && (cercaContatti != "")){
    for (var i = 0; i < contattiText.length; i++) {
      var trovato = contattiText[i].startsWith(cercaContatti);
      if (!trovato) {
        $('#' + contattiText[i]).hide();
      }
    }
  } else if (cercaContatti == "") {
      $('.contatto').show();
  }


  // Risposte random messaggio di risposta
  var frasiRandom = ["Certo!", "Anch'io!", "Qual è la tua serie preferita?", "Aloaaa", "Usciamo oggi?", "Cha caldo fa oggi!", "Ho voglia di andare al mare!!", "Call it maaagicccc", "Sono lì fra 5 minuti"];

  // Quando premo invio parte il messaggio
  if ((event.keyCode == 13) && (msgUtente != "")) {
    i++;
    console.log(msgUtente);
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
