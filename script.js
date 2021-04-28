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

function determine_phone(width, height) {
    if (width > height) {
        return "computer"
    }
    else if (width === height) {
        return "square"
    }
    else if (width < height) {
        return "phone"
    }

}

function get_major_wdith() {
    if(screen.width > window.width) {
        return ["screen", screen.width, window.innerWidth]
    }
    else if (screen.width == window.innerWidth) {
        return "same"
    }
    else {
        return ["window", window.innerWidth, screen.width]
    }
}