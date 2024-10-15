function bouton() {
  oups = document.createElement("p")
  oups.innerHTML = "Oups !"
  document.getElementById("logo").parentNode.insertBefore(oups, document.getElementById("logo").nextSibling)
  document.getElementById("logo").remove()
}