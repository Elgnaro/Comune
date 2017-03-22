$(function () {
    function drawMap(latlng) {
        var myOptions = {
            zoom: 10,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
        // Add an overlay to the map of current lat/lng
        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: "Greetings!"
        });
    }
    function success(pos) {
        // Location found, show map with these coordinates
        drawMap(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
    }
    function fail(error) {
        drawMap(defaultLatLng);  // Failed to find location, show default map
    }

    $("#map-page").on("pagecreate", function () {
        var defaultLatLng = new google.maps.LatLng(42.6574200, 13.8949100);  // Default to Hollywood, CA when no geolocation support
        console.log(defaultLatLng);
//        if (navigator.geolocation) {
//            // Find the users current position.  Cache the location for 5 minutes, timeout after 6 seconds
//           // navigator.geolocation.getCurrentPosition(success, fail, {maximumAge: 500000, enableHighAccuracy: true, timeout: 6000});
//        } else {
            drawMap(defaultLatLng);  // No geolocation support, show default map
//        }
    });

    $("#chisono").on("pageshow pagechange", function () {
        $("form#inviamessaggio").submit(function () {
            var nome = $("#nome").val();
            var cognome = $("#cognome").val();
            var email = $("#email").val();
            var testo = $("#messaggio").val();
            $.ajax({
                type: "POST",
                url: "http://www.nicklongo.it/corsi/SendEmail.php",
                data: "nome=" + nome + "&cognome=" + cognome + "&email=" + email + "&messaggio=" + testo,
                dataType: "html",
                success: function (risposta) {
                    alert(risposta);
                },
                error: function () {
                    alert(risposta);
                }
            });
            return false;
        });
    });

    $("#monumenti").on("pagecreate", function () {
        $.ajax("https://comune-28e08.firebaseio.com/Monumenti.json")
                .done(function (data) {
                    var lista = $("#listaMonumenti");
                    lista.empty();

                    $.map(data, function (riga, indice) {
                        var monumenti = riga.Nome;

                        //console.log(indice);
                        $(lista).append('<li><a href="#contenuto" class="monumenti" data-id="' + indice + '">' + monumenti + '</a></li>');
                    });
                    $(".monumenti").click(function () {
                        var id = $(this).attr('data-id');
                        var descrizioneContenuto = "";
                        var nomeContenuto = "";
                        var immagineContenuto = "";

//                      var nomeContenuto = $("#nomeContenuto");
//                      var descrizioneContenuto = $("#descrizioneContenuto");
//                      var immagineContenuto = $("#immagineContenuto");

                        $.ajax("https://comune-28e08.firebaseio.com/Monumenti.json")
                                .done(function (data) {
                                    $.map(data, function (riga, indice) {
                                        if (indice == id) {

                                            $("#nomeContenuto").html(riga.Nome);
                                            $("#descrizioneContenuto").html(riga.Descrizione);
                                            $("#immagineContenuto").attr("src", riga.Foto);

//                                        descrizioneMonumento += riga.Descrizione;
//                                        nomeMonumento += riga.Nome;
//                                        immagineMonumento += riga.Immagine;
//                                        
//                                        nomeContenuto.append(nomeMonumento);
//                                        descrizioneContenuto.append(descrizioneMonumento);
//                                        immagineContenuto.attr("src",immagineMonumento);
                                        }
                                    });

                                });
                    });
                })
                .fail(function () {
                    alert("Errore!");
                });
    });

    $("#cultura").on("pagecreate", function () {
        $.ajax("https://comune-28e08.firebaseio.com/Cultura.json")
                .done(function (data) {
                    var lista = $("#listaCultura");
                    lista.empty();

                    $.map(data, function (riga, indice) {
                        var cultura = riga.Nome;

                        //console.log(indice);
                        $(lista).append('<li><a href="#contenuto" class="cultura" data-id="' + indice + '">' + cultura + '</a></li>');
                    });
                    $(".cultura").click(function () {
                        var id = $(this).attr('data-id');
                        var descrizioneContenuto = "";
                        var nomeContenuto = "";
                        var immagineContenuto = "";

//                      var nomeContenuto = $("#nomeContenuto");
//                      var descrizioneContenuto = $("#descrizioneContenuto");
//                      var immagineContenuto = $("#immagineContenuto");

                        $.ajax("https://comune-28e08.firebaseio.com/Cultura.json")
                                .done(function (data) {
                                    $.map(data, function (riga, indice) {
                                        if (indice == id) {

                                            $("#nomeContenuto").html(riga.Nome);
                                            $("#descrizioneContenuto").html(riga.Descrizione);
                                            $("#immagineContenuto").attr("src", riga.Foto);

//                                        descrizioneMonumento += riga.Descrizione;
//                                        nomeMonumento += riga.Nome;
//                                        immagineMonumento += riga.Immagine;
//                                        
//                                        nomeContenuto.append(nomeMonumento);
//                                        descrizioneContenuto.append(descrizioneMonumento);
//                                        immagineContenuto.attr("src",immagineMonumento);
                                        }
                                    });

                                });
                    });
                })
                .fail(function () {
                    alert("Errore!");
                });
    });

    $("#chiesa").on("pagecreate", function () {
        $.ajax("https://comune-28e08.firebaseio.com/Chiesa.json")
                .done(function (data) {
                    var lista = $("#listaChiesa");
                    lista.empty();

                    $.map(data, function (riga, indice) {
                        var chiesa = riga.Nome;

                        //console.log(indice);
                        $(lista).append('<li><a href="#contenuto" class="chiesa" data-id="' + indice + '">' + chiesa + '</a></li>');
                    });
                    $(".chiesa").click(function () {
                        var id = $(this).attr('data-id');
                        var descrizioneContenuto = "";
                        var nomeContenuto = "";
                        var immagineContenuto = "";

//                      var nomeContenuto = $("#nomeContenuto");
//                      var descrizioneContenuto = $("#descrizioneContenuto");
//                      var immagineContenuto = $("#immagineContenuto");

                        $.ajax("https://comune-28e08.firebaseio.com/Chiesa.json")
                                .done(function (data) {
                                    $.map(data, function (riga, indice) {
                                        if (indice == id) {

                                            $("#nomeContenuto").html(riga.Nome);
                                            $("#descrizioneContenuto").html(riga.Descrizione);
                                            $("#immagineContenuto").attr("src", riga.Foto);

//                                        descrizioneMonumento += riga.Descrizione;
//                                        nomeMonumento += riga.Nome;
//                                        immagineMonumento += riga.Immagine;
//                                        
//                                        nomeContenuto.append(nomeMonumento);
//                                        descrizioneContenuto.append(descrizioneMonumento);
//                                        immagineContenuto.attr("src",immagineMonumento);
                                        }
                                    });

                                });
                    });
                })
                .fail(function () {
                    alert("Errore!");
                });
    });
    
        $("#itinerari").on("pagecreate", function () {
        $.ajax("https://comune-28e08.firebaseio.com/Itinerari.json")
                .done(function (data) {
                    var lista = $("#listaItinerari");
                    lista.empty();

                    $.map(data, function (riga, indice) {
                        var itinerari = riga.Nome;

                        //console.log(indice);
                        $(lista).append('<li><a href="#contenutoiti" class="itinerari" data-id="' + indice + '">' + itinerari + '</a></li>');
                    });
                    $(".itinerari").click(function () {
                        var id = $(this).attr('data-id');
                        var descrizioneContenutoiti = "";
                        var nomeContenutoiti = "";
                        var immagineContenutoiti = "";

//                      var nomeContenuto = $("#nomeContenuto");
//                      var descrizioneContenuto = $("#descrizioneContenuto");
//                      var immagineContenuto = $("#immagineContenuto");

                        $.ajax("https://comune-28e08.firebaseio.com/Itinerari.json")
                                .done(function (data) {
                                    $.map(data, function (riga, indice) {
                                        if (indice == id) {

                                            $("#nomeContenutoiti").html(riga.Nome);
                                            $("#descrizioneContenutoiti").html(riga.Descrizione);
                                            $("#immagineContenutoiti").attr("src", riga.Foto);

//                                        descrizioneMonumento += riga.Descrizione;
//                                        nomeMonumento += riga.Nome;
//                                        immagineMonumento += riga.Immagine;
//                                        
//                                        nomeContenuto.append(nomeMonumento);
//                                        descrizioneContenuto.append(descrizioneMonumento);
//                                        immagineContenuto.attr("src",immagineMonumento);
                                        }
                                    });

                                });
                    });
                })
                .fail(function () {
                    alert("Errore!");
                });
    });
    
    
    
    
});

 



