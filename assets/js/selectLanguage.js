let lenguage = navigator.language || navigator.userLanguage;
let lang = lenguage.split("-")[0];

let idiomaSelecionado = localStorage.getItem("idioma");

console.log("idiomaSelecionado", idiomaSelecionado);

function alterarIdiomaAoCarregarPagina(idiomaSelecionado) {
  if (!idiomaSelecionado) {
    const langPaths = {
      pt: "./pt/index.html",
      es: "./es/index.html",
      default: "./index.html",
    };

    window.location.href = langPaths[lang] || langPaths.default;
    localStorage.setItem("idioma", lang);
  }

  alterandoClasses(idiomaSelecionado, localStorage.getItem("outrosIdiomas").split(","));
}

function selecionarIdioma(idioma) {
  localStorage.setItem("idioma", idioma);
  const langPaths = {
    pt: "./pt/index.html",
    es: "./es/index.html",
    en: "./index.html",
  };
  const idiomas = ["pt", "es", "en"];

  let outrosIdiomas = idiomas.filter((path) => path !== idioma);
  localStorage.setItem("outrosIdiomas", outrosIdiomas);

  alterandoClasses(idioma, outrosIdiomas);
    window.location.href = langPaths[idioma];
}



function  alterandoClasses(idiomaSelecionado,outrosIdiomas) {
    outrosIdiomas.forEach((path) => {
        document.getElementById(path).classList.add('flagUnActive');
        document.getElementById(path).classList.remove('flagActive');
        document.getElementById(idiomaSelecionado).classList.add('flagActive');
        document.getElementById(idiomaSelecionado).classList.remove('flagUnActive');
    });
}

alterarIdiomaAoCarregarPagina(idiomaSelecionado);
