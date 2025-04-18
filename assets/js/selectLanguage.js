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
  outrosIdiomas.forEach((OutroIdioma) => {
    const el = document.getElementById(OutroIdioma)
    el.classList.add("flagUnActive");
    el.classList.remove("flagActive");
  });

  const elSelecionado = document.getElementById(idiomaSelecionado);
  elSelecionado.classList.add("flagActive");
  elSelecionado.classList.remove("flagUnActive");
}

function setOutrosIdiomasLoacalStorage(idioma) {
  let outrosIdiomas = idiomas.filter((outroIdioma) => outroIdioma !== idioma);
  localStorage.setItem("outrosIdiomas", outrosIdiomas);
}

alterarIdiomaAoCarregarPagina();
