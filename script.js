document.getElementById("nav-icon").value = "cerrado";

let nav_mobile1 = document.querySelector(".responsive1");

let nav_mobile2 = document.querySelector(".responsive2");

let fondo = document.querySelector(".fondo");

const btnMenu = document.getElementById("mobile-navbar");

const btnEn = document.getElementById("botonen");

const btnDe = document.getElementById("botondes");

const btnUp = document.getElementById("btn-up");

btnEn.addEventListener("click", () => encrypt(document.getElementById("textoen").value));

btnDe.addEventListener("click", () => {
    decrypt(document.getElementById("textodes").value)
});

function encrypt(mensaje){
    let mensajeEncryptado = "";
    if(document.getElementById("cipher").value === "1"){
        let alphabetUpper = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
        let alphabetLower = alphabetUpper.toLowerCase();

        for (let i = 0; i < mensaje.length; i++) {
            if(mensaje[i] === mensaje[i].toLowerCase()) {
                for (let j = 0; j < alphabetLower.length; j++) {
                    if(mensaje[i] == alphabetLower[j]){
                        if(j-4 < 0){
                            mensajeEncryptado = mensajeEncryptado + alphabetLower[alphabetLower.length +(j-4)];
                        }else{
                            mensajeEncryptado = mensajeEncryptado + alphabetLower[j-4];
                        }
                    }
                }
            }else if(mensaje[i] === mensaje[i].toUpperCase()){
                for (let j = 0; j < alphabetUpper.length; j++) {
                    if(mensaje[i] == alphabetUpper[j]){
                        if(j-4 < 0){
                            mensajeEncryptado = mensajeEncryptado + alphabetUpper[alphabetUpper.length +(j-4)];
                        }else{
                            mensajeEncryptado = mensajeEncryptado + alphabetUpper[j-4];
                        }
                    }
                }
            }
            if(mensaje[i] == " "){
                mensajeEncryptado = mensajeEncryptado + " ";
            }
        }
        document.querySelector("#menEn").textContent = "";
    }else if(document.getElementById("cipher").value === "2"){
        mensajeEncryptado = btoa(mensaje);
        document.querySelector("#menEn").textContent = "";
    }else if(document.getElementById("cipher").value === ""){
        document.querySelector("#menEn").textContent = "*Seleccione una opcion";
    }
    
    document.querySelector("#encrypted").textContent = mensajeEncryptado;
}

function decrypt(mensajeEncryptado){
    let mensaje = "";
    if(document.getElementById("decipher").value === "1"){
        let alphabetUpper = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
        let alphabetLower = alphabetUpper.toLowerCase();

        for (let i = 0; i < mensajeEncryptado.length; i++) {
            if(mensajeEncryptado[i] === mensajeEncryptado[i].toLowerCase()){
                for (let j = 0; j < alphabetLower.length; j++) {
                    if(mensajeEncryptado[i] == alphabetLower[j]){
                        if(j+4 >= alphabetLower.length){
                            mensaje = mensaje + alphabetLower[0 +(j+4) - alphabetLower.length];
                        }else{
                            mensaje = mensaje + alphabetLower[j+4];
                        }
                    }
                }
            }else if(mensajeEncryptado[i] === mensajeEncryptado[i].toUpperCase()){
                for (let j = 0; j < alphabetUpper.length; j++) {
                    if(mensajeEncryptado[i] == alphabetUpper[j]){
                        if(j+4 >= alphabetUpper.length){
                            mensaje = mensaje + alphabetUpper[0 +(j+4) - alphabetUpper.length];
                        }else{
                            mensaje = mensaje + alphabetUpper[j+4];
                        }
                    }
                }
            }
            
            if(mensajeEncryptado[i] == " "){
                mensaje = mensaje + " ";
            }
        }
        document.querySelector("#menDe").textContent = "";
    }else if(document.getElementById("decipher").value === "2"){
        mensaje = atob(mensajeEncryptado);
        document.querySelector("#menDe").textContent = "";
    }else if(document.getElementById("decipher").value === ""){
        document.querySelector("#menDe").textContent = "*Seleccione una opcion";
    }
    
    document.querySelector("#decrypted").textContent = mensaje;
}

btnMenu.addEventListener("click", () => menu())

function menu(){
    let icon = document.getElementById("nav-icon");
    let menus = document.getElementById("menu");
    
    if(icon.value === "cerrado"){
        icon.value = "abierto";
        icon.src = "./icons/manu-abierto.png";
        menus.classList.add("menu-open");
        fondo.style.display = "block";
    }
    else if(icon.value === "abierto"){
        icon.value = "cerrado";
        icon.src = "./icons/manu-cerrado.png";
        menus.classList.remove("menu-open");
        fondo.style.display = "none";
        
    }
}

nav_mobile1.addEventListener("click", () => {
    document.getElementById("nav-icon").value = "cerrado";
    document.getElementById("nav-icon").src = "./icons/manu-cerrado.png";
    document.getElementById("menu").classList.remove("menu-open");
    fondo.style.display = "none";
});

nav_mobile2.addEventListener("click", () => {
    document.getElementById("nav-icon").value = "cerrado";
    document.getElementById("nav-icon").src = "./icons/manu-cerrado.png";
    document.getElementById("menu").classList.remove("menu-open");
    fondo.style.display = "none";
});

addEventListener("resize", (event) => {
    if(window.innerWidth > 600){
        document.getElementById("nav-icon").value = "cerrado";
        document.getElementById("nav-icon").src = "./icons/manu-cerrado.png";
        document.getElementById("menu").classList.remove("menu-open");
        document.getElementById("menu").style.display = "none";
        fondo.style.display = "none";
    }else if(window.innerWidth < 600){
        document.getElementById("nav-icon").value = "cerrado";
        document.getElementById("nav-icon").src = "./icons/manu-cerrado.png";
        document.getElementById("menu").classList.remove("menu-open");
        document.getElementById("menu").style.display = "flex";
        fondo.style.display = "none";
    }
});

btnUp.addEventListener("click", () => {
    window.scrollTo(0,0);
});

window.onscroll = () => {
    if(window.scrollY > 50){
        btnUp.classList.add("btn-up-on");
    }else if(window.scrollY <= 50){
        btnUp.classList.remove("btn-up-on");
    }
}
function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
  }

function scrolltoId(id){
    const elemento = document.getElementById(id);
    const x = getOffset(elemento).left;
    const y = getOffset(elemento).top
    window.scrollTo({
        top: y,
        left: x
    });
}