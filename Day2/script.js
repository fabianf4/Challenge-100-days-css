let open = true
function clickMe() {
  var line1 = document.getElementById('line1')
  var line2 = document.getElementById('line2')
  var line3 = document.getElementById('line3')

  line2.classList.toggle('desaparece')
  line2.classList.toggle('aparece')

  line1.classList.toggle('baja')
  line1.classList.toggle('sube2')

  line3.classList.toggle('sube')
  line3.classList.toggle('baja2')
}
