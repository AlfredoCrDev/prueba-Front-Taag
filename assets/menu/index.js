

const menuIndex = [
  {
	Id: 1,
  titulo: "Inicio",
href: "home.php"
  },
  {
	Id:7,
titulo: "Contacto",
href: "contact.php"
  },
  {
	Id:6,
titulo: "Empresa",
href: "about.php"
  },
  {
	Id:2,
titulo: "Laboratorio",
href: "laboratory.php"
  },
  {
	Id:4,
titulo: "Alimentos",
href: "foods.php",
subitme: []
  },
  {
	Id:5,
titulo: "Diagnóstico Clínico",
href: "clinical-diagnostic.php"
  },
  {
	Id:2,
titulo: "Productos",
href: "products.php"
  },
  {
	Id:3,
titulo: "Software",
href: "software.php"
  }
]



  const menuOrder = menuIndex.sort(((a, b) => a.Id - b.Id));
  const listaMenu = document.querySelector("#app");
  const ul = document.createElement("ul");
  
  
  menuOrder.forEach((titulo) =>{
    let elem = document.createElement("li");
    elem.appendChild(
      document.createTextNode(`${titulo.titulo}`)
    );
    ul.appendChild(elem);
  });

listaMenu.appendChild(ul)



// const list = menuOrder.map( e =>{
  //   e = e.titulo
  // });
  
  // console.log(list)
  
