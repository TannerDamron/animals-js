$(document).ready(function() {

$("img#r").click(function() {
   $("#racoon").show();
   $("#deer").hide()
   $("#turtle").hide()
 });

 $("img#d").click(function() {
    $("#deer").show();
    $("#racoon").hide()
    $("#turtle").hide()
  });

  $("img#t").click(function() {
     $("#turtle").show();
     $("#racoon").hide()
     $("#deer").hide()
   });
});
