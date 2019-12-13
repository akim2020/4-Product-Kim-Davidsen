function openTemp(TempName) {
  var i;
  var x = document.getElementsByClassName("Temp");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById (TempName).style.display = "block";
}