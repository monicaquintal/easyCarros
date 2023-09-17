function inserirRodape() {
  return `
<div class="d-flex flex-row align-items-center justify-content-center">
<a href="" class="link-whatsapp">
  <button class="btn whatsapp d-flex flex-row align-items-center justify-content-center gap-2"><i class="fa-brands fa-whatsapp"></i> Fale Conosco via Whatsapp</button>
</a>
</div>
`
}

document.querySelector("#rodape").innerHTML = inserirRodape()