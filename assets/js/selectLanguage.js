const langPaths = {
  pt: "/pt/index.html",
  es: "/es/index.html",
  en: "/index.html",
  default: "/index.html",
};

const idiomas = ["pt", "es", "en"];
const langsSuportados = ["pt", "es"];

let language = navigator.language || navigator.userLanguage;
let lang = language.split("-")[0];

lang = langsSuportados.includes(lang) ? lang : "en";

function alterarIdiomaAoCarregarPagina() {
  let idiomaSelecionado = localStorage.getItem("idioma");

  if (!idiomaSelecionado) {
    localStorage.setItem("idioma", lang);
    setOutrosIdiomasLoacalStorage(lang);
    window.location.href = langPaths[lang] || langPaths.default;
    return;
  }

  alterandoClasses(
    idiomaSelecionado,
    localStorage.getItem("outrosIdiomas").split(",")
  );
}

function selecionarIdioma(idioma) {
  localStorage.setItem("idioma", idioma);
  setOutrosIdiomasLoacalStorage(idioma);
  alterandoClasses(idioma, localStorage.getItem("outrosIdiomas").split(","));
  window.location.href = langPaths[idioma];
}

function alterandoClasses(idiomaSelecionado, outrosIdiomas) {
  outrosIdiomas.forEach((path) => {
    document.getElementById(path).classList.add("flagUnActive");
    document.getElementById(path).classList.remove("flagActive");
  });
  document.getElementById(idiomaSelecionado).classList.add("flagActive");
  document.getElementById(idiomaSelecionado).classList.remove("flagUnActive");
}

function setOutrosIdiomasLoacalStorage(idioma) {
  let outrosIdiomas = idiomas.filter((path) => path !== idioma);
  localStorage.setItem("outrosIdiomas", outrosIdiomas);
}

alterarIdiomaAoCarregarPagina();
