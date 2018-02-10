function getChamps(){
  var c1 = document.getElementById("champ1").value
  var c2 = document.getElementById("champ2").value
  var url = "/compare/" + c1 +"/" + c2
  window.location.href = url;
}
