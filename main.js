$(document).ready(function() {

  tuttiGeneri()

  $(document).on("change", "select", function() {
    var questo = $(this);
    console.log(questo.val());
    if (questo.val() == "Pop") {
      risultato("Pop");
      $(".cd").remove();
    } else if (questo.val() == "Rock") {
      risultato("Rock");
      $(".cd").remove();

    } else if (questo.val() == "Metal") {
      risultato("Metal");
      $(".cd").remove();
    } else if (questo.val() == "Jazz") {
      risultato("Jazz");
      $(".cd").remove();
    } else if (questo.val() == "Tutti") {
      tuttiGeneri()
      $(".cd").remove();
    }
  });

});


function risultato(genere) {
  $.ajax({
    url: "https://flynn.boolean.careers/exercises/api/array/music",
    method: "GET",
    success: function(data, stato) {
      // console.log(data.response);
      var cds = data.response;
      for (var i = 0; i < cds.length; i++) {
        var cd = cds[i];
        // console.log(cd);
        if (cd.genre == genere) {
          var source = $("#entry-template").html();
          var template = Handlebars.compile(source);
          var html = template(cd);
          $(".cds-container").append(html);
        }
      }
    },
    error: function(richiesta, stato, errore) {
      alert("E' avvenuto un errore. " + errore);
    }
  });
}


function tuttiGeneri() {
  $.ajax({
    url: "https://flynn.boolean.careers/exercises/api/array/music",
    method: "GET",
    success: function(data, stato) {
      // console.log(data.response);
      var cds = data.response;
      for (var i = 0; i < cds.length; i++) {
        var cd = cds[i];
        // console.log(cd);
        var source = $("#entry-template").html();
        var template = Handlebars.compile(source);
        var html = template(cd);
        $(".cds-container").append(html);
      }
    },
    error: function(richiesta, stato, errore) {
      alert("E' avvenuto un errore. " + errore);
    }
  });
}
