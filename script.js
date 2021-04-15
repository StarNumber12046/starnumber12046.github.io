console.error("salve")


function editheight() {
    console.error("salve")
    barra = document.getElementById("barra-laterale")
    barra.style.height = screen.height;
    console.log(screen.height)
}


function check() {
    var allisdark = true
    if (allisdark == false) {
        document.getElementById("ilcentro").style.backgroundColor = 'black';
    }
    if (allisdark == true) {
        document.getElementById("ilcentro").style.backgroundColor = 'white';
    }

}
