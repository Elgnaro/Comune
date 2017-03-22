//$(function(){
//
//    $("#chiesa").on("pagecreate",function(){
//      $.ajax("https://comune-28e08.firebaseio.com/Chiesa.json")
//              .done(function(data){
//                  var lista = $("#listaChiesa");
//                  lista.empty();
//                  
//                  $.map(data,function(riga,indice){
//                      var chiesa = riga.Nome;
//                          
//                          //console.log(indice);
//                      $(lista).append('<li><a href="#contenuto" class="chiesa" data-id="'+ indice +'">'+ chiesa +'</a></li>');
//                  });
//                  $(".chiesa").click(function(){
//                      var id = $(this).attr('data-id');
//                      var descrizioneContenuto = "";
//                      var nomeContenuto = "";
//                      var immagineContenuto = "";
//                      
////                      var nomeContenuto = $("#nomeContenuto");
////                      var descrizioneContenuto = $("#descrizioneContenuto");
////                      var immagineContenuto = $("#immagineContenuto");
//                     
//                       $.ajax("https://comune-28e08.firebaseio.com/Chiesa.json")
//                               .done(function(data){
//                                   $.map(data,function(riga,indice){
//                                       if(indice == id){
//                                         
//                                        $("#nomeContenuto").html(riga.Nome);
//                                        $("#descrizioneContenuto").html(riga.Descrizione);
//                                        $("#immagineContenuto").attr("src",riga.Foto);  
//                                         
////                                        descrizioneMonumento += riga.Descrizione;
////                                        nomeMonumento += riga.Nome;
////                                        immagineMonumento += riga.Immagine;
////                                        
////                                        nomeContenuto.append(nomeMonumento);
////                                        descrizioneContenuto.append(descrizioneMonumento);
////                                        immagineContenuto.attr("src",immagineMonumento);
//                                        }
//                                   });
//                           
//                       });
//                 });
//              })
//              .fail(function(){
//                  alert("Errore!");
//              });
//          });
//});

//$(function(){
//
//    $("#chiesa").on("pagecreate",function(){
//      $.ajax("https://comune-28e08.firebaseio.com/Chiesa.json")
//              .done(function(data){
//                  var lista = $("#listaChiesa");
//                  lista.empty();
//                  
//                  $.map(data,function(riga,indice){
//                      var chiesa = riga.Nome;
//                          
//                          //console.log(indice);
//                      $(lista).append('<li><a href="#contenuto" class="chiesa" data-id="'+ indice +'">'+ chiesa +'</a></li>');
//                  });
//                  $(".chiesa").click(function(){
//                      var id = $(this).attr('data-id');
//                      var descrizioneContenuto = "";
//                      var nomeContenuto = "";
//                      var immagineContenuto = "";
//                      
////                      var nomeContenuto = $("#nomeContenuto");
////                      var descrizioneContenuto = $("#descrizioneContenuto");
////                      var immagineContenuto = $("#immagineContenuto");
//                     
//                       $.ajax("https://comune-28e08.firebaseio.com/Chiesa.json")
//                               .done(function(data){
//                                   $.map(data,function(riga,indice){
//                                       if(indice == id){
//                                         
//                                        $("#nomeContenuto").append(riga.Nome);
//                                        $("#descrizioneContenuto").append(riga.Descrizione);
//                                        $("#immagineContenuto").attr("src", riga.Foto); 
//                                         
////                                        descrizioneMonumento += riga.Descrizione;
////                                        nomeMonumento += riga.Nome;
////                                        immagineMonumento += riga.Immagine;
////                                        
////                                        nomeContenuto.append(nomeMonumento);
////                                        descrizioneContenuto.append(descrizioneMonumento);
////                                        immagineContenuto.attr("src",immagineMonumento);
//                                        }
//                                   });
//                           
//                       });
//                 });
//              })
//              .fail(function(){
//                  alert("Errore!");
//              });
//          });
//});


