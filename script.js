function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // pegar a tag img
  const img = document.querySelector("#profile img")
  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de perfil de Gustavo Dourado utilizando uma jaqueta e camisa social no fundo claro."
    )
    // se tiver sem light mode, manter a imagem normal
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de perfil de Gustavo Dourado utilizando uma jaqueta e camisa social no fundo escuro."
    )
  }
}
