function getChamps(){
  var c1 = document.getElementById("champ1").value
  var c2 = document.getElementById("champ2").value
  var url = "?c1=" +c1 +"&c2=" + c2 
  xhttp.open("GET", url, true)
  xhttp.send()
}

var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function (){
  if (xhttp.readyState == 4){ 
  var result = JSON.parse(xhttp.responseText)
  console.log(result)
  }
}
