function inserirRodape() {
  return `
<div class="container-rodape">
<a href="" class="link-whatsapp">
  <button class="btn whatsapp"><i class="fa-brands fa-whatsapp"></i> Fale Conosco via Whatsapp</button>
</a>
</div>
`
}

document.querySelector("#rodape").innerHTML = inserirRodape()