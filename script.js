function changeMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const imgProfile = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    imgProfile.setAttribute("src", "./assets/logoDark.png")
    imgProfile.setAttribute("alt", "Logo escura Megasult")
  } else {
    imgProfile.setAttribute("src", "./assets/logo.png")
    imgProfile.setAttribute("alt", "Logo Megasult")
  }
}
