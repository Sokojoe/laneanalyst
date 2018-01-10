function getChamps(){
  var c1 = document.getElementById("champ1").value
  var c2 = document.getElementById("champ2").value
  var xhttp = new XMLHttpRequest();
  var url = "http://localhost:5000/?c1=" +c1 +"&c2=" + c2 
  xhttp.open("GET", url, true)
  xhttp.send()
}

function setdata(){
}
