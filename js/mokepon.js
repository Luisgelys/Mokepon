function iniciarJuego () {
    let btnMascotas = document.getElementById('btn-mascotas')
    btnMascotas.addEventListener('click', seleccionarMascota)
}

function seleccionarMascota () {
    let inputHipodoge = document.getElementById('hipodogue')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascota = document.getElementById('tu-mascota')

    if (inputHipodoge.checked) {
        spanMascota.innerHTML = 'Hipodogue'
        alert ('Seleccionaste a Hipodogue')
    } else if (inputCapipepo.checked){
        spanMascota.innerHTML = 'Capipepo'
        alert ('Seleccionaste a Capipepo')
    } else if (inputRatigueya.checked) {
        spanMascota.innerHTML = 'Ratigueya'
        alert ('Seleccionaste a Ratigueya')
    } else {
        alert ('Debes seleccionar una mascota')
    }
}

function obtenerId (mascota) {
    let  inputMascota = document.getElementById(mascota)
}

window.addEventListener('load', iniciarJuego)