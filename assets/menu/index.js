// Funcion para menu Hamburguesa
(function () {
  if (document.querySelector("#top-nav-toggle")) {
    var navToggle = document.querySelector("#top-nav-toggle");

    function watchNavClose(e) {
      var topNav = document.querySelector(".top-bar");
      if (!e.path.includes(topNav)) {
        openCloseNav();
        document.documentElement.removeEventListener("click", watchNavClose);
      }
    }

    function openCloseNav() {
      var navToggle = document.querySelector("#top-nav-toggle");

      if (!navToggle.classList.contains("closed")) {
        navToggle.classList.add("closed");
        document.querySelector("#top-bar__nav").classList.remove("collapsed");
        document.querySelector("html").addEventListener("click", watchNavClose);
      } else {
        navToggle.classList.remove("closed");
        document.querySelector("#top-bar__nav").classList.add("collapsed");
        document.documentElement.removeEventListener("click", watchNavClose);
      }
    }

    navToggle.addEventListener("click", openCloseNav);
  }
})();
// Fin funcion menu Hamburguesa

// Arreglo de Objeto del Menu
const menuIndex = [
  {
    Id: 1,
    titulo: "Inicio",
    href: "home.php",
  },
  {
    Id: 7,
    titulo: "Contacto",
    href: "contact.php",
  },
  {
    Id: 6,
    titulo: "Empresa",
    href: "about.php",
  },
  {
    Id: 2,
    titulo: "Laboratorio",
    href: "laboratory.php",
  },
  {
    Id: 4,
    titulo: "Alimentos",
    href: "foods.php",
    subitme: [],
  },
  {
    Id: 5,
    titulo: "Diagnóstico Clínico",
    href: "clinical-diagnostic.php",
  },
  {
    Id: 2,
    titulo: "Productos",
    href: "products.html",
  },
  {
    Id: 3,
    titulo: "Software",
    href: "software.php",
  },
];
// Fin Arrelgo de Objeto del Menu

// Ordenar arreglo para Menu
const menuOrder = menuIndex.sort((a, b) => a.Id - b.Id);
const listaMenu = document.querySelector(".top-bar__nav-list");
const li = document.createElement("li");

menuOrder.map((titulo) => {
  const elem = document.createElement("a");
  elem.setAttribute("href", `${titulo.href}`);
  elem.appendChild(document.createTextNode(`${titulo.titulo}`));
  li.appendChild(elem);
});

listaMenu.appendChild(li);
// Fin ordenar arreglo para Menu

const selectedEnglish = document.getElementById("eng");
const selectedEspanol = document.getElementById("esp");
const hidden = "display:none;";
const shown = "display:block;";

const allEnglishText = document.getElementsByClassName("eng");
const allEspanolText = document.getElementsByClassName("esp");

//SHOW ALL ENGLISH TEXT
function showEnglishText() {
  for (element in allEnglishText) {
    allEnglishText[element].style = shown;
  }
  for (element in allEspanolText) {
    allEspanolText[element].style = hidden;
  }
}
//SHOW ALL SPANISH TEXT
function showSpanishText() {
  for (element in allEnglishText) {
    allEnglishText[element].style = hidden;
  }
  for (element in allEspanolText) {
    allEspanolText[element].style = shown;
  }
}

//ENGLISH-> ALL OTHERS SWITCHED OFF
selectedEnglish.addEventListener("click", () => {
  selectedEnglish.classList.add("langSelected");
  selectedEspanol.classList.remove("langSelected");

  showEnglishText();
});

//SPANISH-> ALL OTHERS SWITCHED OFF
selectedEspanol.addEventListener("click", () => {
  selectedEspanol.classList.add("langSelected");
  selectedEnglish.classList.remove("langSelected");

  showSpanishText();
});

//ENGLISH-> ALL OTHERS SWITCHED OFF
selectedEnglish.addEventListener("click", () => {
  selectedEnglish.classList.add("langSelected");
  selectedEspanol.classList.remove("langSelected");

  showEnglishText();
  localStorage.setItem("languageActive", "english");
});

//SPANISH-> ALL OTHERS SWITCHED OFF
selectedEspanol.addEventListener("click", () => {
  selectedEspanol.classList.add("langSelected");
  selectedEnglish.classList.remove("langSelected");

  showSpanishText();
  localStorage.setItem("languageActive", "espanol");
});

//LOCAL STORAGE ADDON
switch (localStorage.getItem("languageActive")) {
  case "english":
    selectedEnglish.classList.add("langSelected");
    showEnglishText();
    break;

  case "espanol":
    selectedEspanol.classList.add("langSelected");
    showSpanishText();
    break;

  default:
    //default ENGLISH text shown, all others disabled
    //default -> no local storage exists
    selectedEnglish.classList.add("langSelected");
    showEnglishText();
}

// Disponibilidad sessionStorage
// if(typeof(Storage)!= "Undefined"){
//   console.log("sessionStoage Disponible")
// } else {
//   console.log("Incompatible con sessionStoage")
// }

// Guardar Datos SessionStorage
const miFunc = () => {
  const nom = document.querySelector(".nameInput").value;
  const email = document.querySelector(".emailInput").value;
  const phon = document.querySelector(".phoneInput").value;

  sessionStorage.setItem("Name", nom);
  sessionStorage.setItem("Email", email);
  sessionStorage.setItem("Phone", phon);
};

// VALIDACION DE FOMRULARIO
const form = document.querySelector(".formcontact");
const nom = document.querySelector(".nameInput");
const email = document.querySelector(".emailInput");
const phon = document.querySelector(".phoneInput");
const parrafo = document.querySelector(".parrafo");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let warnings = "";
  let entrar = false;
  const regexName = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/;
  const regexEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  const regexPhone = /^(\+?56)?(\s?)(0?9)(\s?)[98765432]\d{7}$/;
  parrafo.innerHTML = "";

  if (!regexName.test(nom.value)) {
    warnings += `El nombre es invalido <br>`;
    entrar = true;
  }
  if (!regexEmail.test(email.value)) {
    warnings += `El email es invalido <br>`;
    entrar = true;
  }
  if (!regexPhone.test(phon.value)) {
    warnings += `El numero es invalido <strong>UTILIZAR CODIGO PAÍS CHILE +56XXXXXXXXX</strong> <br>`;
    entrar = true;
  }
  if (entrar) {
    parrafo.innerHTML = warnings;
  }
});

// const expresiones = {
//   usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
//   nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
//   password: /^.{4,12}$/, // 4 a 12 digitos.
//   correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
//   telefono: /^\d{7,14}$/ // 7 a 14 numeros.
// }
