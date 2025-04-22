
  // mapeamento de rotas por idioma
  const langPaths = {
    pt: "/pt/index.html",
    es: "/es/index.html",
    en: "/index.html",
    default: "/index.html",
  };

  const idiomas = ["pt", "es", "en"];
  const langsSuportados = ["pt", "es"];

  // detecta o idioma do navegador
  let language = navigator.language || navigator.userLanguage;
  let lang = language.split("-")[0];
  lang = langsSuportados.includes(lang) ? lang : "en";

  // obtém o idioma da rota atual (assume /pt/, /es/ ou raiz = en)
  function getCurrentPathLang() {
    const path = window.location.pathname.toLowerCase();
    if (path.startsWith("/pt/")) return "pt";
    if (path.startsWith("/es/")) return "es";
    return "en";
  }

  // primeira carga ou recarregamentos: escolhe entre navegador ou armazenado
  function alterarIdiomaAoCarregarPagina() {
    const savedLang = localStorage.getItem("idioma");
    const browserLang = lang;
    const currentLang = getCurrentPathLang();

    if (!savedLang) {
      // 1ª visita: salva o idioma do navegador
      localStorage.setItem("idioma", browserLang);
      setOutrosIdiomasLoacalStorage(browserLang);
      // redireciona caso a rota atual não corresponda
      if (currentLang !== browserLang) {
        window.location.href = langPaths[browserLang] || langPaths.default;
        return;
      }
    } else {
      // visitas futuras: usa o idioma salvo
      if (currentLang !== savedLang) {
        window.location.href = langPaths[savedLang] || langPaths.default;
        return;
      }
    }

    // se já estiver na página correta, apenas ajusta o botão ativo
    const idiomaAtivo = savedLang || browserLang;
    mostrandoBotaoDoIdiomaSelecionado(
      idiomaAtivo,
      localStorage.getItem("outrosIdiomas").split(",")
    );
  }

  // ao clicar num botão de língua, salva e redireciona
  function selecionarIdioma(idioma) {
    localStorage.setItem("idioma", idioma);
    setOutrosIdiomasLoacalStorage(idioma);
    mostrandoBotaoDoIdiomaSelecionado(
      idioma,
      localStorage.getItem("outrosIdiomas").split(",")
    );
    window.location.href = langPaths[idioma] || langPaths.default;
  }

  // destaca o botão selecionado
  function mostrandoBotaoDoIdiomaSelecionado(idiomaSelecionado, outrosIdiomas) {
    outrosIdiomas.forEach(outro => {
      const el = document.getElementById(outro);
      if (el) {
        el.classList.add("flagUnActive");
        el.classList.remove("flagActive");
      }
    });
    const ativo = document.getElementById(idiomaSelecionado);
    if (ativo) {
      ativo.classList.add("flagActive");
      ativo.classList.remove("flagUnActive");
    }
  }

  // armazena as outras línguas para controle de botões
  function setOutrosIdiomasLoacalStorage(idioma) {
    const outros = idiomas.filter(i => i !== idioma);
    localStorage.setItem("outrosIdiomas", outros);
  }

  // chama o carregamento ao fim da definição
  alterarIdiomaAoCarregarPagina();

