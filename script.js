function changeMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const imgProfile = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    imgProfile.setAttribute ("src","./assets/avatar-light.png")
    imgProfile.setAttribute ("alt", "Foto do Mayk de óculos escuros")
  } else {
    imgProfile.setAttribute("src", "./assets/avatar.png")
    imgProfile.setAttribute("alt", "Foto do Mayk de óculos")
  }
}
