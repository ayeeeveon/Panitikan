function searchPage(){

  const value = document.getElementById("searchInput").value.toLowerCase();

  if(value.includes("tula")){
    window.location.href = "pages/tula.html";
  }
  else if(value.includes("alamat")){
    window.location.href = "pages/alamat.html";
  }
  else if(value.includes("anekdota")){
    window.location.href = "pages/anekdota.html";
  }
  else if(value.includes("nobela") || value.includes("dula")){
    window.location.href = "pages/nobela.html";
  }
  else if(value.includes("talumpati")){
    window.location.href = "pages/talumpati.html";
  }
  else {
    window.location.href = "pages/panitikan.html";
  }

}